// @vitest-environment node
/**
 * つづもんの段階別メッセージ（体験検討中／体験中／登録後）の純粋ロジックのテスト。
 * 設計の正本: pdf-workbook/docs/つづもん-メッセージ設計.md
 *
 * push の送信そのもの（Firestore / LINE API）はここでは検証しない。
 * 「誰にどの文面が当たるか」を決める純粋関数だけを固定する。
 */
import { describe, it, expect } from 'vitest';

import {
  TSUDUMON_UNITS,
  cursorForGrade,
  referenceUrl,
  unitAtCursor,
  workbookUrl,
} from '../tsudumonUnits';
import {
  buildDailyUnitFlex,
  buildDailyUnitMessage,
  jstDateKey,
  jstHour,
} from '../tsudumonDailyUnit';
import {
  TSUDUMON_FREQUENCIES,
  isDeliveryDay,
  normalizeFrequency,
  DEFAULT_WEEKDAY_HOUR,
  DEFAULT_WEEKEND_HOUR,
  TSUDUMON_HOUR_CHOICES,
  hourForDate,
  hourLabel,
  isWeekendJst,
  normalizeHour,
} from '../tsudumonSchedule';
import {
  shouldSendRecapAt,
  jstDateKey as recapJstDateKey,
} from '../tsudumonRecapCore';
import {
  afterExpiryMessage,
  daysBetweenJst,
  introDay2Message,
  introDay7Message,
} from '../tsudumonLifecycle';
import {
  buildStartFlex,
  buildStep1Flex,
  buildStep1Message,
  buildStep3Message,
  step1QuickReply,
} from '../tsudumonOnboarding';

describe('tsudumonUnits: 単元表', () => {
  it('全19単元・番号は01〜19の連番', () => {
    expect(TSUDUMON_UNITS).toHaveLength(19);
    TSUDUMON_UNITS.forEach((u, i) => {
      expect(u.no).toBe(String(i + 1).padStart(2, '0'));
    });
  });

  it('学年の割り当ては 中1=01-06 / 中2=07-12 / 中3=13-19', () => {
    const byGrade = (g: string) =>
      TSUDUMON_UNITS.filter((u) => u.grade === g).map((u) => u.no);
    expect(byGrade('中1')).toEqual(['01', '02', '03', '04', '05', '06']);
    expect(byGrade('中2')).toEqual(['07', '08', '09', '10', '11', '12']);
    expect(byGrade('中3')).toEqual(['13', '14', '15', '16', '17', '18', '19']);
  });

  it('カーソルは19で1周し、負数でも範囲内に収まる', () => {
    expect(unitAtCursor(0).no).toBe('01');
    expect(unitAtCursor(18).no).toBe('19');
    expect(unitAtCursor(19).no).toBe('01'); // 2周目は先頭へ
    expect(unitAtCursor(-1).no).toBe('19');
  });

  it('学年から開始カーソルを引ける（未知の学年は先頭）', () => {
    expect(unitAtCursor(cursorForGrade('中1')).no).toBe('01');
    expect(unitAtCursor(cursorForGrade('中2')).no).toBe('07');
    expect(unitAtCursor(cursorForGrade('中3')).no).toBe('13');
    expect(unitAtCursor(cursorForGrade(null)).no).toBe('01');
    expect(unitAtCursor(cursorForGrade('中4')).no).toBe('01');
  });

  it('全19単元にツカミがあり、LINEで折り返さない長さに収まっている', () => {
    for (const u of TSUDUMON_UNITS) {
      expect(u.hook.length).toBeGreaterThanOrEqual(15);
      expect(u.hook.length).toBeLessThanOrEqual(35);
      // ツカミは「話の中身」。タイトルをそのまま繰り返しても情報が増えない。
      expect(u.hook).not.toBe(u.title);
      expect(u.hook).not.toBe(u.subtitle);
    }
  });

  it('教材URLは配信ビルドのパス（/wb/{no}/ , /ref/{no}/）と一致する', () => {
    expect(workbookUrl('04')).toBe('https://tsudumon.jp/wb/04/');
    expect(referenceUrl('04')).toBe('https://tsudumon.jp/ref/04/');
  });
});

describe('tsudumonDailyUnit: 今日の1単元', () => {
  // 2026-07-27 は月曜（JST）
  const monJst = new Date('2026-07-27T10:00:00+09:00');

  it('単元名・学年・問題集/参考書リンクが入る', () => {
    const text = buildDailyUnitMessage(cursorForGrade('中2'), monJst);
    expect(text).toContain('中2・07');
    expect(text).toContain('ヨーロッパと天下統一');
    expect(text).toContain('https://tsudumon.jp/wb/07/');
    expect(text).toContain('https://tsudumon.jp/ref/07/');
  });

  it('曜日で書き出しが変わる（毎日まったく同じ文面にしない）', () => {
    const sat = new Date('2026-08-01T10:00:00+09:00');
    expect(buildDailyUnitMessage(0, monJst)).not.toBe(
      buildDailyUnitMessage(0, sat)
    );
  });

  it('書き出しは曜日×カーソルで14通りある（同じ曜日でも連続で同文にならない）', () => {
    // 単元が一巡する19日のあいだ、各曜日で少なくとも2通りの書き出しが出る。
    const openers = new Set<string>();
    // 2026-07-26 は日曜（JST）。そこから19日ぶん＝全曜日×カーソル偶奇を通る。
    const start = new Date('2026-07-26T10:00:00+09:00').getTime();
    const day = 24 * 60 * 60 * 1000;
    for (let cursor = 0; cursor < 19; cursor++) {
      openers.add(
        buildDailyUnitMessage(cursor, new Date(start + cursor * day)).split(
          '\n'
        )[0]
      );
    }
    expect(openers.size).toBe(14);
  });

  it('目次の写し（subtitle）ではなく、中身が分かるツカミを見せる', () => {
    // 「江戸幕府成立 〜 天保の改革」だけでは何の話か分からず、開く理由にならない。
    const text = buildDailyUnitMessage(7, monJst); // 08 幕藩体制の確立
    expect(text).toContain('幕藩体制の確立');
    expect(text).toContain('参勤交代');
    expect(text).not.toContain('江戸幕府成立 〜 天保の改革');
  });

  it('敬体を混ぜない（文言ガイドライン §2「基調はタメ口やわらか」）', () => {
    // 敬体が許されるのは購入・ライセンス・料金の案内だけ。学習の声かけには使わない。
    for (let cursor = 0; cursor < TSUDUMON_UNITS.length; cursor++) {
      for (const firstTime of [false, true]) {
        const text = buildDailyUnitMessage(
          cursor,
          monJst,
          undefined,
          undefined,
          undefined,
          firstTime
        );
        for (const ng of ['です', 'ます', 'ください', 'ましょう']) {
          expect(text).not.toContain(ng);
        }
      }
    }
  });

  it('JST暦日キーは日本時間で切り替わる（UTCの日付ではない）', () => {
    // UTC では 2026-07-26 23:00 だが、JST では 2026-07-27
    expect(jstDateKey(new Date('2026-07-26T23:00:00Z'))).toBe('2026-07-27');
    expect(jstDateKey(new Date('2026-07-26T14:00:00Z'))).toBe('2026-07-26');
  });
});

describe('tsudumonDailyUnit: 配信カード（Flex）', () => {
  const monJst = new Date('2026-07-27T10:00:00+09:00');
  /** バブル内の全テキストを拾う（本文にURLが露出していないかの検査用）。 */
  const allText = (node: unknown): string[] => {
    if (Array.isArray(node)) return node.flatMap(allText);
    if (!node || typeof node !== 'object') return [];
    const o = node as Record<string, unknown>;
    const here =
      o.type === 'text' && typeof o.text === 'string' ? [o.text] : [];
    return [...here, ...Object.values(o).flatMap(allText)];
  };

  it('教材URLは本文に出さず、ボタンのuriにだけ持つ（プレビューを2枚出さないため）', () => {
    // テキスト配信でURLを2本並べると、LINEが本文より大きいプレビューを2枚
    // ぶら下げて肝心の単元名が埋もれる。カード化の主目的がこれ。
    const flex = buildDailyUnitFlex(7, monJst); // 08 幕藩体制の確立
    for (const t of allText(flex.contents)) {
      expect(t).not.toContain('https://');
    }
    const json = JSON.stringify(flex);
    expect(json).toContain('https://tsudumon.jp/ref/08/');
    expect(json).toContain('https://tsudumon.jp/wb/08/');
  });

  it('altTextに単元名まで入れる（通知だけ見て開くか決められるように）', () => {
    const flex = buildDailyUnitFlex(7, monJst);
    expect(flex.altText).toContain('幕藩体制の確立');
    expect(flex.altText).toContain('中2');
  });

  it('カードとテキスト版は必ず同じ単元を指す（片方だけ直す事故の検知）', () => {
    for (let cursor = 0; cursor < TSUDUMON_UNITS.length; cursor++) {
      const flex = buildDailyUnitFlex(cursor, monJst);
      const unit = TSUDUMON_UNITS[cursor];
      expect(allText(flex.contents)).toContain(unit.title);
      expect(buildDailyUnitMessage(cursor, monJst)).toContain(unit.title);
    }
  });

  it('主導線は「参考書で確認」「問題を解く」の2択だけ（フッターを増やさない）', () => {
    // ボタンのラベルは行き先の名前にする。「まずは読む」「そのまま解く」だと
    // 押した先が参考書なのか問題集なのか分からない（ユーザー指摘 2026-08-01）。
    const footer = (
      buildDailyUnitFlex(7, monJst, { unit: '05', wrong: 3 }).contents as {
        footer: { contents: { type: string; action?: { label: string } }[] };
      }
    ).footer;
    const labels = footer.contents
      .filter((c) => c.type === 'button')
      .map((c) => c.action?.label);
    expect(labels).toEqual(['参考書で確認', '問題を解く']);
  });

  it('復習ボタンは説明文と同じブロックの中に置く（離すと何に戻るか分からない）', () => {
    const withoutReview = buildDailyUnitFlex(7, monJst);
    const withReview = buildDailyUnitFlex(7, monJst, {
      unit: '05',
      wrong: 3,
      text: '📝 「武士と鎌倉幕府」に、まちがえたままの問題が3問のこってるよ。',
    });
    expect(JSON.stringify(withoutReview)).not.toContain(
      'https://tsudumon.jp/wb/05/'
    );
    expect(allText(withReview.contents).join('')).toContain('武士と鎌倉幕府');
    // 復習のURLは body 側（説明文と同じブロック）にあり、footer には無い
    const { body, footer } = withReview.contents as {
      body: unknown;
      footer: unknown;
    };
    expect(JSON.stringify(body)).toContain('https://tsudumon.jp/wb/05/');
    expect(JSON.stringify(footer)).not.toContain('https://tsudumon.jp/wb/05/');
  });

  it('復習の行き先は章の目次ではなく節の「やり方をえらぼう」（#t1）', () => {
    // 目次に降ろすと、復習しに来た人にもう一度「どれをやるか」を探させることになる。
    const review = { unit: '05', wrong: 3 };
    expect(JSON.stringify(buildDailyUnitFlex(7, monJst, review))).toContain(
      'https://tsudumon.jp/wb/05/#t1'
    );
    // テキスト版（Flex失敗時のフォールバック）も同じ行き先にする
    expect(buildDailyUnitMessage(7, monJst, review)).toContain(
      'https://tsudumon.jp/wb/05/#t1'
    );
  });

  it('今日と同じ単元の見直しは出さない（同じリンクを2回押させない）', () => {
    const flex = buildDailyUnitFlex(7, monJst, { unit: '08', wrong: 2 });
    // 08 のボタンは「読む」「解く」の2本だけ。復習ボタンは増えない
    expect(
      JSON.stringify(flex).split('https://tsudumon.jp/wb/08/').length - 1
    ).toBe(1);
  });
});

describe('tsudumonOnboarding: 登録直後（1タップで完了）', () => {
  const flexText = (node: unknown): string[] => {
    if (Array.isArray(node)) return node.flatMap(flexText);
    if (!node || typeof node !== 'object') return [];
    const o = node as Record<string, unknown>;
    const here =
      o.type === 'text' && typeof o.text === 'string' ? [o.text] : [];
    return [...here, ...Object.values(o).flatMap(flexText)];
  };
  const buttons = (flex: Record<string, unknown>) => {
    const out: { label: string; type: string }[] = [];
    const walk = (n: unknown): void => {
      if (Array.isArray(n)) return n.forEach(walk);
      if (!n || typeof n !== 'object') return;
      const o = n as Record<string, unknown>;
      if (o.type === 'button' && o.action) {
        const a = o.action as { label: string; type: string };
        out.push({ label: a.label, type: a.type });
      }
      Object.values(o).forEach(walk);
    };
    walk(flex.contents);
    return out;
  };

  it('聞くのは学年だけ。カードのボタン3つで登録が終わる', () => {
    // テキスト＋クイックリプライだと質問が本文に埋もれ、選択肢がトーク下部に
    // 離れて出る。カードなら質問とボタンが同じ面に載る（ユーザー指摘 2026-08-02）。
    const flex = buildStep1Flex();
    expect(flexText(flex.contents).join('')).toContain('何年生');
    expect(buttons(flex).map((b) => b.label)).toEqual(['中1', '中2', '中3']);
    expect(buttons(flex).every((b) => b.type === 'postback')).toBe(true);
  });

  it('カードが落ちてもテキストで同じことを聞ける（学年だけ）', () => {
    // push / reply とも Flex 失敗時はテキストに落とす。片方だけ直すと
    // フォールバックだけ古い質問（目的）に戻る。
    expect(buildStep1Message()).toContain('何年生');
    const labels = step1QuickReply().items.map(
      (i) => (i.action as { label: string }).label
    );
    expect(labels).toEqual(['中1', '中2', '中3']);
  });

  it('テスト範囲は質問しない（設定ページで選ぶものにする）', () => {
    // 初めて使う中学生に、まだ触ってもいない教材の「範囲」を4択で聞いても
    // 答えようがない。ここがいちばん混乱する場所だった。
    const start = buildStartFlex('08', false);
    const all = flexText(start.contents).join('') + JSON.stringify(start);
    expect(all).not.toContain('範囲は決まってる');
    expect(all).not.toContain('だいたい決まってる');
    expect(all).not.toContain('わからない（相談する）');
  });

  it('学年を押した直後に、その場で始められる単元が出る', () => {
    const start = buildStartFlex('08', false);
    expect(flexText(start.contents).join('')).toContain('幕藩体制の確立');
    const labels = buttons(start).map((b) => b.label);
    expect(labels).toContain('参考書で確認');
    expect(labels).toContain('問題を解く');
  });

  it('範囲未設定のときだけ「テスト範囲を決める（あとでOK）」を添える', () => {
    // ここで止まらせないため、あとでよいと分かる置き方にする。
    const without = buttons(buildStartFlex('08', false)).map((b) => b.label);
    expect(without).toContain('テスト範囲を決める（あとでOK）');
    // すでに範囲があるなら出さない（押す必要のないボタンを並べない）
    const withExam = buttons(buildStartFlex('08', true)).map((b) => b.label);
    expect(withExam).not.toContain('テスト範囲を決める（あとでOK）');
  });

  it('カードが落ちても同じ内容をテキストで返せる', () => {
    const t = buildStep3Message('08', false);
    expect(t).toContain('幕藩体制の確立');
    expect(t).toContain('https://tsudumon.jp/wb/08/');
    expect(t).toContain('テスト範囲を決める');
  });
});

describe('tsudumonSchedule: 配信時刻（平日／土日を別々に）', () => {
  it('選択肢にない値・不正値は既定値へ丸める（クライアントを信用しない）', () => {
    expect(normalizeHour(17, DEFAULT_WEEKDAY_HOUR)).toBe(17);
    expect(normalizeHour('8', DEFAULT_WEEKEND_HOUR)).toBe(8);
    expect(normalizeHour(3, DEFAULT_WEEKDAY_HOUR)).toBe(DEFAULT_WEEKDAY_HOUR); // 深夜3時は選べない
    expect(normalizeHour(25, DEFAULT_WEEKDAY_HOUR)).toBe(DEFAULT_WEEKDAY_HOUR);
    expect(normalizeHour(19.5, DEFAULT_WEEKDAY_HOUR)).toBe(
      DEFAULT_WEEKDAY_HOUR
    );
    expect(normalizeHour(undefined, DEFAULT_WEEKEND_HOUR)).toBe(
      DEFAULT_WEEKEND_HOUR
    );
    expect(normalizeHour('よる', DEFAULT_WEEKEND_HOUR)).toBe(
      DEFAULT_WEEKEND_HOUR
    );
  });

  it('既定値は選択肢に含まれている', () => {
    expect(TSUDUMON_HOUR_CHOICES).toContain(DEFAULT_WEEKDAY_HOUR);
    expect(TSUDUMON_HOUR_CHOICES).toContain(DEFAULT_WEEKEND_HOUR);
  });

  it('土日判定・時刻取得はJST基準（UTCの曜日ではない）', () => {
    // UTC では金曜 2026-07-31 23:00 だが、JST では土曜 08:00
    const jstSatMorning = new Date('2026-07-31T23:00:00Z');
    expect(isWeekendJst(jstSatMorning)).toBe(true);
    expect(jstHour(jstSatMorning)).toBe(8);
    // JST 金曜 17:00
    const jstFriEvening = new Date('2026-07-31T08:00:00Z');
    expect(isWeekendJst(jstFriEvening)).toBe(false);
    expect(jstHour(jstFriEvening)).toBe(17);
  });

  it('平日は平日設定、土日は土日設定が使われる（例: 平日17時・土日8時）', () => {
    const fri = new Date('2026-07-31T12:00:00+09:00');
    const sun = new Date('2026-08-02T12:00:00+09:00');
    expect(hourForDate(fri, 17, 8)).toBe(17);
    expect(hourForDate(sun, 17, 8)).toBe(8);
  });

  it('時刻ラベルは朝／夕方／夜で言い分ける', () => {
    expect(hourLabel(8)).toBe('朝8時');
    expect(hourLabel(17)).toBe('夕方17時');
    expect(hourLabel(19)).toBe('夜19時');
  });
});

describe('tsudumonLifecycle: 未体験フォロー・期限終了フォロー', () => {
  it('JST暦日の差を数える（時刻ではなく日付の差）', () => {
    const a = new Date('2026-07-26T23:30:00+09:00');
    const b = new Date('2026-07-27T00:30:00+09:00');
    expect(daysBetweenJst(a, b)).toBe(1);
    expect(daysBetweenJst(a, new Date('2026-07-28T19:00:00+09:00'))).toBe(2);
  });

  it('2日後の1通目は、無料単元と体験開始の両方へ導く', () => {
    const t = introDay2Message();
    expect(t).toContain('https://tsudumon.jp/wb/04/');
    expect(t).toContain('https://tsudumon.jp/start/');
  });

  it('7日後の2通目は「これで最後」と明示する（しつこく追わない）', () => {
    expect(introDay7Message()).toContain('最後');
  });

  it('期限終了フォローは、無料で残る範囲と再開導線を伝える', () => {
    const t = afterExpiryMessage();
    expect(t).toContain('律令国家と奈良時代');
    expect(t).toContain('https://tsudumon.jp/account/?do=subscribe');
  });

  it('どの文面にも一問一答（別サービス）の機能名を混ぜない', () => {
    for (const t of [
      introDay2Message(),
      introDay7Message(),
      afterExpiryMessage(),
      buildDailyUnitMessage(0, new Date('2026-07-27T10:00:00+09:00')),
    ]) {
      expect(t).not.toContain('出題範囲設定');
      expect(t).not.toContain('スタ先生');
      expect(t).not.toContain('チャットでスタディ');
    }
  });
});

describe('配信頻度とpush上限（ユーザー指示 2026-07-26）', () => {
  it('頻度は毎日／週3／週1／送らない から選べる', () => {
    expect(TSUDUMON_FREQUENCIES).toEqual(['daily', 'week3', 'weekly', 'off']);
    expect(normalizeFrequency('week3')).toBe('week3');
    // 不正値・未設定は既定（毎日）へ丸める
    expect(normalizeFrequency('every-hour')).toBe('daily');
    expect(normalizeFrequency(undefined)).toBe('daily');
  });

  it('週3は月・水・金、週1は月曜だけ、offは常に送らない', () => {
    const mon = new Date('2026-07-27T19:00:00+09:00');
    const tue = new Date('2026-07-28T19:00:00+09:00');
    const wed = new Date('2026-07-29T19:00:00+09:00');
    expect(isDeliveryDay('daily', tue)).toBe(true);
    expect(isDeliveryDay('week3', mon)).toBe(true);
    expect(isDeliveryDay('week3', tue)).toBe(false);
    expect(isDeliveryDay('week3', wed)).toBe(true);
    expect(isDeliveryDay('weekly', mon)).toBe(true);
    expect(isDeliveryDay('weekly', wed)).toBe(false);
    expect(isDeliveryDay('off', mon)).toBe(false);
  });

  it('おつかれさまは選んだ曜日・時刻に届く（1日最大2通のうち1通）', () => {
    const now = new Date('2026-07-27T20:00:00+09:00').getTime(); // 月曜20時
    const base = {
      unit: '07',
      ms: 12 * 60 * 1000,
      answered: 5,
      lastSyncAt: now - 20 * 60 * 1000,
      pending: true,
    };
    const daily = { days: [0, 1, 2, 3, 4, 5, 6], hour: 20 };
    // 選んだ時刻ちょうどなら送る
    expect(shouldSendRecapAt(base, now, daily)).toBe(true);
    // 時刻が違えば送らない
    expect(shouldSendRecapAt(base, now, { ...daily, hour: 19 })).toBe(false);
    // 曜日から外れていれば送らない（火・木だけ設定）
    expect(shouldSendRecapAt(base, now, { days: [2, 4], hour: 20 })).toBe(
      false
    );
    // その日すでにおつかれさまを送っていれば送らない
    // （「終わったよ！」報告で送った日も、この日付が入るので二重にならない）
    expect(
      shouldSendRecapAt(
        { ...base, lastRecapDate: recapJstDateKey(now) },
        now,
        daily
      )
    ).toBe(false);
  });
});

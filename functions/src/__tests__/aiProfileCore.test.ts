import { describe, it, expect } from 'vitest';

import {
  validateProfilePatch,
  applyProfilePatch,
  buildProfilePrompt,
  buildFreeProfilePrompt,
  parseProfileExtraction,
  isSameProfilePatch,
  buildPersonaOptions,
  describeProfile,
  PERSONA_KEYS,
  PERSONA_PRESETS,
  PROFILE_LIMITS,
  DEFAULT_PERSONA,
} from '../aiProfileCore';

describe('aiProfileCore.validateProfilePatch', () => {
  it('正しい設定を受け付ける', () => {
    const r = validateProfilePatch({
      persona: 'cheerful',
      aiName: 'ミナト',
      studentName: 'ゆうくん',
      likes: 'サッカーとゲーム',
      dream: '志望校に受かる',
    });
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.value.persona).toBe('cheerful');
      expect(r.value.aiName).toBe('ミナト');
    }
  });

  describe('🚨 個人情報は登録させない', () => {
    const blocked = [
      { studentName: '青葉中学校のゆうき' },
      { note: '電話は090-1234-5678' },
      { likes: 'メールは a@b.com' },
      { note: '住所は3丁目' },
    ];
    for (const patch of blocked) {
      it(`${JSON.stringify(patch)} → 拒否`, () => {
        const r = validateProfilePatch(patch);
        expect(r.ok).toBe(false);
        if (!r.ok) expect(r.reason).toContain('ニックネーム');
      });
    }
  });

  describe('キャラクター', () => {
    it('プリセットのキーだけ受け付ける', () => {
      for (const key of PERSONA_KEYS) {
        expect(validateProfilePatch({ persona: key }).ok).toBe(true);
      }
    });

    it('未知のキーは拒否', () => {
      expect(validateProfilePatch({ persona: 'evil' }).ok).toBe(false);
      expect(validateProfilePatch({ persona: 123 }).ok).toBe(false);
    });
  });

  describe('呼び名', () => {
    it('長すぎるものは拒否（切り詰めない）', () => {
      const r = validateProfilePatch({
        aiName: 'あ'.repeat(PROFILE_LIMITS.aiName + 1),
      });
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toContain(`${PROFILE_LIMITS.aiName}文字`);
    });

    it('なりすましになる呼び名は拒否', () => {
      for (const name of ['運営', '管理人', 'システム']) {
        expect(validateProfilePatch({ aiName: name }).ok).toBe(false);
      }
    });

    it('空白だけは拒否', () => {
      expect(validateProfilePatch({ studentName: '   ' }).ok).toBe(false);
    });
  });

  it('壊れた入力は拒否', () => {
    for (const bad of [null, undefined, 'x', 42, []]) {
      expect(validateProfilePatch(bad).ok).toBe(false);
    }
  });

  it('有効な項目が無ければ拒否', () => {
    expect(validateProfilePatch({}).ok).toBe(false);
    expect(validateProfilePatch({ unknownKey: 'x' }).ok).toBe(false);
  });
});

describe('aiProfileCore.applyProfilePatch', () => {
  it('置き換えで適用される', () => {
    const next = applyProfilePatch(
      { persona: 'calm', aiName: '旧' },
      { aiName: '新' }
    );
    expect(next.aiName).toBe('新');
    expect(next.persona).toBe('calm');
  });

  it('既存が無くても動く', () => {
    expect(applyProfilePatch(undefined, { aiName: 'x' }).aiName).toBe('x');
  });
});

describe('aiProfileCore.buildProfilePrompt', () => {
  it('未設定でも既定のキャラクターが入る', () => {
    const p = buildProfilePrompt(undefined);
    expect(p).toContain(PERSONA_PRESETS[DEFAULT_PERSONA].label);
  });

  it('選んだキャラクターの指示が入る', () => {
    const p = buildProfilePrompt({ persona: 'buddy' });
    expect(p).toContain(PERSONA_PRESETS.buddy.label);
    expect(p).toContain('タメ口');
  });

  it('呼び名が入る', () => {
    const p = buildProfilePrompt({ aiName: 'ミナト', studentName: 'ゆうくん' });
    expect(p).toContain('ミナト');
    expect(p).toContain('ゆうくん');
  });

  it('好きなこと・目標が入る', () => {
    const p = buildProfilePrompt({ likes: 'サッカー', dream: '志望校合格' });
    expect(p).toContain('サッカー');
    expect(p).toContain('志望校合格');
  });

  it('🚨 安全方針は変えないと明記する（キャラ設定で上書きさせない）', () => {
    const p = buildProfilePrompt({ persona: 'buddy' });
    expect(p).toContain('安全に関する方針');
    expect(p).toContain('変えない');
  });

  it('呼びすぎないよう指示する', () => {
    expect(buildProfilePrompt({ studentName: 'ゆうくん' })).toContain(
      '呼びすぎない'
    );
  });
});

describe('aiProfileCore の設定表示', () => {
  it('選択肢が全プリセット分ある', () => {
    const opts = buildPersonaOptions();
    expect(opts).toHaveLength(PERSONA_KEYS.length);
    for (const o of opts) {
      expect(o.label.length).toBeGreaterThan(0);
    }
  });

  it('いまの設定を人が読める形で出す', () => {
    const t = describeProfile({
      persona: 'calm',
      aiName: 'ミナト',
      studentName: 'ゆうくん',
      likes: 'サッカー',
    });
    expect(t).toContain(PERSONA_PRESETS.calm.label);
    expect(t).toContain('ミナト');
    expect(t).toContain('サッカー');
  });

  it('未設定は「（未設定）」と出る', () => {
    expect(describeProfile(undefined)).toContain('未設定');
  });

  it('Markdown 記法を含まない', () => {
    expect(describeProfile({ persona: 'calm' })).not.toMatch(/\*\*|^#\s/m);
  });
});

describe('aiProfileCore.buildFreeProfilePrompt（無料Botの軽量記憶）', () => {
  it('中身が無ければ空文字（未設定の3,000人に無駄なトークンを載せない）', () => {
    expect(buildFreeProfilePrompt(undefined)).toBe('');
    expect(buildFreeProfilePrompt({})).toBe('');
    // 既定の persona は本体プロンプトと同じ口調なので注入しない。
    // 設定ページは未選択でも 'friendly' を保存するため、ここを弾かないと
    // 「何も変えていない人」全員に毎ターン約60トークンが載る。
    expect(buildFreeProfilePrompt({ persona: 'friendly' })).toBe('');
  });

  it('覚えている項目だけを出す', () => {
    const t = buildFreeProfilePrompt({
      studentName: 'ミナト',
      likes: 'サッカー',
    });
    expect(t).toContain('ミナト');
    expect(t).toContain('サッカー');
    expect(t).not.toContain('目標');
  });

  // 2026-08-06: 設定ページ（/ai）で本人が選べるようになったので、
  // **既定以外を明示的に選んだときだけ**話し方を反映する。
  it('既定以外の persona は反映する（本人が選んだから）', () => {
    const t = buildFreeProfilePrompt({
      persona: 'buddy',
      studentName: 'ミナト',
    });
    expect(t).toContain(PERSONA_PRESETS.buddy.label);
  });

  it('AI の名前を設定したら、その名前で名乗らせる', () => {
    const t = buildFreeProfilePrompt({ aiName: 'ミナト先生' });
    expect(t).toContain('ミナト先生');
    expect(t).toContain('スタ先生'); // 「スタ先生ではなく」と上書きを明示している
  });

  it('設定で変わるのは名前・話し方だけだと明示する（安全方針は不変）', () => {
    const t = buildFreeProfilePrompt({ aiName: 'ミナト先生' });
    expect(t).toContain('安全に関する方針');
  });
});

describe('aiProfileCore.parseProfileExtraction', () => {
  it('素の JSON をパースする', () => {
    expect(
      parseProfileExtraction(
        '{"studentName":"ミナト","likes":"","dream":"","note":""}'
      )
    ).toEqual({ studentName: 'ミナト' });
  });

  it('前後に説明やコードブロックが付いていても取り出せる', () => {
    const raw = '了解です。\n```json\n{"likes":"バスケ部"}\n```\n以上です。';
    expect(parseProfileExtraction(raw)).toEqual({ likes: 'バスケ部' });
  });

  it('空文字のフィールドは落とす（未取得と区別する）', () => {
    expect(
      parseProfileExtraction('{"studentName":"  ","likes":"読書"}')
    ).toEqual({
      likes: '読書',
    });
  });

  it('中身が無ければ null（呼び出し側は何もしない）', () => {
    expect(parseProfileExtraction('{"studentName":"","likes":""}')).toBeNull();
    expect(parseProfileExtraction('{}')).toBeNull();
  });

  it('壊れた出力は null（例外を投げない）', () => {
    expect(parseProfileExtraction('')).toBeNull();
    expect(parseProfileExtraction('わかりません')).toBeNull();
    expect(parseProfileExtraction('{壊れてる')).toBeNull();
    expect(parseProfileExtraction('[1,2,3]')).toBeNull();
  });

  it('抽出結果は validateProfilePatch を通す前提（個人情報はそこで弾かれる）', () => {
    // 学校名・電話番号・住所が混ざったら**パッチ全体**を拒否する。
    // ⚠️ 単なる氏名らしき文字列は検出できない（`aiMemoryCore` の設計どおり）。
    // そこは抽出プロンプト側で「本名は書かない」と指示し、呼び名は12文字上限で守る。
    for (const bad of [
      '{"note":"桜山中学校に通っている"}',
      '{"note":"連絡先は090-1234-5678"}',
      '{"note":"みどり町3丁目に住んでいる"}',
    ]) {
      const patch = parseProfileExtraction(bad);
      expect(patch).not.toBeNull();
      expect(validateProfilePatch(patch!).ok).toBe(false);
    }
  });

  it('長さ超過も拒否する（切り詰めない）', () => {
    const patch = parseProfileExtraction(
      JSON.stringify({
        studentName: 'あ'.repeat(PROFILE_LIMITS.studentName + 1),
      })
    );
    expect(validateProfilePatch(patch!).ok).toBe(false);
  });
});

describe('aiProfileCore.isSameProfilePatch', () => {
  it('同じ内容なら true（無駄な write を作らない）', () => {
    expect(isSameProfilePatch({ likes: '野球' }, { likes: '野球' })).toBe(true);
  });

  it('違えば false', () => {
    expect(isSameProfilePatch({ likes: '野球' }, { likes: 'サッカー' })).toBe(
      false
    );
    expect(isSameProfilePatch(undefined, { likes: '野球' })).toBe(false);
  });
});

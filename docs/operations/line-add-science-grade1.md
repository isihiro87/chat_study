# 公式LINE に 1・2年理科を追加する（準備・go-live 手順）

最終更新: 2026-06-18 / 状態: **中1・中2 理科を本番反映済み（go-live 完了）**

> 2026-06-18: 中1に加え **中2 理科**（化学変化と原子・分子 / 生物のからだのつくり / 天気とその変化 / 電流とその利用＝eraId `sci2-*`、4時代26トピック・クイズ456問）も配線・生成・同期・デプロイ済み。中3理科は content・QA 済みだが未配線（`grade3/*` を各 GRADE_FOLDERS に足して同手順で go-live）。

公式LINE（毎日配信 / 追加で解く / 苦手復習 / 範囲設定 / LIFF じっくり学ぶ）に **理科 中1** を教科として追加するための手順書。現状 LINE 側は history（一部 english）のみ配線済みで、理科は未配線。

---

## 1. コンテンツ準備状況 ✅（完了）

- 対象: `data/content/science/grade1/{1-biology,2-chemistry,3-physics,4-earth}/*.json`
- **16 トピック / クイズ 359 問**。フラッシュカードも投入済み、QA（`data/content/_prompts/fix-rules.md` の規則）適用済み。
- `topic.name` は **16 件すべて一意**（`questions.topic` ＝ `testScope.topics` との一致比較に必要）。
- eraId: `sci1-biology` / `sci1-chemistry` / `sci1-physics` / `sci1-earth`。
- 同期プレビュー（書き込みなしで確認済み）: `subject="science" / grade="中1" / topic=topic.name / id=q-science-{topicId}-{qid} / syncSource="content-science-v1"`。**doc id 接頭辞 `q-science-` で history（`q-history-`）と完全分離**、衝突なし。

> コンテンツ自体は go-live 可能な状態。残るは LINE 側の配線（下記）。

## 2. 現状の配線ギャップ（理科は未対応の箇所）

| 箇所 | ファイル | 現状 | 必要な対応 |
|---|---|---|---|
| 出題ソース同期 | `scripts/sync-questions-from-content.ts` | history 専用（CONTENT_DIR・subject・GRADE_FOLDERS・docID・sourceTag ハードコード）。science は2階層 path も未対応 | science(中1) 対応に一般化 or 専用化（doc id `q-science-*`、tag `content-science-v1`、path `grade1/<unit>/*.json`） |
| 有効教科 | `functions/src/lineWebhook.ts` | `VALID_SUBJECTS = ['history','english']` | `'science'` を追加。`SUBJECT_LABELS`（理科）・ヘッダー色（緑 `#10B981` のコメントあり）も追加 |
| オンボ教科選択 | `functions/src/lineWebhook.ts`（約 L202-206） | 「今は『歴史』だけ配信中です」、option は歴史のみ | 「理科」option を追加し、案内文を更新 |
| 範囲設定の単元候補 | `scripts/generate-line-scope-index.ts` → `src/data/generated/line-scope-index.generated.ts` ＋ `functions/src/generated/line-scope-eras.generated.ts` | `SubjectId='history'|'english'` のみ、GRADE_FOLDERS・ERA_META に science 無し | science(中1) を追加し再生成（時代＝eraId メタ・代表用語も） |
| LINEトーク内 範囲設定フロー | `functions/src/lineScopeFlow.ts` | 生成 `lineScopeEras[subject]` を参照（科目汎用） | scope-eras に science が入れば自動で機能（要確認） |
| LIFF じっくり学ぶ | `scripts/generate-line-study-content.ts` → `src/data/generated/line-study-history-g{1..3}.generated.ts` | history 専用 | science 対応に拡張し `line-study-science-g1.generated.ts` 生成。LIFF（`LiffUnitsPage` 等）で science を読み込む配線 |
| フォールバックAIチャット | `functions/src/aiChatPrompt.ts`（`SUBJECT_AVAILABILITY`） | science = `"coming"` | `"live"` に変更（AIが「理科対応済み」として案内） |
| 出題クエリ | `functions/src/lineWebhook.ts`（`getGradeQuestionDocs` 等） | subject×grade で `questions` を引く（TTLキャッシュ） | science×中1 でも同経路で動くはず。**read規律: 全件読みでなくキャッシュ/index 経由を確認** |

## 3. go-live 手順（この順番で）

> ⚠️ ここから先が「実追加」。本手順書作成時点では **未実行**。

1. **同期スクリプトを science 対応に**（コード変更のみ。history の挙動は不変に保つ）。`--dry-run` で science doc を確認。
2. **範囲設定インデックス再生成**: `generate-line-scope-index.ts` に science(中1) を追加 → `npx tsx scripts/generate-line-scope-index.ts`（`line-scope-index.generated.ts` と `functions/src/generated/line-scope-eras.generated.ts` 更新）。
3. **じっくり学ぶ生成**: `generate-line-study-content.ts` を science 対応に → `npx tsx scripts/generate-line-study-content.ts`（`line-study-science-g1.generated.ts` 生成）。LIFF 側の読み込み配線。
4. **webhook 配線**: `lineWebhook.ts` に `'science'`・ラベル・色・オンボ option・案内文。`aiChatPrompt.ts` の science を `"live"`。
5. **Firestore へ問題同期（本番反映）**:
   ```bash
   gcloud auth application-default login
   npx tsx scripts/sync-questions-from-content.ts --subject=science --grade=中1 --dry-run   # 差分確認（359問）
   npx tsx scripts/sync-questions-from-content.ts --subject=science --grade=中1             # upsert
   ```
6. **Functions デプロイ**（Instagram シークレット未設定で全体デプロイは失敗するため対象限定。CLAUDE.md 参照）:
   ```bash
   FUNCTIONS_DISCOVERY_TIMEOUT=600 firebase deploy --only functions:lineWebhook
   ```
   （フロントは Vercel 自動。`src/data/generated/*` を含む変更を main にマージで反映）
7. **動作確認**: テストアカウントで「理科」登録 → 毎日配信/追加で解く/苦手復習 → 範囲設定（時代フロー or `/scope`）→ LIFF じっくり学ぶ。

## 4. 注意点

- **read 規律**: 出題のたびに `questions` を science×中1 全件読みしないこと（`getGradeQuestionDocs` の TTL キャッシュが science でも効くか確認）。詳細はメモリ `firestore-read-spike-question-scan`。
- **孤児 prune**: science 同期は `syncSource='content-science-v1'` で history と分離。JSON から問題を消したら `--prune` で掃除（history には影響しない）。
- **ロールバック**: オンボ option から「理科」を外して再デプロイすれば新規登録は止まる。既登録ユーザーの教科は別途戻しが必要。Firestore の science docs は `--prune` 相当で削除可。
- **段階公開**: まず中1のみ。中2・中3理科は content・QA 済みだが、go-live は別途（GRADE_FOLDERS に追加して同様の手順）。

## 5. 現時点の到達点（2026-06-18 更新）

**コード配線は完了。残るは Firestore 同期 + デプロイのみ（本番反映＝「実追加」）。**

- ✅ コンテンツ準備・QA・同期適性検証・同期プレビュー
- ✅ 本手順書（go-live チェックリスト）
- ✅ 手順1 同期スクリプト科目対応（`sync-questions-from-content.ts` を `--subject`/`--grade` 対応に。history 挙動は不変、dry-run で history 1484問・science中1 359問を確認）
- ✅ 手順2 範囲設定インデックス（`generate-line-scope-index.ts` に science 追加 → `line-scope-index.generated.ts` / `functions/src/generated/line-scope-eras.generated.ts` 再生成。science g1=4時代/16トピック）
- ✅ 手順3 じっくり学ぶ（`generate-line-study-content.ts` を科目対応に → `line-study-science-g1.generated.ts` 生成。LIFF `LiffUnitsPage.tsx` を subject 対応＝`loadStudyEras(subject,grade)`・`currentSubjectId` 導出）
- ✅ 手順4 webhook 配線（`lineWebhook.ts`: `VALID_SUBJECTS` に science / ラベル「理科」/ ヘッダー色 緑 / オンボに「理科」option・案内文。`aiChatPrompt.ts`: science を `live`）
- ✅ 出題クエリ確認（`getGradeQuestionDocs` は subject 汎用・`subject-grade` TTLキャッシュで science も read規律OK）
- ✅ 型チェック: functions `tsc` exit 0 / フロント `tsc` エラー0（`TestRangePage.tsx` の SUBJECT_LABEL・型ガードにも science 追加）

### go-live 実行ログ（2026-06-18・中1+中2 同時公開）
- ✅ 手順5 Firestore 同期完了: `sync-questions-from-content.ts --subject=science`（中1 359問 + 中2 456問 = **815問** upsert、孤児なし）
- ✅ 手順2/3 再生成: scope index（science g1=4時代16トピック / g2=4時代26トピック）、じっくり学ぶ `line-study-science-g1/g2.generated.ts`
- ✅ 手順4 webhook 配線（既存）+ 手順6 デプロイ完了: `firebase deploy --only functions:lineWebhook`（asia-northeast1 update 成功）
- ✅ フロント: `src/data/generated/*` + `LiffUnitsPage`(science g2 import) + `TestRangePage`(science ラベル/型ガード) を main にコミット → Vercel 自動本番反映
- ⬜ 手順7 動作確認（テストアカウントで「理科」登録 → 中1/中2 で 毎日配信・追加で解く・苦手復習・範囲設定フロー・LIFF じっくり学ぶ）

> ロールバック手段: オンボ option から「理科」を外して再デプロイ＋ `npx tsx scripts/sync-questions-from-content.ts --subject=science --prune`（content から science を空にしてから）で science docs 削除。フロントは revert を main にマージ。

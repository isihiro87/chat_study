# 開発ガイドライン作成ガイド

## 基本原則

### 1. 具体例を豊富に含める

抽象的なルールだけでなく、具体的なコード例を提示します。

**悪い例**:
```
変数名は分かりやすくすること
```

**良い例**:
```typescript
// ✅ 良い例: 役割が明確
const userAuthentication = new UserAuthenticationService();
const taskRepository = new TaskRepository();

// ❌ 悪い例: 曖昧
const auth = new Service();
const repo = new Repository();
```

### 2. 理由を説明する

「なぜそうするのか」を明確にします。

**例**:
```
## エラーを無視しない

理由: エラーを無視すると、問題の原因究明が困難になります。
予期されるエラーは適切に処理し、予期しないエラーは上位に伝播させて
ログに記録できるようにします。
```

### 3. 測定可能な基準を設定

曖昧な表現を避け、具体的な数値を示します。

**悪い例**:
```
コードカバレッジは高く保つこと
```

**良い例**:
```
コードカバレッジ目標:
- ユニットテスト: 80%以上
- 統合テスト: 60%以上
- E2Eテスト: 主要フロー100%
```

## コーディング規約の策定

### 命名規則の定義

**階層的に定義**:

1. **言語・環境全体の規則**
```typescript
// TypeScript全般
- 変数・関数: camelCase
- クラス・インターフェース: PascalCase
- 定数: UPPER_SNAKE_CASE
```

2. **プロジェクト固有の規則**
```typescript
// このプロジェクトの規則
- サービスクラス: [名詞]Service (例: TaskService)
- リポジトリクラス: [名詞]Repository (例: TaskRepository)
- バリデーター関数: validate[対象] (例: validateEmail)
```

### フォーマットの統一

**自動化を推奨**:
```json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 100
}
```

**理由**: 手動でのフォーマット統一は労力がかかり、レビュー時の議論も増える

### コメントの指針

**良いコメントの条件**:

1. **理由を説明する**
```typescript
// ✅ 良い例
// タイムゾーンの違いを考慮して、UTCで保存
const createdAt = new Date().toISOString();

// ❌ 悪い例
// 日付を取得
const createdAt = new Date().toISOString();
```

2. **複雑なロジックを説明する**
```typescript
// ✅ 良い例
// Kadaneのアルゴリズムで最大部分配列和を計算
// 時間計算量: O(n), 空間計算量: O(1)
function maxSubarraySum(arr: number[]): number {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];
  // ...
}
```

3. **TODO・FIXMEを活用する**
```typescript
// TODO: キャッシュ機能を実装 (Issue #123)
// FIXME: 大量データでパフォーマンス劣化 (Issue #456)
// HACK: 一時的な回避策、リファクタリング必要
```

### エラーハンドリングの標準化

**エラー分類の定義**:

```typescript
// 1. ドメインエラー: ビジネスロジックのエラー
class ValidationError extends Error {
  constructor(
    message: string,
    public field: string,
    public value: unknown
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

// 2. インフラエラー: 外部システムのエラー
class DatabaseError extends Error {
  constructor(message: string, public cause?: Error) {
    super(message);
    this.name = 'DatabaseError';
    this.cause = cause;
  }
}

// 3. システムエラー: プログラムのバグ
class InvariantError extends Error {
  constructor(message: string) {
    super(`内部エラー: ${message}`);
    this.name = 'InvariantError';
  }
}
```

**エラーハンドリングパターン**:

```typescript
// パターン1: リトライ可能なエラー
async function fetchWithRetry<T>(
  fn: () => Promise<T>,
  maxRetries = 3
): Promise<T> {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await sleep(1000 * Math.pow(2, i)); // 指数バックオフ
    }
  }
  throw new Error('Unreachable');
}

// パターン2: フォールバック処理
function getConfigValue(key: string): string {
  try {
    return readConfig(key);
  } catch (error) {
    logger.warn(`設定値 ${key} の読み込み失敗、デフォルト値を使用`);
    return DEFAULT_VALUES[key];
  }
}

// パターン3: エラーの変換
async function createTask(data: TaskData): Promise<Task> {
  try {
    return await repository.save(data);
  } catch (error) {
    if (error instanceof SqlError && error.code === 'UNIQUE_VIOLATION') {
      throw new ValidationError('タスクIDが重複しています', 'id', data.id);
    }
    throw new DatabaseError('タスクの保存に失敗しました', error);
  }
}
```

## Git運用ルールの設計

### ブランチ戦略の選択

**プロジェクト規模別の推奨**:

**小規模 (1-3人)**:
```
main (本番)
└── feature branches (機能開発)
```
- シンプルで十分
- mainに直接マージ

**中規模 (4-10人)**:
```
main (本番)
└── develop (開発)
    └── feature/fix branches
```
- Git Flowの簡易版
- developでの統合テスト後にmainへマージ

**大規模 (10人以上)**:
```
main (本番)
├── release/v1.x (リリースブランチ)
└── develop (開発)
    ├── feature branches
    └── fix branches
```
- 完全なGit Flow
- リリースブランチで最終調整

### コミットメッセージの規約

**Conventional Commitsを推奨**:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Type一覧**:
```
feat: 新機能 (minor version up)
fix: バグ修正 (patch version up)
docs: ドキュメント
style: フォーマット (コードの動作に影響なし)
refactor: リファクタリング
perf: パフォーマンス改善
test: テスト追加・修正
build: ビルドシステム
ci: CI/CD設定
chore: その他 (依存関係更新など)

BREAKING CHANGE: 破壊的変更 (major version up)
```

**良いコミットメッセージの例**:

```
feat(task): 優先度設定機能を追加

ユーザーがタスクに優先度(高/中/低)を設定できるようになりました。

実装内容:
- Taskモデルにpriorityフィールド追加
- CLI に --priority オプション追加
- 優先度によるソート機能実装

破壊的変更:
- Task型の構造が変更されました
- 既存のタスクデータはマイグレーションが必要です

Closes #123
BREAKING CHANGE: Task型にpriority必須フィールド追加
```

### プルリクエストのテンプレート

**効果的なPRテンプレート**:

```markdown
## 変更の種類
- [ ] 新機能 (feat)
- [ ] バグ修正 (fix)
- [ ] リファクタリング (refactor)
- [ ] ドキュメント (docs)
- [ ] その他 (chore)

## 変更内容
### 何を変更したか
[簡潔な説明]

### なぜ変更したか
[背景・理由]

### どのように変更したか
- [変更点1]
- [変更点2]

## テスト
- [ ] 既存のテストがパス
- [ ] 新しいテストを追加
- [ ] 手動テスト実施

### テストケース
- [ケース1]
- [ケース2]

## スクリーンショット
[該当する場合]

## チェックリスト
- [ ] コーディング規約に従っている
- [ ] Lintエラーがない
- [ ] 型チェックがパス
- [ ] ドキュメントを更新した
- [ ] CHANGELOG.mdを更新した (該当する場合)

## 影響範囲
[この変更が影響する範囲]

## 関連Issue
Closes #[番号]
Refs #[番号]

## レビューポイント
[レビュアーに特に見てほしい点]
```

## テスト戦略の立案

### テストピラミッド

```
       /\
      /E2E\       少 (遅い、高コスト)
     /------\
    / 統合   \     中
   /----------\
  / ユニット   \   多 (速い、低コスト)
 /--------------\
```

**目標比率**:
- ユニットテスト: 70%
- 統合テスト: 20%
- E2Eテスト: 10%

### テストの書き方ガイドライン

**AAA (Arrange-Act-Assert) パターン**:

```typescript
it('タスクを作成できる', async () => {
  // Arrange (準備)
  const service = new TaskService(mockRepository);
  const taskData = {
    title: 'テストタスク',
    description: 'テスト用の説明',
  };

  // Act (実行)
  const result = await service.create(taskData);

  // Assert (検証)
  expect(result.id).toBeDefined();
  expect(result.title).toBe('テストタスク');
  expect(result.description).toBe('テスト用の説明');
});
```

**Given-When-Then パターン (BDD)**:

```typescript
describe('TaskService', () => {
  describe('タスク作成', () => {
    it('正常なデータの場合、タスクを作成できる', async () => {
      // Given: サービスとデータが準備されている
      const service = new TaskService(mockRepository);
      const validData = { title: 'テスト' };

      // When: タスクを作成する
      const result = await service.create(validData);

      // Then: タスクが正しく作成される
      expect(result.id).toBeDefined();
      expect(result.title).toBe('テスト');
    });

    it('タイトルが空の場合、ValidationErrorをスローする', async () => {
      // Given: サービスと不正なデータが準備されている
      const service = new TaskService(mockRepository);
      const invalidData = { title: '' };

      // When: タスクを作成しようとする
      // Then: ValidationErrorがスローされる
      await expect(
        service.create(invalidData)
      ).rejects.toThrow(ValidationError);
    });
  });
});
```

### カバレッジ目標の設定

**測定可能な目標**:

```json
// jest.config.js
{
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": 80
    },
    "./src/services/": {
      "branches": 90,
      "functions": 90,
      "lines": 90,
      "statements": 90
    }
  }
}
```

**理由**:
- 重要なビジネスロジック(services/)は高いカバレッジを要求
- UI層は低めでも許容
- 100%を目指さない (コストと効果のバランス)

### モックの使い方

**原則**:
- **外部依存をモック**: API、DB、ファイルシステム
- **ビジネスロジックは実装**: 複雑なモックはバグの温床

**良いモックの例**:

```typescript
// インターフェースに基づくモック
const mockRepository: ITaskRepository = {
  save: jest.fn((task) => Promise.resolve(task)),
  findById: jest.fn((id) => Promise.resolve(mockTask)),
  findAll: jest.fn(() => Promise.resolve([mockTask])),
  delete: jest.fn(() => Promise.resolve()),
};

// 特定のテストケースでの動作変更
mockRepository.findById = jest.fn((id) => {
  if (id === 'existing-id') return Promise.resolve(mockTask);
  return Promise.resolve(null);
});
```

## コードレビュープロセスの確立

### レビューの目的

1. **品質保証**: バグの早期発見
2. **知識共有**: チーム全体でコードベースを理解
3. **学習機会**: ベストプラクティスの共有

### 効果的なレビューのポイント

**レビュアー向け**:

1. **建設的なフィードバック**
```markdown
## ❌ 悪い例
このコードはダメです。

## ✅ 良い例
この実装だと O(n²) の時間計算量になります。
Map を使うと O(n) に改善できます:

```typescript
const taskMap = new Map(tasks.map(t => [t.id, t]));
const result = ids.map(id => taskMap.get(id));
```
```

2. **優先度の明示**
```markdown
[必須] セキュリティ: パスワードがログに出力されています
[推奨] パフォーマンス: ループ内でのDB呼び出しを避けましょう
[提案] 可読性: この関数名をもっと明確にできませんか？
[質問] この処理の意図を教えてください
```

3. **ポジティブなフィードバックも**
```markdown
✨ この実装は分かりやすいですね！
👍 エッジケースがしっかり考慮されています
💡 このパターンは他でも使えそうです
```

**レビュイー向け**:

1. **セルフレビューを実施**
   - PR作成前に自分でコードを見直す
   - 説明が必要な箇所にコメントを追加

2. **小さなPRを心がける**
   - 1PR = 1機能
   - 変更ファイル数: 10ファイル以内を推奨
   - 変更行数: 300行以内を推奨

3. **説明を丁寧に**
   - なぜこの実装にしたか
   - 検討した代替案
   - 特に見てほしいポイント

### レビュー時間の目安

- 小規模PR (100行以下): 15分
- 中規模PR (100-300行): 30分
- 大規模PR (300行以上): 1時間以上

**原則**: 大規模PRは避け、分割する

## 自動化の推進(該当する場合)

### 品質チェックの自動化

**基本的な自動化項目**:
- Lintチェック
- 型チェック
- テスト実行
- ビルド確認

**実装方法**:
- CI/CDツール(GitHub Actions, GitLab CI等)
- Pre-commit フック(Husky等)

**理由**: 早い段階で問題を検出し、修正コストを削減

## チェックリスト

- [ ] コーディング規約が具体例付きで定義されている
- [ ] 命名規則が明確である
- [ ] エラーハンドリングの方針が定義されている
- [ ] ブランチ戦略が決まっている
- [ ] コミットメッセージ規約が明確である
- [ ] PRテンプレートが用意されている
- [ ] テストの種類とカバレッジ目標が設定されている
- [ ] コードレビュープロセスが定義されている
- [ ] CI/CDパイプラインが構築されている
- [ ] 開発環境のセットアップ手順が明確である

# リポジトリ構造定義書作成ガイド

## 基本原則

### 1. 役割の明確化

各ディレクトリは単一の明確な役割を持つべきです。

**悪い例**:
```
src/
├── stuff/           # 曖昧
├── misc/            # 雑多
└── utils/           # 汎用的すぎる
```

**良い例**:
```
src/
├── commands/        # CLIコマンド実装
├── services/        # ビジネスロジック
├── repositories/    # データ永続化
└── validators/      # 入力検証
```

### 2. レイヤー分離の徹底

アーキテクチャのレイヤー構造をディレクトリ構造に反映させます:

```
src/
├── ui/              # UIレイヤー
│   └── cli/         # CLI実装
├── services/        # サービスレイヤー
│   └── task/        # タスク管理サービス
└── repositories/    # データレイヤー
    └── task/        # タスクリポジトリ
```

### 3. 技術要素ベースの分割(基本)

関連する技術要素ごとにディレクトリを分割します:

**基本構造**:
```
src/
├── commands/        # CLIコマンド
├── services/        # ビジネスロジック
├── repositories/    # データ永続化
└── types/           # 型定義
```

**レイヤー構造との対応**:
```
CLI/UIレイヤー      → commands/, cli/
サービスレイヤー    → services/
データレイヤー      → repositories/, storage/
```

## ディレクトリ構造の設計

### レイヤー構造の表現

```typescript
// 悪い例: 平坦な構造
src/
├── TaskCLI.ts
├── TaskService.ts
├── TaskRepository.ts
├── UserCLI.ts
├── UserService.ts
└── UserRepository.ts

// 良い例: レイヤーを明確に
src/
├── cli/
│   ├── TaskCLI.ts
│   └── UserCLI.ts
├── services/
│   ├── TaskService.ts
│   └── UserService.ts
└── repositories/
    ├── TaskRepository.ts
    └── UserRepository.ts
```

### テストディレクトリの配置

**方式1: tests/ディレクトリに集約**
```
project/
├── src/
│   └── services/
│       └── TaskService.ts
└── tests/
    └── unit/
        └── services/
            └── TaskService.test.ts
```

**メリット**:
- テストコードが分離されて整理しやすい
- 本番ビルドから除外しやすい

**方式2: ソースコードの隣に配置**
```
src/
└── services/
    ├── TaskService.ts
    └── TaskService.test.ts
```

**メリット**:
- 実装とテストの対応が明確
- ファイル移動時にテストも一緒に移動

**推奨**: プロジェクト規模に応じて選択
- 小規模: 方式2
- 中〜大規模: 方式1

## 命名規則のベストプラクティス

### ディレクトリ名の原則

**1. 複数形を使う (レイヤーディレクトリ)**
```
✅ services/
✅ repositories/
✅ controllers/

❌ service/
❌ repository/
❌ controller/
```

理由: 複数のファイルを格納するため

**2. kebab-caseを使う**
```
✅ task-management/
✅ user-authentication/

❌ TaskManagement/
❌ userAuthentication/
```

理由: URL、ファイルシステムとの互換性

**3. 具体的な名前を使う**
```
✅ validators/       # 入力検証
✅ formatters/       # データ整形
✅ parsers/          # データ解析

❌ utils/            # 汎用的すぎる
❌ helpers/          # 曖昧
❌ common/           # 意味不明
```

### ファイル名の原則

**1. クラスファイル: PascalCase + 役割接尾辞**
```typescript
// サービスクラス
TaskService.ts
UserAuthenticationService.ts

// リポジトリクラス
TaskRepository.ts
UserRepository.ts

// コントローラークラス
TaskController.ts
```

**2. 関数ファイル: camelCase + 動詞で始める**
```typescript
// ユーティリティ関数
formatDate.ts
validateEmail.ts
parseCommandArguments.ts
```

**3. 型定義ファイル: PascalCase または kebab-case**
```typescript
// インターフェース定義
Task.ts
UserProfile.ts

// 型定義集
task-types.d.ts
api-types.d.ts
```

**4. 定数ファイル: UPPER_SNAKE_CASE または kebab-case**
```typescript
// 定数定義
API_ENDPOINTS.ts
ERROR_MESSAGES.ts

// または
api-endpoints.ts
error-messages.ts
```

## 依存関係の管理

### レイヤー間の依存ルール

```typescript
// ✅ 良い例: 上位レイヤーから下位レイヤーへの依存
// cli/TaskCLI.ts
import { TaskService } from '../services/TaskService';

class TaskCLI {
  constructor(private taskService: TaskService) {}
}

// ❌ 悪い例: 下位レイヤーから上位レイヤーへの依存
// services/TaskService.ts
import { TaskCLI } from '../cli/TaskCLI';  // 禁止！
```

### 循環依存の回避

**問題のあるコード**:
```typescript
// services/TaskService.ts
import { UserService } from './UserService';

export class TaskService {
  constructor(private userService: UserService) {}
}

// services/UserService.ts
import { TaskService } from './TaskService';  // 循環依存！

export class UserService {
  constructor(private taskService: TaskService) {}
}
```

**解決策1: 共通の型定義を抽出**
```typescript
// types/Service.ts
export interface ITaskService { /* ... */ }
export interface IUserService { /* ... */ }

// services/TaskService.ts
import type { IUserService } from '../types/Service';

export class TaskService {
  constructor(private userService: IUserService) {}
}

// services/UserService.ts
import type { ITaskService } from '../types/Service';

export class UserService {
  constructor(private taskService: ITaskService) {}
}
```

**解決策2: 依存関係を見直す**
```typescript
// 共通の機能を別サービスに抽出
// services/NotificationService.ts
export class NotificationService {
  notifyTaskAssignment(taskId: string, userId: string): void {
    // 通知処理
  }
}

// services/TaskService.ts
import { NotificationService } from './NotificationService';

export class TaskService {
  constructor(private notificationService: NotificationService) {}
}

// services/UserService.ts
import { NotificationService } from './NotificationService';

export class UserService {
  constructor(private notificationService: NotificationService) {}
}
```

## スケーリング戦略

### 段階的な構造化

**フェーズ1: 小規模 (ファイル数 < 20)**
```
src/
├── index.ts
├── TaskService.ts
├── TaskRepository.ts
└── Task.ts
```

シンプルで十分。

**フェーズ2: 中規模 (ファイル数 20-100)**
```
src/
├── services/
│   ├── TaskService.ts
│   └── UserService.ts
├── repositories/
│   ├── TaskRepository.ts
│   └── UserRepository.ts
└── types/
    ├── Task.ts
    └── User.ts
```

レイヤー分割を導入。

**フェーズ3: 大規模 (ファイル数 > 100)**
```
src/
├── task/
│   ├── services/
│   │   ├── TaskService.ts
│   │   └── SubtaskService.ts
│   ├── repositories/
│   │   └── TaskRepository.ts
│   └── types/
│       └── Task.ts
└── user/
    ├── services/
    │   └── UserService.ts
    ├── repositories/
    │   └── UserRepository.ts
    └── types/
        └── User.ts
```

機能ベースで分割。

### モジュール分離のタイミング

**分離を検討する兆候**:
1. ディレクトリ内のファイル数が10個以上
2. 関連する機能がまとまっている
3. 独立してテスト可能
4. 他の機能への依存が少ない

**分離の手順**:
```typescript
// Before: 全てservices/に配置
services/
├── TaskService.ts
├── TaskValidationService.ts
├── TaskNotificationService.ts
├── UserService.ts
└── UserAuthService.ts

// After: 機能ごとにモジュール化
modules/
├── task/
│   ├── TaskService.ts
│   ├── TaskValidationService.ts
│   └── TaskNotificationService.ts
└── user/
    ├── UserService.ts
    └── UserAuthService.ts
```

## 特殊なケースの対応

### 共有コードの配置

**shared/ または common/ ディレクトリ**
```
src/
├── shared/
│   ├── utils/           # 汎用ユーティリティ
│   ├── types/           # 共通型定義
│   └── constants/       # 共通定数
├── commands/
├── services/
└── repositories/
```

**ルール**:
- 本当に複数のレイヤーで使われるもののみ
- 単一レイヤーでしか使わないものは含めない

### 設定ファイルの管理(該当する場合)

```
config/
├── default.ts           # デフォルト設定
└── constants.ts         # 定数定義
```

### スクリプトの管理(該当する場合)

```
scripts/
├── build.sh             # ビルドスクリプト
└── dev-tools.ts         # 開発補助スクリプト
```

## ドキュメント配置

### ドキュメントの種類と配置先

**プロジェクトルート**:
- `README.md`: プロジェクト概要
- `CONTRIBUTING.md`: 貢献ガイド
- `LICENSE`: ライセンス

**docs/ ディレクトリ**:
- `product-requirements.md`: PRD
- `functional-design.md`: 機能設計書
- `architecture.md`: アーキテクチャ設計書
- `repository-structure.md`: 本ドキュメント
- `development-guidelines.md`: 開発ガイドライン
- `glossary.md`: 用語集

**ソースコード内**:
- TSDoc/JSDocコメント: 関数・クラスの説明

## チェックリスト

- [ ] 各ディレクトリの役割が明確に定義されている
- [ ] レイヤー構造がディレクトリに反映されている
- [ ] 命名規則が一貫している
- [ ] テストコードの配置方針が決まっている
- [ ] 依存関係のルールが明確である
- [ ] 循環依存がない
- [ ] スケーリング戦略が考慮されている
- [ ] 共有コードの配置ルールが定義されている
- [ ] 設定ファイルの管理方法が決まっている
- [ ] ドキュメントの配置場所が明確である

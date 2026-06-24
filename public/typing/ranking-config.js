// ============================================================================
//  全国ランキングの接続せってい
// ----------------------------------------------------------------------------
//  オンライン全国ランキングは Supabase か Firebase のどちらかで動きます。
//  provider を 'supabase' か 'firebase' にして、対応するキーを入れてください。
//  provider を 'local'（または空のまま）にすると「この端末内ランキング」で動きます。
//
// ============================================================================
//  ▼ A. Supabase でやる場合（5分）
// ----------------------------------------------------------------------------
//   1. https://supabase.com で無料アカウントを作り、New project を作成
//   2. 左メニュー「SQL Editor」で下を実行してテーブルを作成：
//
//        create table rankings (
//          id         bigint generated always as identity primary key,
//          name       text not null,
//          score      int  not null,
//          "subjectId" text,
//          era        text,
//          mode       text,
//          param      int,
//          acc        int,
//          kpm        int,
//          rank       text,
//          created_at timestamptz default now()
//        );
//        alter table rankings enable row level security;
//        create policy "public read"   on rankings for select using (true);
//        create policy "public insert" on rankings for insert with check (true);
//
//   3. 「Project Settings → API」で Project URL と anon public key をコピーし、
//      下の supabaseUrl / supabaseKey に貼り付ける（provider は 'supabase'）
//
// ============================================================================
//  ▼ B. Firebase（Firestore）でやる場合（5分）
// ----------------------------------------------------------------------------
//   1. https://console.firebase.google.com で「プロジェクトを追加」
//   2. 左メニュー「構築 → Firestore Database」→「データベースの作成」
//      → 本番モードでもテストモードでもOK（あとでルールを下記にします）
//   3. Firestore の「ルール」タブを開き、下に書き換えて「公開」：
//
//        rules_version = '2';
//        service cloud.firestore {
//          match /databases/{database}/documents {
//            // 全国ランキング：追加のみ許可（書き換え・削除は不可）
//            match /rankings/{doc} {
//              allow read:   if true;
//              allow create: if true;
//              allow update, delete: if false;
//            }
//            // プレイヤーの全データ保存：読み書き許可（IDごとに1ドキュメント）
//            match /players/{pid} {
//              allow read, write: if true;
//            }
//          }
//        }
//
//   4. プロジェクト設定（⚙）→「全般」タブ → 下の方の「マイアプリ」で
//      </>（ウェブ）アプリを追加すると firebaseConfig が表示されます。
//      その中の  projectId  と  apiKey  を下に貼り付ける（provider は 'firebase'）
//      ※ apiKey はウェブ用の公開キーで、ブラウザに置いてOKな種類です。
//
//   5. 保存してページを再読み込み → 全国ランキングが有効になります
// ============================================================================
window.RANKING_CONFIG = {
  // 'supabase' / 'firebase' / 'local'（空欄や 'local' なら端末内ランキング）
  provider: 'firebase',

  // --- Supabase を使うとき ---
  supabaseUrl: '',           // 例: https://abcdefgh.supabase.co
  supabaseKey: '',           // anon public key（公開してOKのキー）
  table:       'rankings',   // 作成したテーブル名

  // --- Firebase を使うとき ---
  firebaseProjectId: 'type-study-88ced',                       // firebaseConfig の projectId
  firebaseApiKey:    'AIzaSyAufyzvlbfuw6fTWUPsjSD4tt6yWwr4DFM', // firebaseConfig の apiKey（公開OKのウェブ用キー）
  collection:        'rankings',  // Firestore のコレクション名

  // --- ランキングで「👑管理人」マークを付ける名前（自分のアカウント名を入れる。複数可） ---
  adminNames: ['いっしー'],
};

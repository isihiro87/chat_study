import type { HistoryChat } from '../../../../../../history-chat/types';

export const mediaApplicationChat: HistoryChat = {
  id: 'fe-media-application',
  icon: '🥽',
  title: 'マルチメディア応用',
  subtitle: '基本情報技術者試験',
  characters: [
    {
      id: 'instructor',
      name: 'IT講師',
      emoji: '👨‍🏫',
      colorFrom: '#2563eb',
      colorTo: '#60a5fa',
      expressions: { explaining: '🧑‍🏫', happy: '😊', thinking: '🤔', excited: '🤩' },
    },
    {
      id: 'student',
      name: '受験生',
      emoji: '👩‍💻',
      colorFrom: '#d97706',
      colorTo: '#fbbf24',
      expressions: { curious: '🙋', surprised: '😲', thinking: '🤔', happy: '😄', confused: '😵' },
    },
  ],
  content: [
    // ── セクション1: CG技術 ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: '<strong>コンピュータグラフィックス（CG）</strong>の基本技術を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '3DCGってどうやって作られるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '3DCGの制作は大きく3工程だ。①<strong>モデリング</strong>：<strong>ポリゴン</strong>（多角形）で3D形状を作成。②<strong>テクスチャマッピング</strong>：表面に模様や色を貼り付け。③<strong>レンダリング</strong>：光源計算や影処理で最終的な2D画像を生成するんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'レンダリングの方法にも種類があるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'あるよ！<strong>レイトレーシング</strong>（光線追跡法）は視点から光線を逆追跡して反射や屈折をリアルに表現する。<strong>ラジオシティ</strong>は物体間の相互反射を計算する方法だ。どちらもフォトリアルな画像が生成できるけど処理が重いんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'CG用語も覚えよう。<strong>アンチエイリアシング</strong>は斜め線のギザギザ（ジャギー）を滑らかにする処理。<strong>モーフィング</strong>はある画像から別の画像へ滑らかに変形させる技術だよ',
    },
    {
      type: 'summary-point',
      text: '3DCG工程: <span class="keyword">モデリング</span>→<span class="keyword">テクスチャマッピング</span>→<span class="keyword">レンダリング</span> / <span class="keyword">レイトレーシング</span> = 光線追跡 / <span class="keyword">アンチエイリアシング</span> = ジャギー除去',
    },
    {
      type: 'quiz',
      question: '3Dモデルに光源の計算や影の処理を行い、最終的な2D画像を生成する工程はどれか。',
      options: [
        { letter: 'A', text: 'モデリング', correct: false },
        { letter: 'B', text: 'テクスチャマッピング', correct: false },
        { letter: 'C', text: 'レンダリング', correct: true },
        { letter: 'D', text: 'モーフィング', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。レンダリングは3Dモデルに光源計算・影処理を行い、最終的な2D画像を生成する工程です。',
    },

    // ── セクション2: AR/VR/MR ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: '現実と仮想を融合する<strong>AR</strong>・<strong>VR</strong>・<strong>MR</strong>の違いを整理しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'AR、VR、MRの違いが混乱します...',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'シンプルに整理しよう！<strong>VR</strong>（Virtual Reality）は<strong>完全に仮想の世界</strong>に没入する技術。ヘッドマウントディスプレイで周囲を仮想空間にするんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>AR</strong>（Augmented Reality）は<strong>現実世界にデジタル情報を重ね合わせる</strong>技術。スマホのカメラ映像にCGを合成するPokemon GOが有名だね。現実を「拡張」するイメージだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '<strong>MR</strong>（Mixed Reality）は現実と仮想を<strong>より高度に融合</strong>させる技術だ。仮想のオブジェクトが現実の物体と相互作用できる（机の上に仮想のモデルを置けるなど）のがARとの違いだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'VRは仮想に没入、ARは現実を拡張、MRは現実と仮想が相互作用！覚えました',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">VR</span> = 仮想世界に没入 / <span class="keyword">AR</span> = 現実にデジタル情報を重畳 / <span class="keyword">MR</span> = 現実と仮想が相互作用',
    },
    {
      type: 'quiz',
      question: '現実世界にデジタル情報を重ね合わせて表示する技術はどれか。',
      options: [
        { letter: 'A', text: 'VR（仮想現実）', correct: false },
        { letter: 'B', text: 'AR（拡張現実）', correct: true },
        { letter: 'C', text: 'MR（複合現実）', correct: false },
        { letter: 'D', text: 'SR（代替現実）', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。AR（Augmented Reality）は現実世界にデジタル情報を重ね合わせる技術で、スマホアプリやスマートグラスで活用されています。',
    },

    // ── セクション3: ストリーミングと3Dプリンタ ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: '<strong>ストリーミング技術</strong>と<strong>3Dプリンタ</strong>の仕組みを確認しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '動画配信のストリーミングってどんな仕組みですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>ストリーミング</strong>はデータを<strong>ダウンロードしながら同時に再生</strong>する技術だよ。全部ダウンロードしてから再生するのとは違って、すぐに視聴を開始できるんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>アダプティブストリーミング</strong>は回線速度に応じて<strong>画質を自動調整</strong>する技術だ。HLSやDASHが代表的なプロトコルだよ。<strong>CDN</strong>（コンテンツ配信ネットワーク）で世界中にキャッシュサーバを配置して高速配信するんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '3Dプリンタってマルチメディア技術に入るんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '3Dデータを扱う技術としてね。<strong>3Dプリンタ</strong>には<strong>FDM</strong>（熱溶解積層法：樹脂を溶かして積み上げ）、<strong>SLA</strong>（光造形法：紫外線で樹脂を硬化）、<strong>SLS</strong>（粉末焼結法：レーザーで粉末を焼結）などがあるよ。方式ごとの特徴を覚えておこう',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'FDMが一番安くて身近、SLAが精密、SLSが金属にも対応できるんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ストリーミング</span> = DLしながら再生 / <span class="keyword">CDN</span> = 分散キャッシュで高速配信 / 3Dプリンタ: <span class="keyword">FDM</span>・<span class="keyword">SLA</span>・<span class="keyword">SLS</span>',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>3DCG</strong>：モデリング→テクスチャマッピング→レンダリング',
        '<strong>レイトレーシング</strong>：光線追跡でリアルな映像 / <strong>アンチエイリアシング</strong>：ジャギー除去',
        '<strong>VR</strong>：仮想に没入 / <strong>AR</strong>：現実を拡張 / <strong>MR</strong>：現実と仮想の相互作用',
        '<strong>ストリーミング</strong>：DLしながら再生。アダプティブで画質自動調整',
        '<strong>CDN</strong>：分散キャッシュで世界中に高速配信',
        '<strong>3Dプリンタ</strong>：FDM（熱溶解）・SLA（光造形）・SLS（粉末焼結）',
      ],
    },
  ],
};

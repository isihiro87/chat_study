import type { Topic } from '../../../../../../../types';

export const sound: Topic = {
  id: 'sci1-sound',
  eraId: 'sci1-physics',
  name: '音の世界',
  subtitle: '音の伝わり方・振幅・振動数',
  icon: '🔊',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '音の発生と伝わり方',
          content:
            '音は物体が振動することで発生します。振動している物体を音源といいます。音は空気などの物質の振動が波として伝わる現象です。音は真空中では伝わりません。空気中での音の速さは約340m/sです。雷が光ってから音が聞こえるまでの時間差から、雷までの距離を求めることができます。',
          keyPoints: [
            '音源：振動して音を出している物体',
            '音は物質の振動が波として伝わる（真空中では伝わらない）',
            '空気中の音速：約340m/s',
          ],
        },
        {
          title: '音の大きさと高さ',
          content:
            '音の大きさは振幅（振動の幅）で決まります。振幅が大きいほど大きい音になります。音の高さは振動数（1秒間の振動の回数）で決まります。振動数の単位はHz（ヘルツ）です。振動数が多いほど高い音になります。オシロスコープを使うと音の波形を観察できます。',
          keyPoints: [
            '音の大きさ：振幅が大きい → 大きい音',
            '音の高さ：振動数が多い → 高い音',
            '振動数の単位：Hz（ヘルツ）＝1秒間の振動の回数',
          ],
        },
        {
          title: '弦の振動と音',
          content:
            'モノコードなどの弦楽器では、弦の長さ・太さ・張りの強さによって音の高さが変わります。弦が短いほど・細いほど・強く張るほど振動数が大きくなり、高い音が出ます。弦を強くはじくと振幅が大きくなり、大きい音が出ます。',
          keyPoints: [
            '弦が短い・細い・強く張る → 振動数が大きい → 高い音',
            '弦を強くはじく → 振幅が大きい → 大きい音',
            'オシロスコープ：音の波形を画面に表示する装置',
          ],
        },
      ],
      slides: [
        {
          id: 'sci1-sound-slide1',
          title: '音の伝わり方',
          slides: [
            {
              type: 'question',
              question: '宇宙空間で音は聞こえる？聞こえない？',
              subtext: '音が伝わる条件を考えよう',
              emoji: '🚀',
            },
            {
              type: 'reason',
              headline: '宇宙は真空だから音は聞こえない！',
              points: [
                '音は物体の振動が波として伝わる現象',
                '空気などの物質がないと振動は伝わらない',
                '真空中（宇宙空間）では音は伝わらない',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '音は物質の振動の波！真空中では伝わらない！空気中の音速は約340m/s！',
              keywords: [
                { text: '音源', isImportant: true },
                { text: '約340m/s', isImportant: true },
                { text: '真空' },
              ],
              nextHint: '次は音の大きさと高さの違いを学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-sound-slide2',
          title: '音の大きさと高さ',
          slides: [
            {
              type: 'question',
              question: '太鼓を強くたたくと、音はどう変わる？',
              subtext: '振幅と音の大きさの関係',
              emoji: '🥁',
            },
            {
              type: 'reason',
              headline: '振幅が大きくなるから、大きい音になる！',
              points: [
                '音の大きさ＝振幅で決まる（振幅大→大きい音）',
                '音の高さ＝振動数で決まる（振動数多→高い音）',
                '振動数の単位はHz（ヘルツ）',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '大きさ', value: '振幅', emoji: '📊' },
                  { label: '高さ', value: '振動数', emoji: '📈' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '大きさ＝振幅、高さ＝振動数！この2つをしっかり区別しよう！',
              keywords: [
                { text: '振幅', isImportant: true },
                { text: '振動数', isImportant: true },
                { text: 'Hz（ヘルツ）' },
              ],
              nextHint: '次は弦の振動と音の関係を学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-sound-slide3',
          title: '弦の振動と音',
          slides: [
            {
              type: 'question',
              question: 'ギターの弦を短くおさえると音はどう変わる？',
              subtext: '弦の長さと音の高さ',
              emoji: '🎸',
            },
            {
              type: 'reason',
              headline: '弦が短いと振動数が大きくなり、高い音が出る！',
              points: [
                '弦が短い → 高い音',
                '弦が細い → 高い音',
                '弦を強く張る → 高い音',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '弦が短い・細い・強く張る → 高い音！強くはじく → 大きい音！',
              keywords: [
                { text: '弦の長さ', isImportant: true },
                { text: 'モノコード' },
                { text: 'オシロスコープ' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci1-sound-fc1',
        front: '音が伝わるしくみ',
        back: '物体の振動が波として物質中を伝わる現象。真空中では伝わらない。',
        explanation:
          '音は空気や水などの物質がないと伝わりません。宇宙空間（真空）では音は聞こえません。',
      },
      {
        id: 'sci1-sound-fc2',
        front: '音の速さ（空気中）',
        back: '約340m/s',
        explanation:
          '光の速さ（約30万km/s）に比べてとても遅いため、雷が光ってから音が遅れて聞こえます。',
      },
      {
        id: 'sci1-sound-fc3',
        front: '振幅と音の大きさ',
        back: '振幅が大きいほど大きい音になる',
        explanation:
          '振幅とは振動の幅のことです。強くたたいたり強くはじいたりすると振幅が大きくなります。',
      },
      {
        id: 'sci1-sound-fc4',
        front: '振動数と音の高さ',
        back: '振動数（Hz）が多いほど高い音になる',
        explanation:
          '振動数は1秒間に振動する回数で、単位はHz（ヘルツ）です。',
      },
      {
        id: 'sci1-sound-fc5',
        front: '弦の音を高くする方法',
        back: '弦を短くする・細くする・強く張る',
        explanation:
          'いずれの場合も振動数が大きくなるため、高い音が出ます。モノコードで実験できます。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-sound-q1',
          question: '音が真空中で伝わらない理由として正しいものはどれか？',
          options: [
            '音が速すぎるから',
            '振動を伝える物質がないから',
            '温度が低すぎるから',
            '光がないから',
          ],
          correctIndex: 1,
          explanation:
            '音は物質の振動が波として伝わる現象です。真空中には振動を伝える物質がないため、音は伝わりません。',
        },
        {
          id: 'sci1-sound-q2',
          question: '空気中の音の速さは約何m/sか？',
          options: [
            '約34m/s',
            '約170m/s',
            '約340m/s',
            '約680m/s',
          ],
          correctIndex: 2,
          explanation:
            '空気中の音の速さは約340m/sです。温度によって少し変化します。',
        },
        {
          id: 'sci1-sound-q3',
          question: '音を大きくするには何を大きくすればよいか？',
          options: [
            '振動数',
            '振幅',
            '波長',
            '音速',
          ],
          correctIndex: 1,
          explanation:
            '音の大きさは振幅で決まります。振幅が大きいほど大きい音になります。振動数は音の高さに関係します。',
        },
        {
          id: 'sci1-sound-q4',
          question: '振動数の単位はどれか？',
          options: [
            'Pa（パスカル）',
            'N（ニュートン）',
            'Hz（ヘルツ）',
            'm/s',
          ],
          correctIndex: 2,
          explanation:
            '振動数の単位はHz（ヘルツ）で、1秒間に振動する回数を表します。',
        },
        {
          id: 'sci1-sound-q5',
          question: '弦の音を高くする方法として正しいものはどれか？',
          options: [
            '弦を長くする',
            '弦を太くする',
            '弦をゆるめる',
            '弦を短くする',
          ],
          correctIndex: 3,
          explanation:
            '弦を短くすると振動数が大きくなり、高い音が出ます。弦を細くしたり強く張ったりしても高い音になります。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci1-sound-ex1',
          question:
            '雷が光ってから5秒後に音が聞こえた。雷までの距離は何mか。（音速を340m/sとする）',
          steps: [
            {
              title: 'Step 1: 公式を確認する',
              content:
                '距離＝速さ×時間 の公式を使います。光はほぼ一瞬で届くので、音が届くまでの時間だけを考えます。',
              highlight: '距離 ＝ 速さ × 時間',
            },
            {
              title: 'Step 2: 値を代入する',
              content:
                '速さ＝340m/s、時間＝5秒を代入します。距離＝340×5',
              highlight: '340 × 5',
            },
            {
              title: 'Step 3: 計算する',
              content:
                '340×5＝1700 となります。単位はmです。',
              highlight: '1700m',
            },
          ],
          answer: '1700m\n（雷までの距離は1700m＝1.7km）',
        },
      ],
    },
    chatId: 'sci1-sound',
  },
};

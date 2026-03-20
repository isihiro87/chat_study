import type { Topic } from '../../../../../../../types';

export const moonVenusDetail: Topic = {
  id: 'sci3-moon-venus-detail',
  eraId: 'sci3-earth',
  name: '月と金星の見え方②',
  subtitle: '月の公転・金星の満ち欠け・皆既日食と金環日食',
  icon: '🌙',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '月の公転と自転',
          content:
            '月は北極側から見て反時計回り（西から東）に公転しています。そのため毎日同じ時刻に月を見ると、前日より東側にずれて見えます。月の南中時刻は毎日約50分ずつ遅くなります。月の自転周期と公転周期はどちらも約27.3日で同じため、月は常に同じ面を地球に向けています。',
          image: {
            src: '/images/science/grade3/earth/moon-phases.svg',
            alt: '月の公転と自転',
            caption: '月は自転と公転が同じ周期（約27.3日）',
          },
          keyPoints: [
            '月は反時計回り（西→東）に公転',
            '南中時刻は毎日約50分ずつ遅くなる',
            '自転周期＝公転周期＝約27.3日',
            '常に同じ面を地球に向ける',
          ],
        },
        {
          title: '金星の大きさと形の変化',
          content:
            '金星は地球との距離が変化するため、見かけの大きさと形（満ち欠け）がどちらも変化します。金星が地球に近いときは大きく見えますが、太陽光が当たっている面のほとんどが地球から見て裏側になるため、大きく欠けて見えます。逆に遠いときは小さく見えますが、丸く（満ちて）見えます。外惑星は地球より外側を回るため、真夜中にも見え、ほぼ丸く見えます。',
          image: {
            src: '/images/science/grade3/earth/venus-orbit.svg',
            alt: '金星の大きさと形の変化',
            caption: '近い＝大きくて欠ける、遠い＝小さくて丸い',
          },
          keyPoints: [
            '近い＝大きくて欠ける（三日月のような形）',
            '遠い＝小さくて丸い',
            '外惑星は真夜中にも見え、ほぼ丸く見える',
            'よいの明星：太陽の東側、明けの明星：太陽の西側',
          ],
        },
        {
          title: '日食と月食の種類',
          content:
            '太陽の直径は月の約400倍ですが、地球からの距離も約400倍あるため、見かけの大きさがほぼ同じに見えます。皆既日食は月が太陽を完全にかくす現象です。月の公転軌道は楕円のため、月が地球から遠いときは見かけが太陽より小さくなり、太陽のふちがリング状に見える金環日食になります。日食は月の影が地球上の限られた場所にしか落ちないため見える場所が限定されますが、月食は月が見える場所ならどこでも観測できます。',
          image: {
            src: '/images/science/grade3/earth/eclipse-photos.png',
            alt: '日食と月食の種類',
            caption: '皆既日食・金環日食・皆既月食・部分月食',
          },
          keyPoints: [
            '太陽の直径は月の約400倍、距離も約400倍→見かけの大きさがほぼ同じ',
            '皆既日食：月が太陽を完全にかくす',
            '金環日食：月が遠く、太陽のふちがリング状に見える',
            '日食は限られた場所、月食はどこでも見える',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-mvd-slide-1',
          title: '月の南中時刻はなぜ毎日遅くなる？',
          slides: [
            {
              type: 'question',
              question: '月の南中時刻が毎日約50分ずつ遅くなるのはなぜ？',
              subtext: '月の公転と観測',
              emoji: '🕐',
            },
            {
              type: 'reason',
              headline: '月が公転で東へずれるから！',
              points: [
                '月は反時計回り（西→東）に公転している',
                '毎日少しずつ東へ移動する',
                '地球が約50分余分に自転しないと月が南中しない',
              ],
              visual: {
                type: 'diagram',
                items: [
                  { label: '公転方向', value: '反時計回り（西→東）', emoji: '🔄' },
                  { label: '南中の遅れ', value: '毎日約50分', emoji: '🕐' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '月の公転で東にずれ、地球が余分に自転→南中が約50分遅くなる！',
              keywords: [
                { text: '反時計回り', isImportant: true },
                { text: '約50分' },
                { text: '約27.3日' },
              ],
              nextHint: '金星の大きさと形はなぜ変わる？',
            },
          ],
        },
        {
          id: 'sci3-mvd-slide-2',
          title: '金星の大きさと形が変わるのはなぜ？',
          slides: [
            {
              type: 'question',
              question: '金星は近づくと大きく見えるのに、なぜ欠けて見える？',
              subtext: '金星の満ち欠けの秘密',
              emoji: '🌗',
            },
            {
              type: 'reason',
              headline: '太陽光の当たり方と距離が変わるから！',
              points: [
                '近い＝大きく見えるが、太陽光の当たる面が裏側→大きく欠ける',
                '遠い＝小さく見えるが、太陽光の当たる面が見える→丸く見える',
                '外惑星は常に太陽光の正面が見えるので、ほぼ丸い',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '近い金星', value: '大きくて欠ける', emoji: '🌒' },
                  { label: '遠い金星', value: '小さくて丸い', emoji: '🌕' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '近い＝大きく欠ける、遠い＝小さく丸い！外惑星はほぼ丸い！',
              keywords: [
                { text: '大きく欠ける', isImportant: true },
                { text: '小さく丸い', isImportant: true },
                { text: '外惑星' },
              ],
              nextHint: '皆既日食と金環日食の違いは？',
            },
          ],
        },
        {
          id: 'sci3-mvd-slide-3',
          title: '皆既日食と金環日食のちがい',
          slides: [
            {
              type: 'question',
              question: '同じ日食なのに、完全にかくれたりリング状に見えたりするのはなぜ？',
              subtext: '日食の種類と見える範囲',
              emoji: '🌑',
            },
            {
              type: 'reason',
              headline: '月の軌道が楕円だから見かけの大きさが変わる！',
              points: [
                '太陽と月の見かけの大きさがほぼ同じ（直径400倍・距離400倍）',
                '月が近い→太陽を完全にかくす→皆既日食',
                '月が遠い→太陽より小さく見える→金環日食（リング状）',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '皆既日食', value: '月が近い→完全に隠す', emoji: '🌑' },
                  { label: '金環日食', value: '月が遠い→リング状', emoji: '💍' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '月の距離で皆既か金環か決まる！日食は限られた場所、月食はどこでも見える！',
              keywords: [
                { text: '皆既日食', isImportant: true },
                { text: '金環日食', isImportant: true },
                { text: '400倍' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci3-mvd-fc1', front: '反時計回り（西から東）', back: '月は地球のまわりをどの向きに公転している？（北極側から見て）', difficulty: 'basic' },
      { id: 'sci3-mvd-fc2', front: '約50分ずつ遅くなる', back: '月の南中時刻は毎日どれくらい変化する？', explanation: '月が公転で東へ移動するため。', difficulty: 'basic' },
      { id: 'sci3-mvd-fc3', front: '約27.3日（常に同じ面を地球に向ける）', back: '月の自転周期と公転周期はともに約何日？', difficulty: 'basic' },
      { id: 'sci3-mvd-fc4', front: '大きく見えるが、大きく欠けて見える', back: '金星が地球に近いとき、大きさと形はどう見える？', difficulty: 'basic' },
      { id: 'sci3-mvd-fc5', front: '小さく見えるが、丸く（満ちて）見える', back: '金星が地球から遠いとき、大きさと形はどう見える？', difficulty: 'basic' },
      { id: 'sci3-mvd-fc6', front: '外惑星（真夜中にも見え、ほぼ丸い）', back: '地球より外側を公転する惑星を何という？', difficulty: 'basic' },
      { id: 'sci3-mvd-fc7', front: '皆既日食', back: '太陽が月に完全にかくされる日食を何という？', difficulty: 'basic' },
      { id: 'sci3-mvd-fc8', front: '金環日食', back: '月が太陽より小さく見え、太陽のふちがリング状に見える日食を何という？', difficulty: 'basic' },
      { id: 'sci3-mvd-fc9', front: '皆既月食（赤銅色に見えることがある）', back: '月が地球の影に完全に入る月食を何という？', difficulty: 'basic' },
      { id: 'sci3-mvd-fc10', front: '太陽の直径は月の約400倍、距離も約400倍だから', back: '太陽と月の見かけの大きさがほぼ同じ理由は？', difficulty: 'standard' },
      { id: 'sci3-mvd-fc11', front: '月の影が地球上のごく限られた範囲にしか落ちないため', back: '日食が限られた場所でしか見えないのはなぜ？', difficulty: 'standard' },
      { id: 'sci3-mvd-fc12', front: '常に同じ面を地球に向けている', back: '月の自転周期と公転周期が同じことから何がわかる？', difficulty: 'standard' },
      { id: 'sci3-mvd-fc13', front: '東へずれる（月の公転方向と同じ）', back: '毎日同時刻に月を見ると月の位置はどちらにずれる？', difficulty: 'standard' },
      { id: 'sci3-mvd-fc14', front: '火星・木星・土星・天王星・海王星', back: '外惑星を5つ答えよ', difficulty: 'standard' },
      { id: 'sci3-mvd-fc15', front: '部分日食', back: '太陽の一部だけが月に隠される日食を何という？', difficulty: 'standard' },
      { id: 'sci3-mvd-fc16', front: '月の公転軌道が楕円で地球からの距離が変わるから', back: '皆既日食と金環日食の違いが生まれる原因は？', difficulty: 'standard' },
      { id: 'sci3-mvd-fc17', front: '太陽光がほぼ正面から当たる面が常に見えるから', back: '外惑星が大きく満ち欠けしない理由は？', difficulty: 'standard' },
      { id: 'sci3-mvd-fc18', front: '夕方に南中し、真夜中に西に沈む', back: '上弦の月の南中時刻と沈む時刻は？', difficulty: 'advanced' },
      { id: 'sci3-mvd-fc19', front: '真夜中に南中し、昼ごろに西に沈む', back: '下弦の月の南中時刻と沈む時刻は？', difficulty: 'advanced' },
      { id: 'sci3-mvd-fc20', front: '赤銅色に見える（地球の大気で屈折した赤い光が届くため）', back: '皆既月食のとき月はどのように見える？', difficulty: 'advanced' },
      { id: 'sci3-mvd-fc21', front: '正午ごろ（太陽と同じ方向にあるため）', back: '新月が南中する時刻は？', difficulty: 'advanced' },
      { id: 'sci3-mvd-fc22', front: '地球も公転しているため同じ位置関係に戻るのにさらに約2日かかる', back: '月の満ち欠けの周期（約29.5日）と公転周期（約27.3日）が異なる理由は？', difficulty: 'advanced' },
      { id: 'sci3-mvd-fc23', front: 'コロナやプロミネンスが見える', back: '皆既日食のときに観察できる太陽の構造は？', difficulty: 'advanced' },
      { id: 'sci3-mvd-fc24', front: '太陽の西側にあるとき', back: '金星が明けの明星として見えるとき、金星は太陽のどちら側にある？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-mvd-q1',
          question: '上弦の月はどのように光って見えるか。',
          options: [
            '右半分が光る',
            '左半分が光る',
            '上半分が光る',
            '全体がうっすら光る',
          ],
          correctIndex: 0,
          explanation:
            '上弦の月は右半分が光って見えます。新月から満月に向かう途中の半月です。下弦の月は左半分が光ります。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-mvd-q2',
          question: '月の公転の向きを北極側から見るとどちらか。',
          options: ['時計回り（東から西）','南から北','反時計回り（西から東）','北から南',
          ],
          correctIndex: 2,
          explanation:
            '月は北極側から見て反時計回り（西から東）に公転しています。そのため毎日同時刻に見ると月の位置が東へ移動します。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-mvd-q3',
          question: '外惑星の特徴として正しいものはどれか。',
          options: [
            '真夜中には見えない',
            '大きく満ち欠けする',
            '明け方の東の空にしか見えない',
            '真夜中にも見え、ほぼ丸く見える',
          ],
          correctIndex: 3,
          explanation:
            '外惑星は地球より外側を公転するため、太陽の反対方向にも位置でき真夜中にも見えます。また、ほぼ丸く見え大きな満ち欠けはしません。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-mvd-q4',
          question: '金星が地球に近いとき、金星はどのように見えるか。',
          options: [
            '小さくて丸い',
            '大きくて丸い',
            '大きくて欠けている',
            '小さくて欠けている',
          ],
          correctIndex: 2,
          explanation:
            '金星が地球に近いときは大きく見えますが、太陽光が当たっている面の大部分が地球側を向かないため、大きく欠けて見えます。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-mvd-q5',
          question: '皆既日食と金環日食の違いの原因として正しいものはどれか。',
          options: ['太陽の大きさが変わるから','月の自転が止まるから','地球の自転速度が変わるから','月の公転軌道が楕円で地球からの距離が変わるから',
          ],
          correctIndex: 3,
          explanation:
            '月の公転軌道は楕円のため、月が地球から遠いときは見かけの大きさが太陽より小さくなり、太陽のふちがリング状に見える金環日食になります。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-mvd-q6',
          question: '月食が日食に比べて広い範囲で見える理由として正しいものはどれか。',
          options: [
            '月食のほうが長時間続くから',
            '月が光を反射するから',
            '月食は太陽が明るくなるから',
            '地球の影が月全体を覆えるため、月が見えればどこでも観測できるから',
          ],
          correctIndex: 3,
          explanation:
            '月食では地球の影に月が入るため、月が地平線の上にある場所ならどこからでも観測できます。日食は月の影が地球上の限られた範囲にしか落ちないため、観測場所が限定されます。',
        difficulty: 'basic',
      },
        { id: 'sci3-mvd-q7', question: '月の南中時刻が毎日約50分遅くなる理由は？', options: ['地球の自転が遅くなるから','月が小さくなるから','太陽が動くから','月が公転で東にずれるから'], correctIndex: 3, explanation: '月が西から東に公転しているため、地球が約50分余分に自転しないと月が南中しません。', difficulty: 'basic' },
        { id: 'sci3-mvd-q8', question: '月が常に同じ面を地球に向けている理由は？', options: ['月が自転していないから', '月の自転周期と公転周期が同じだから', '地球が自転していないから', '月が地球から離れているから'], correctIndex: 1, explanation: '月の自転周期と公転周期がどちらも約27.3日で同じため、常に同じ面を地球に向けています。', difficulty: 'basic' },
        { id: 'sci3-mvd-q9', question: '金星が地球から遠いとき、どのように見える？', options: ['大きくて欠ける', '小さくて丸い', '大きくて丸い', '小さくて欠ける'], correctIndex: 1, explanation: '金星が遠いときは小さく見えますが、太陽光が当たる面がほぼ正面に見えるため丸く見えます。', difficulty: 'basic' },
        { id: 'sci3-mvd-q10', question: '下弦の月が南中する時刻は？', options: ['正午', '夕方', '真夜中', '明け方'], correctIndex: 2, explanation: '下弦の月は真夜中に南中し、昼ごろに西に沈みます。', difficulty: 'basic' },
        { id: 'sci3-mvd-q11', question: '上弦の月が南中する時刻は？', options: ['夕方','正午','真夜中','明け方'], correctIndex: 0, explanation: '上弦の月は夕方に南中し、真夜中に西に沈みます。', difficulty: 'standard' },
        { id: 'sci3-mvd-q12', question: '金環日食が起こる条件は？', options: ['月が太陽より大きいとき', '月が地球から遠く見かけが太陽より小さいとき', '月が太陽に近いとき', '満月のとき'], correctIndex: 1, explanation: '月が地球から遠いとき、見かけの大きさが太陽より小さくなり、太陽のふちがリング状に見えます。', difficulty: 'standard' },
        { id: 'sci3-mvd-q13', question: '皆既日食が起こる条件は？', options: ['月が地球から遠いとき', '満月のとき', '月が地球に近く見かけが太陽とほぼ同じか大きいとき', '月食のとき'], correctIndex: 2, explanation: '月が地球に近いとき、見かけが太陽とほぼ同じか少し大きくなり、太陽を完全に覆い隠します。', difficulty: 'standard' },
        { id: 'sci3-mvd-q14', question: '太陽と月の見かけの大きさがほぼ同じ理由は？', options: ['実際の大きさが同じだから','地球が丸いから','月が太陽を反射しているから','太陽の直径が月の約400倍で距離も約400倍だから'], correctIndex: 3, explanation: '太陽の直径は月の約400倍ですが、地球からの距離も約400倍なので、見かけの大きさがほぼ同じになります。', difficulty: 'standard' },
        { id: 'sci3-mvd-q15', question: '外惑星が大きく満ち欠けしない理由は？', options: ['太陽光がほぼ正面から当たる面が常に見えるから','外惑星が光を出すから','外惑星が小さいから','外惑星に大気がないから'], correctIndex: 0, explanation: '外惑星は地球より外側にあるため、太陽光が当たる面がほぼ正面に見え、大きな満ち欠けは起こりません。', difficulty: 'standard' },
        { id: 'sci3-mvd-q16', question: '外惑星が真夜中にも見える理由は？', options: ['外惑星が光を出すから','外惑星が地球に近いから','月が照らすから','太陽の反対方向にも位置できるから'], correctIndex: 3, explanation: '外惑星は地球より外側を公転するため、太陽の反対方向にも位置でき、真夜中にも見えます。', difficulty: 'standard' },
        { id: 'sci3-mvd-q17', question: '月の自転周期は約何日？', options: ['約1日', '約7日', '約27.3日', '約29.5日'], correctIndex: 2, explanation: '月の自転周期は約27.3日で、公転周期と同じです。そのため常に同じ面を地球に向けています。', difficulty: 'standard' },
        { id: 'sci3-mvd-q18', question: '皆既月食のとき月はどのように見える？', options: ['完全に見えなくなる', '白く光る', '赤銅色に見える', '青く光る'], correctIndex: 2, explanation: '皆既月食のとき月は赤銅色に見えます。地球の大気で屈折した赤い光が月に届くためです。', difficulty: 'standard' },
        { id: 'sci3-mvd-q19', question: '満月が南中する時刻は？', options: ['正午', '夕方', '真夜中', '明け方'], correctIndex: 2, explanation: '満月は太陽の反対方向にあるため、真夜中ごろに南中します。', difficulty: 'standard' },
        { id: 'sci3-mvd-q20', question: '月の公転の向き（北極側から見て）は？', options: ['時計回り', '反時計回り', '上から下', '下から上'], correctIndex: 1, explanation: '月は北極側から見て反時計回り（西から東）に公転しています。', difficulty: 'standard' },
        { id: 'sci3-mvd-q21', question: '金星が明けの明星として見えるとき、金星は太陽のどちら側にある？', options: ['太陽の西側','太陽の東側','太陽の真上','太陽の真下'], correctIndex: 0, explanation: '金星が太陽の西側にあるとき、日の出前の東の空に見え、明けの明星となります。', difficulty: 'standard' },
        { id: 'sci3-mvd-q22', question: '金星がよいの明星として見えるとき、金星は太陽のどちら側にある？', options: ['太陽の西側', '太陽の東側', '太陽の真上', '太陽の真下'], correctIndex: 1, explanation: '金星が太陽の東側にあるとき、日没後の西の空に見え、よいの明星となります。', difficulty: 'standard' },
        { id: 'sci3-mvd-q23', question: '新月が南中する時刻は？', options: ['正午', '夕方', '真夜中', '明け方'], correctIndex: 0, explanation: '新月は太陽と同じ方向にあるため、太陽とともに正午ごろに南中します（見えません）。', difficulty: 'advanced' },
        { id: 'sci3-mvd-q24', question: '毎日同時刻に月を見ると位置がどちらにずれる？', options: ['西', '東', '上', '下'], correctIndex: 1, explanation: '月の公転（西→東）により、毎日同時刻に見ると月の位置は東へずれていきます。', difficulty: 'advanced' },
        { id: 'sci3-mvd-q25', question: '月の公転軌道が楕円であることは何に影響する？', options: ['月の色', '月の見かけの大きさ（皆既日食か金環日食か）', '月の温度', '月の自転'], correctIndex: 1, explanation: '月の公転軌道が楕円のため地球との距離が変わり、月の見かけの大きさが変化して皆既日食か金環日食かが決まります。', difficulty: 'advanced' },
        { id: 'sci3-mvd-q26', question: '月の満ち欠けの周期（約29.5日）と月の公転周期（約27.3日）が異なる理由は？', options: ['地球が公転している分ずれる','月の自転が影響する','太陽が動くから','月が変形するから'], correctIndex: 0, explanation: '月が地球のまわりを1周する間に地球も太陽のまわりを公転するため、同じ位置関係に戻るのにさらに約2日かかります。', difficulty: 'advanced' },
        { id: 'sci3-mvd-q27', question: '部分月食とは何か？', options: ['月の一部が地球の影に入る現象', '月が完全に地球の影に入る現象', '太陽の一部が隠れる現象', '月が半分光る現象'], correctIndex: 0, explanation: '部分月食は月の一部だけが地球の影に入る現象です。完全に入るのは皆既月食です。', difficulty: 'advanced' },
        { id: 'sci3-mvd-q28', question: '皆既日食のときに見えるようになる太陽の構造は？', options: ['黒点','太陽フレア','太陽風','コロナやプロミネンス'], correctIndex: 3, explanation: '皆既日食で太陽が完全に隠れると、ふだん太陽の明るさに隠されているコロナやプロミネンスが見えます。', difficulty: 'advanced' },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-mvd-ex1',
          question:
            '金星が「よいの明星」として見えるとき、金星はどの方角の空に、いつごろ見えるか。太陽・地球・金星の位置関係から説明しなさい。',
          steps: [
            {
              title: 'Step 1: よいの明星の条件',
              content:
                'よいの明星とは夕方の西の空に見える金星のことです。',
              highlight: '夕方・西の空',
            },
            {
              title: 'Step 2: 位置関係を考える',
              content:
                '金星が太陽の東側（左側）にあるとき、日没後に太陽は地平線の下に沈みますが、金星はまだ地平線の上にあるため、西の空に見えます。',
              highlight: '金星が太陽の東側にある → 日没後も西の空に残る',
            },
            {
              title: 'Step 3: まとめ',
              content:
                '金星が太陽の東側に位置しているとき、日没直後の西の空に「よいの明星」として観測できます。内惑星なので太陽から大きく離れず、真夜中には見えません。',
              highlight:
                '太陽の東側 → 日没直後の西の空に見える',
            },
          ],
          answer:
            '金星が太陽の東側に位置しているとき、日没後に太陽は沈むが金星はまだ地平線の上にあるため、夕方の西の空に「よいの明星」として見える。金星は内惑星なので太陽から大きく離れることがなく、真夜中には見えない。',
        },
        {
          id: 'sci3-mvd-ex2',
          question:
            '日食と月食では、見える範囲にどのような違いがあるか。その理由を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 日食の見える範囲',
              content:
                '日食は月の影が地球上に落ちる場所でしか見えません。月は地球より小さいため、影は地球上のごく限られた範囲にしかできません。',
              highlight: '月の影 → 地球上の限られた範囲',
            },
            {
              title: 'Step 2: 月食の見える範囲',
              content:
                '月食は地球の影に月が入る現象です。地球の影は月全体を覆えるほど大きいため、月が地平線の上にある場所ならどこからでも同じ月食が見えます。',
              highlight: '地球の影に月が入る → 月が見えればどこでも観測可能',
            },
            {
              title: 'Step 3: まとめ',
              content:
                '日食は月の小さな影の範囲に限られるが、月食は月が見える場所ならどこでも観測できるため、月食のほうが広い範囲で見えます。',
              highlight:
                '日食＝限られた場所 ／ 月食＝月が見えればどこでも',
            },
          ],
          answer:
            '日食は月の影が地球上のごく限られた範囲にしか落ちないため、見える場所が限定される。一方、月食は地球の影に月が入る現象で、地球の影は月全体を覆えるほど大きいため、月が地平線の上にある場所ならどこからでも観測できる。',
        },
        {
          id: 'sci3-mvd-ex3',
          question:
            '外惑星（火星など）が大きく満ち欠けしない理由を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 外惑星の位置',
              content:
                '外惑星は地球より外側を公転しています。地球から外惑星を見ると、太陽の光がほぼ正面から当たっている面が見えます。',
              highlight: '地球より外側 → 太陽光がほぼ正面から当たる面が見える',
            },
            {
              title: 'Step 2: 光の当たり方',
              content:
                '外惑星は地球から見ていつも太陽とほぼ同じ方向か、反対方向にあります。どちらの場合も太陽光が当たっている面のほとんどが地球側を向いているため、大きく欠けて見えることがありません。',
              highlight: '太陽光の当たる面がほぼ地球側を向く',
            },
            {
              title: 'Step 3: まとめ',
              content:
                '外惑星は地球より外側にあるため、地球から見ると太陽光が当たる面がほぼ正面に見え、ほとんど丸い形に見えます。',
              highlight:
                '外惑星は常に太陽光の当たる面がほぼ正面 → ほぼ丸く見える',
            },
          ],
          answer:
            '外惑星は地球より外側を公転しているため、地球から見ると太陽光が当たっている面のほとんどが地球側を向いている。そのため外惑星はほぼ丸く見え、内惑星のような大きな満ち欠けは起こらない。',
        },
      ],
    },
    chatId: 'sci3-moon-venus-detail',
  },
};

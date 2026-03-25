import type { Topic } from '../../../../../../../types';

export const timeDifference: Topic = {
  id: 'geo1-time-difference',
  eraId: 'geo1-japan-shape',
  name: '時差から見た日本の位置',
  subtitle: '標準時子午線・時差の計算・日付変更線',
  icon: '⏰',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '経度と時差のしくみ',
          content:
            '地球は24時間で1回転（360度）するため、経度15度ごとに1時間の時差が生じます。イギリスのロンドンを通る経度0度の線を本初子午線（ほんしょしごせん）といい、ここを基準に世界の時刻が決められています。本初子午線の時刻をグリニッジ標準時（GMT）とよびます。各国は自国の標準時を定めるために標準時子午線を決めており、その経線の時刻をその国の標準時としています。東へ行くほど時刻が進み、西へ行くほど時刻が遅れます。',
          image: {
            src: '/images/geography/grade1/japan-shape/time-difference.png',
            alt: '時差のしくみ',
            caption: '経度15度で1時間の時差が生じる',
          },
          keyPoints: [
            '地球は24時間で360度回転 → 経度15度で1時間の時差',
            '経度0度の本初子午線（ロンドン）が基準',
            '東へ行くほど時刻が進み、西へ行くほど遅れる',
          ],
        },
        {
          title: '日本の標準時子午線',
          content:
            '日本の標準時子午線は東経135度の経線で、兵庫県明石市などを通っています。日本の標準時はグリニッジ標準時より9時間進んでいます。これは、東経135度 ÷ 15度 = 9時間と計算できます。日本は東西に細長い国ですが、国内では時差を設けず、東経135度の時刻を全国共通の標準時としています。ロシアやアメリカなど東西に広い国では、国内に複数の標準時を設けている場合もあります。',
          keyPoints: [
            '日本の標準時子午線：東経135度（兵庫県明石市など）',
            '日本とイギリスの時差：9時間（日本が進んでいる）',
            '日本は全国で1つの標準時を使用',
          ],
        },
        {
          title: '日付変更線の役割',
          content:
            '太平洋上のほぼ経度180度の線に沿って、日付変更線が引かれています。日付変更線は、日付のずれを調整するための線です。この線を西から東へ越えると日付を1日戻し、東から西へ越えると日付を1日進めます。日付変更線は、陸地を避けるように曲がりくねって引かれています。もし日付変更線がなければ、地球を一周したときに日付が1日ずれてしまいます。日本は日付変更線の西側に位置するため、世界の中でも早い時刻に新しい1日を迎える国のひとつです。',
          keyPoints: [
            '日付変更線：太平洋上のほぼ経度180度の線',
            '西→東へ越えると1日戻す、東→西で1日進める',
            '日本は日付変更線の西側 → 世界でも早く新しい1日を迎える',
          ],
        },
      ],
      slides: [
        {
          id: 'geo1-td-slide1',
          title: '経度と時差のしくみ',
          slides: [
            {
              type: 'question',
              question: '地球上で時刻の差（時差）はどのように生まれる？',
              subtext: '経度と時差の関係',
              emoji: '🌍',
              image: {
                src: '/images/geography/grade1/japan-shape/time-difference.png',
                alt: '時差のしくみ',
              },
            },
            {
              type: 'reason',
              headline: '経度15度で1時間の時差！',
              points: [
                '地球は24時間で360度回転する',
                '360° ÷ 24時間 = 15度で1時間の時差',
                '経度0度（本初子午線・ロンドン）が世界の基準',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '地球の回転', value: '24時間で360度', emoji: '🌏' },
                  { label: '時差', value: '経度15度で1時間', emoji: '⏰' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '地球の自転により、経度15度ごとに1時間の時差が生まれる。本初子午線（ロンドン）が基準！',
              keywords: [
                { text: '経度15度で1時間', isImportant: true },
                { text: '本初子午線', isImportant: true },
                { text: 'グリニッジ標準時' },
              ],
              nextHint: '次は日本の標準時子午線を学ぼう！',
            },
          ],
        },
        {
          id: 'geo1-td-slide2',
          title: '日本の標準時子午線',
          slides: [
            {
              type: 'question',
              question: '日本の標準時はどの経線を基準に決められている？',
              subtext: '日本の標準時子午線',
              emoji: '🗾',
            },
            {
              type: 'reason',
              headline: '東経135度が日本の基準！',
              points: [
                '日本の標準時子午線は東経135度（兵庫県明石市など）',
                'イギリスとの時差：135° ÷ 15° = 9時間',
                '日本は全国で1つの標準時を使用している',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '標準時子午線', value: '東経135度', emoji: '📍' },
                  { label: 'イギリスとの時差', value: '9時間（日本が先）', emoji: '⏰' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '日本の標準時子午線は東経135度。イギリスより9時間進んでいる！',
              keywords: [
                { text: '東経135度', isImportant: true },
                { text: '兵庫県明石市', isImportant: true },
                { text: '時差9時間' },
              ],
              nextHint: '次は日付変更線について学ぼう！',
            },
          ],
        },
        {
          id: 'geo1-td-slide3',
          title: '日付変更線の役割',
          slides: [
            {
              type: 'question',
              question: '太平洋上に引かれた「日付変更線」はなぜ必要？',
              subtext: '日付変更線の役割',
              emoji: '📅',
            },
            {
              type: 'reason',
              headline: '日付のずれを調整する線！',
              points: [
                '太平洋上のほぼ経度180度の線に引かれている',
                '西→東に越えると日付を1日戻す、東→西で1日進める',
                '日付変更線がないと地球一周で日付が1日ずれてしまう',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '日付変更線は日付のずれを調整する線。日本はその西側にあり、世界でも早く新しい1日を迎える！',
              keywords: [
                { text: '日付変更線', isImportant: true },
                { text: '経度180度', isImportant: true },
                { text: '日本は西側' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'geo1-td-fc1', front: '経度15度ごと（360°÷24時間＝15度）', back: '経度何度ごとに1時間の時差が生じるか？', explanation: '地球が24時間で1回転（360度）することから計算できる。', difficulty: 'basic' },
      { id: 'geo1-td-fc2', front: '経度0度の経線で、イギリスのロンドン（旧グリニッジ天文台）を通る', back: '本初子午線とは何か？どこを通る経線か？', explanation: '世界の時刻の基準となる線。', difficulty: 'basic' },
      { id: 'geo1-td-fc3', front: '東経135度（兵庫県明石市などを通る）', back: '日本の標準時子午線は東経何度？どこを通る？', explanation: '「135」はテストで必ず出る数字。明石市とセットで覚える。', difficulty: 'basic' },
      { id: 'geo1-td-fc4', front: '太平洋上のほぼ経度180度の線。日付のずれを調整する線', back: '日付変更線とは何か？どこに引かれているか？', explanation: '陸地を避けるように曲がりくねって引かれている。', difficulty: 'basic' },
      { id: 'geo1-td-fc5', front: '9時間（135°÷15°＝9）。日本の方が進んでいる', back: '日本とイギリスの時差は何時間か？計算方法も答えよ。', explanation: '経度差÷15度で時差を求められる。', difficulty: 'basic' },
      { id: 'geo1-td-fc6', front: '日付を1日戻す', back: '日付変更線を西から東へ越えると日付はどうなるか？', explanation: '逆に東から西へ越えると1日進める。', difficulty: 'basic' },
      { id: 'geo1-td-fc7', front: '東経の値と西経の値を足し算する', back: '東経の地点と西経の地点の経度差はどう求めるか？', explanation: '例：東経135度と西経75度→135＋75＝210度。', difficulty: 'standard' },
      { id: 'geo1-td-fc8', front: '午後9時（21時）', back: 'ロンドンが正午12時のとき、日本は何時か？', explanation: '日本はロンドンより9時間進んでいるため。', difficulty: 'basic' },
      { id: 'geo1-td-fc9', front: '陸地（国の領土）を避けるように引かれているため', back: '日付変更線が直線でなく曲がりくねっている理由は何か？', explanation: '同じ国の中で日付が異なると不便なため。', difficulty: 'standard' },
      { id: 'geo1-td-fc10', front: '14時間（135＋75＝210度、210÷15＝14）', back: 'ニューヨーク（西経75度）と日本（東経135度）の時差は何時間か？', explanation: '東経と西経の場合は経度を足して計算する。', difficulty: 'standard' },
      { id: 'geo1-td-fc11', front: 'グリニッジ標準時（GMT）。本初子午線を基準とした時刻', back: '世界の標準時の基準となる時刻を何というか。', explanation: 'GMTはGreenwich Mean Timeの略。', difficulty: 'basic' },
      { id: 'geo1-td-fc12', front: '大きい方の値から小さい方の値を引き算する', back: '同じ東経にある2つの地点の経度差はどう求めるか？', explanation: '例：東経135度と東経120度→135−120＝15度（1時間）。', difficulty: 'standard' },
      { id: 'geo1-td-fc13', front: '日付変更線の西側に位置しているため', back: '日本が世界でも早く新年を迎える理由を答えよ。', explanation: '日付変更線のすぐ西側にある島国（トンガなど）が最も早い。', difficulty: 'standard' },
      { id: 'geo1-td-fc14', front: 'アメリカとロシア', back: '国内に複数の標準時を設けている国の例を2つあげよ。', explanation: '東西に非常に広い国のため。', difficulty: 'standard' },
      { id: 'geo1-td-fc15', front: '2時間（30÷15＝2）', back: '経度30度離れた2地点の時差は何時間か。', explanation: '経度差÷15度＝時差の基本公式を使う。', difficulty: 'standard' },
      { id: 'geo1-td-fc16', front: '日付を1日進める', back: '日付変更線を東から西に越えると日付はどうなるか。', explanation: '逆に西から東に越えると1日戻す。セットで覚えよう。', difficulty: 'basic' },
      { id: 'geo1-td-fc17', front: '夏の間、時計を1時間進めて日照時間を有効に活用する制度', back: 'サマータイムとは何か。', explanation: 'ヨーロッパやアメリカなどで採用されている。', difficulty: 'standard' },
      { id: 'geo1-td-fc18', front: '採用していない', back: '日本ではサマータイムを採用しているか。', explanation: '戦後一時期導入されたが廃止された。', difficulty: 'standard' },
      { id: 'geo1-td-fc19', front: '進む（太陽が先に昇るため）', back: '東に行くと時刻は進むか遅れるか。', explanation: '地球は西から東に自転しているため、東側が先に朝を迎える。', difficulty: 'basic' },
      { id: 'geo1-td-fc20', front: '日付変更線のすぐ西側の島国（トンガ、キリバスなど）', back: '世界で最も早く新年を迎える地域はどこか。', explanation: '日付変更線の西側が最も早く新しい日を迎える。', difficulty: 'advanced' },
      { id: 'geo1-td-fc21', front: '西側', back: '日本は日付変更線のどちら側に位置しているか。', explanation: 'そのため世界でも比較的早く新しい1日を迎える。', difficulty: 'basic' },
      { id: 'geo1-td-fc22', front: '12月31日午後3時', back: '日本が1月1日午前0時のとき、ロンドンは何月何日の何時？', explanation: '日本の方が9時間進んでいるため。', difficulty: 'advanced' },
      { id: 'geo1-td-fc23', front: '足した結果が24時を超えたら翌日、引いた結果が0時未満なら前日', back: '時差の計算で日付が変わる場合のポイントは何か。', explanation: '時差問題では日付の変化に注意が必要。', difficulty: 'advanced' },
      { id: 'geo1-td-fc24', front: '日本より西の国では時刻が遅れるため', back: '日本の正午にテレビで海外の生中継を見て現地が夜だった。その国はどちら側にある？', explanation: '西に行くほど時刻が遅れ、夜になっている。', difficulty: 'advanced' },
      { id: 'geo1-td-fc25', front: '3月11日午前0時', back: 'ロンドンが3月10日午後3時のとき日本は何月何日何時？', explanation: '午後3時＋9時間＝翌日の午前0時。', difficulty: 'advanced' },
      { id: 'geo1-td-fc26', front: '1時間（135−120＝15度、15÷15＝1）', back: '東経120度の国と日本（東経135度）の時差は何時間か。', explanation: '同じ東経同士は引き算で経度差を求める。', difficulty: 'standard' },
      { id: 'geo1-td-fc27', front: '時差はない（0時間）', back: '経度が同じ2地点の時差はどうなるか。', explanation: '時差は経度差で決まるため、緯度が異なっても時差は生じない。', difficulty: 'standard' },
      { id: 'geo1-td-fc28', front: '東西の幅が比較的小さく、1つの時刻で生活に支障がないから', back: '日本が全国で1つの標準時を使っている理由は何か。', explanation: 'ロシアやアメリカなど東西に広い国は複数の標準時をもつ。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'geo1-td-q1',
          question: '経度何度ごとに1時間の時差が生じるか？',
          options: ['経度5度', '経度10度', '経度30度', '経度15度'],
          correctIndex: 3,
          explanation:
            '地球は24時間で360度回転するので、360° ÷ 24 = 15度。経度15度ごとに1時間の時差が生じます。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-td-q2',
          question: '日本の標準時子午線は東経何度か？',
          options: ['東経120度', '東経135度', '東経130度', '東経140度'],
          correctIndex: 1,
          explanation:
            '日本の標準時子午線は東経135度で、兵庫県明石市などを通っています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-td-q3',
          question: '本初子午線が通っている国はどこか？',
          options: ['イギリス', 'フランス', 'ドイツ', 'アメリカ'],
          correctIndex: 0,
          explanation:
            '本初子午線（経度0度）はイギリスのロンドン（旧グリニッジ天文台）を通っています。世界の標準時の基準です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-td-q4',
          question: '日本とイギリスの時差は何時間か？',
          options: ['6時間', '8時間', '7時間', '9時間'],
          correctIndex: 3,
          explanation:
            '日本の標準時子午線は東経135度なので、135° ÷ 15° = 9時間の時差があります。日本の方がイギリスより9時間進んでいます。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-td-q5',
          question: '日付変更線を西から東に越えるとき、日付はどうなるか？',
          options: [
            '日付を1日進める',
            '日付は変わらない',
            '日付を2日進める',
            '日付を1日戻す',
          ],
          correctIndex: 3,
          explanation:
            '日付変更線を西から東へ越えると日付を1日戻します。逆に東から西へ越えると日付を1日進めます。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-td-q6',
          question: 'ロンドンが正午12時のとき、日本の時刻はどれか？',
          options: [
            '午前3時',
            '午後9時',
            '午後3時',
            '午前9時',
          ],
          correctIndex: 1,
          explanation:
            '日本はロンドンより9時間進んでいます。正午12時＋9時間＝午後9時（21時）です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-td-q7',
          question: '東経の地点と西経の地点の経度差はどう求めるか？',
          options: [
            '両方の値を足し算する',
            '大きい方から小さい方を引く',
            '両方の値をかけ算する',
            '片方の値を2倍にする',
          ],
          correctIndex: 0,
          explanation:
            '東経と西経にまたがる場合は、東経の値と西経の値を足し算します。例えば東経135度と西経75度なら135＋75＝210度です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-td-q8',
          question: '日付変更線がほぼ沿っている経度は何度か？',
          options: [
            '経度0度',
            '経度90度',
            '経度135度',
            '経度180度',
          ],
          correctIndex: 3,
          explanation:
            '日付変更線は太平洋上のほぼ経度180度の線に沿って引かれています。陸地を避けるように曲がりくねっています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-td-q9',
          question: '日本が全国で1つの標準時を使っている理由として最も適切なものはどれか？',
          options: [
            '東西の幅が比較的小さく、1つの時刻で生活に支障がないから',
            '日本には東西の幅がないから',
            '法律で1つに決められているから',
            '島国は必ず1つの標準時を使うから',
          ],
          correctIndex: 0,
          explanation:
            '日本は東西の経度差が約32度あり計算上は約2時間の差がありますが、社会生活上大きな支障がないため、全国で1つの標準時を採用しています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-td-q10',
          question: '360度÷24時間の計算結果として正しいものはどれか？',
          options: [
            '10度',
            '12度',
            '20度',
            '15度',
          ],
          correctIndex: 3,
          explanation:
            '360÷24＝15です。地球は24時間で360度回転するため、経度15度ごとに1時間の時差が生じます。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-td-q11',
          question: '経度30度離れた2地点の時差は何時間か。',
          options: [
            '2時間',
            '1時間',
            '3時間',
            '4時間',
          ],
          correctIndex: 0,
          explanation:
            '30度÷15度＝2時間です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-td-q12',
          question: '日付変更線はどこに引かれているか。',
          options: [
            '赤道上',
            '本初子午線上',
            '太平洋上のほぼ経度180度の線',
            '大西洋上の経度90度の線',
          ],
          correctIndex: 2,
          explanation:
            '日付変更線は太平洋上のほぼ経度180度の線に沿って引かれています。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-td-q13',
          question: '日付変更線を西から東に越えると日付はどうなるか。',
          options: [
            '1日進める',
            '変わらない',
            '1日戻す',
            '2日進める',
          ],
          correctIndex: 2,
          explanation:
            '日付変更線を西から東に越えると1日戻します。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-td-q14',
          question: '日付変更線が直線でない理由はどれ？',
          options: [
            '海流の影響',
            '地形の影響',
            '陸地を避けるように引かれているため',
            '赤道の影響',
          ],
          correctIndex: 2,
          explanation:
            '陸地（国の領土）を避けるように引かれているため曲がりくねっています。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-td-q15',
          question: 'サマータイムとは何か。',
          options: [
            '夏に時計を1時間進める制度',
            '冬に時計を1時間進める制度',
            '夏に時計を1時間遅らせる制度',
            '毎月時計を調整する制度',
          ],
          correctIndex: 0,
          explanation:
            '夏の間、時計を1時間進めて日照時間を有効に活用する制度です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-td-q16',
          question: '東に行くと時刻はどうなるか。',
          options: [
            '遅れる',
            '変わらない',
            '進む',
            '半日ずれる',
          ],
          correctIndex: 2,
          explanation:
            '東に行くと太陽が先に昇るため時刻は進みます。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-td-q17',
          question: '日本が1月1日午前0時のとき、ロンドンは何月何日の何時？',
          options: [
            '1月1日午前9時',
            '12月31日午後3時',
            '1月1日午後9時',
            '12月31日午前9時',
          ],
          correctIndex: 1,
          explanation:
            '日本の方が9時間進んでいるため、ロンドンは12月31日午後3時です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-td-q18',
          question: 'ニューヨーク（西経75度）と日本の時差は何時間？',
          options: [
            '14時間',
            '12時間',
            '10時間',
            '16時間',
          ],
          correctIndex: 0,
          explanation:
            '(135度＋75度)÷15度＝14時間です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-td-q19',
          question: '世界で最も早く新年を迎える地域はどこか。',
          options: [
            '日本',
            'イギリス',
            '日付変更線のすぐ西側の島国',
            'ハワイ',
          ],
          correctIndex: 2,
          explanation:
            '日付変更線のすぐ西側にあるトンガ、キリバスなどが最も早く新年を迎えます。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-td-q20',
          question: '東経120度の国と日本の時差は何時間か。',
          options: [
            '1時間',
            '30分',
            '2時間',
            '3時間',
          ],
          correctIndex: 0,
          explanation:
            '(135度−120度)÷15度＝1時間。日本の方が進んでいます。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-td-q21',
          question: '日本国内に時差はあるか。',
          options: [
            'ある',
            'ない',
            'ある',
            'ある',
          ],
          correctIndex: 1,
          explanation:
            '日本は全国で1つの標準時を使用しているため国内に時差はありません。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-td-q22',
          question: '経度が同じ2地点の時差はどうなるか。',
          options: [
            '1時間',
            '12時間',
            '時差はない',
            '季節による',
          ],
          correctIndex: 2,
          explanation:
            '経度が同じ2地点には時差がありません（0時間）。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-td-q23',
          question: '時差の計算で日付が変わる場合のポイントはどれ？',
          options: [
            '常に翌日になる',
            '日付は変わらない',
            '経度の差が90度以上なら変わる',
            '足して24時を超えたら翌日、引いて0時未満なら前日',
          ],
          correctIndex: 3,
          explanation:
            '足した結果が24時を超えたら翌日に、引いた結果が0時未満になったら前日になります。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-td-q24',
          question: '日本の正午にテレビで海外の生中継を見たとき現地が夜だった。その国はどちら側？',
          options: [
            '東側',
            '西側',
            '南側',
            '北側',
          ],
          correctIndex: 1,
          explanation:
            '日本より西の国では時刻が遅れるため、日本が昼でも夜の場合があります。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-td-q25',
          question: 'ロンドンが3月10日午後3時のとき日本は何月何日何時？',
          options: [
            '3月10日午後6時',
            '3月10日午前6時',
            '3月11日午前0時',
            '3月9日午後6時',
          ],
          correctIndex: 2,
          explanation:
            '午後3時＋9時間＝翌日の午前0時。3月11日午前0時です。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-td-q26',
          question: '360÷24の計算結果はいくつか。この数字の意味は？',
          options: [
            '12',
            '15',
            '20',
            '24',
          ],
          correctIndex: 1,
          explanation:
            '15が経度1時間分の角度にあたります。経度15度ごとに1時間の時差が生じます。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-td-q27',
          question: '2つの地点がともに東経にある場合の経度差の求め方はどれ？',
          options: [
            '足し算する',
            '大きい方から小さい方を引く',
            '180度から引く',
            'どちらかを2倍にする',
          ],
          correctIndex: 1,
          explanation:
            'ともに東経の場合は大きい方から小さい方を引き算します。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-td-q28',
          question: '日本はイギリスより時刻が進んでいるか遅れているか。理由も正しいのはどれ？',
          options: [
            '遅れている。西に位置するため',
            '進んでいる。東に位置するため',
            '同じ。同じ経度のため',
            '遅れている。南に位置するため',
          ],
          correctIndex: 1,
          explanation:
            '日本はイギリスより東に位置するため、時刻が9時間進んでいます。',
        difficulty: 'advanced',
      },
      ],
    },
    examples: {
      examples: [
        {
          id: 'geo1-td-ex1',
          question:
            'ロンドン（経度0度）が1月10日の午前9時のとき、日本（東経135度）の日時を求めなさい。',
          steps: [
            {
              title: 'Step 1: 経度の差を求める',
              content:
                '日本の標準時子午線は東経135度、ロンドンは経度0度なので、経度の差は135度です。',
              highlight: '経度の差 = 135度',
            },
            {
              title: 'Step 2: 時差を計算する',
              content:
                '経度15度で1時間の時差が生じるので、135° ÷ 15° = 9時間の時差があります。',
              highlight: '時差 = 135° ÷ 15° = 9時間',
            },
            {
              title: 'Step 3: 日本の時刻を求める',
              content:
                '日本はロンドンより東にあるので時刻は進んでいます。ロンドンの午前9時 + 9時間 = 午後6時（18時）。日付は同じ1月10日のままです。',
              highlight: '午前9時 + 9時間 = 午後6時',
            },
          ],
          answer: '日本は1月10日の午後6時（18時）',
        },
        {
          id: 'geo1-td-ex2',
          question:
            'ニューヨーク（西経75度）が3月5日の午前8時のとき、日本（東経135度）の日時を求めなさい。',
          steps: [
            {
              title: 'Step 1: 経度の差を求める',
              content:
                '日本は東経135度、ニューヨークは西経75度です。経度の差は 135° + 75° = 210度です（東経と西経なので足し算）。',
              highlight: '経度の差 = 135° + 75° = 210度',
            },
            {
              title: 'Step 2: 時差を計算する',
              content:
                '210° ÷ 15° = 14時間の時差があります。日本はニューヨークより東にあるので、時刻が14時間進んでいます。',
              highlight: '時差 = 210° ÷ 15° = 14時間',
            },
            {
              title: 'Step 3: 日本の時刻を求める',
              content:
                'ニューヨークの午前8時 + 14時間 = 午後10時（22時）。日付は同じ3月5日のままです。',
              highlight: '午前8時 + 14時間 = 午後10時',
            },
          ],
          answer: '日本は3月5日の午後10時（22時）',
        },
        {
          id: 'geo1-td-ex3',
          question:
            '日本が12月31日の午後11時のとき、ロンドン（経度0度）の日時を求めなさい。',
          steps: [
            {
              title: 'Step 1: 時差を確認する',
              content:
                '日本の標準時子午線は東経135度。ロンドンは経度0度。時差＝135÷15＝9時間。日本がロンドンより9時間進んでいます。',
              highlight: '時差 = 9時間（日本が先）',
            },
            {
              title: 'Step 2: ロンドンの時刻を計算する',
              content:
                '日本の午後11時（23時）から9時間を引きます。23時−9時間＝14時（午後2時）。日付は同じ12月31日です。',
              highlight: '午後11時 − 9時間 = 午後2時',
            },
            {
              title: 'Step 3: 結論',
              content:
                '日本が大晦日の夜を迎えている頃、ロンドンはまだ同日の午後です。日本の方が早く年越しを迎えます。',
              highlight: '日本が先に新年を迎える',
            },
          ],
          answer: 'ロンドンは12月31日の午後2時（14時）',
        },
        {
          id: 'geo1-td-ex4',
          question:
            '北京（東経120度）が午後1時のとき、日本（東経135度）の時刻を求めなさい。',
          steps: [
            {
              title: 'Step 1: 経度差を求める',
              content:
                'ともに東経なので引き算します。135度−120度＝15度。',
              highlight: '経度の差 = 15度',
            },
            {
              title: 'Step 2: 時差を計算する',
              content:
                '15度÷15度＝1時間。日本は北京より東にあるので1時間進んでいます。',
              highlight: '時差 = 1時間（日本が先）',
            },
            {
              title: 'Step 3: 日本の時刻を求める',
              content:
                '北京の午後1時＋1時間＝午後2時。日付は変わりません。',
              highlight: '午後1時 + 1時間 = 午後2時',
            },
          ],
          answer: '日本は午後2時（14時）',
        },
        {
          id: 'geo1-td-ex5',
          question:
            'パリ（東経15度）が7月14日の午後8時のとき、日本（東経135度）の日時を求めなさい。',
          steps: [
            {
              title: 'Step 1: 経度差を求める',
              content:
                'ともに東経なので引き算します。135度−15度＝120度。',
              highlight: '経度の差 = 120度',
            },
            {
              title: 'Step 2: 時差を計算する',
              content:
                '120度÷15度＝8時間。日本はパリより東にあるので8時間進んでいます。',
              highlight: '時差 = 8時間（日本が先）',
            },
            {
              title: 'Step 3: 日本の時刻を求める',
              content:
                'パリの午後8時（20時）＋8時間＝28時＝翌日の午前4時。日本は7月15日の午前4時になります。日付が変わる点に注意です。',
              highlight: '午後8時 + 8時間 = 翌日午前4時',
            },
          ],
          answer: '日本は7月15日の午前4時',
        },
      ],
    },
    chatId: 'geo1-time-difference',
  },
};

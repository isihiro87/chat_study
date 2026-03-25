import type { Topic } from '../../../../../../../types';

export const locationMaps: Topic = {
  id: 'geo1-location-maps',
  eraId: 'geo1-world-shape',
  name: '地球上の位置と地図',
  subtitle: '緯度と経度・地球儀と世界地図',
  icon: '🗺️',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '緯度と経度',
          content:
            '地球上の位置は、緯度と経度を使って表します。緯度は赤道を基準（0度）として、北へ向かう北緯と南へ向かう南緯に分けられ、それぞれ90度まであります。経度は本初子午線（イギリスのロンドンを通る経線）を基準（0度）として、東へ向かう東経と西へ向かう西経に分けられ、それぞれ180度まであります。たとえば日本の東京は北緯約36度・東経約140度に位置しています。緯度と経度を組み合わせれば、地球上のどの地点でも正確に表すことができます。',
          image: {
            src: '/images/geography/grade1/world-shape/latitude-longitude.png',
            alt: '緯度と経度',
            caption: '赤道と本初子午線を基準とした緯度・経度の仕組み',
          },
          keyPoints: [
            '緯度：赤道（0度）を基準に北緯・南緯（各90度まで）',
            '経度：本初子午線（0度）を基準に東経・西経（各180度まで）',
            '緯度と経度の組み合わせで地球上のどの地点も表せる',
          ],
        },
        {
          title: '高緯度地域の白夜と極夜',
          content:
            '地球は地軸が約23.4度傾いた状態で太陽のまわりを公転しています。そのため、高緯度地域（北極圏や南極圏の付近）では、夏に太陽が一日中沈まない「白夜」や、冬に太陽が一日中昇らない「極夜」という現象が見られます。北緯66.6度以北（北極圏）や南緯66.6度以南（南極圏）の地域で起こります。白夜の時期には真夜中でも明るく、極夜の時期には一日中暗い状態が続きます。これは地軸の傾きと緯度の高さが関係する現象です。',
          keyPoints: [
            '白夜：夏に太陽が一日中沈まない現象',
            '極夜：冬に太陽が一日中昇らない現象',
            '北極圏（北緯66.6度以北）・南極圏（南緯66.6度以南）で起こる',
          ],
        },
        {
          title: '地球儀と世界地図の特徴',
          content:
            '地球儀は地球を縮小した模型で、面積・距離・方位・形のすべてを正しく表すことができます。しかし持ち運びが不便で、地球全体を一度に見ることが難しいという欠点があります。一方、世界地図は球体の地球を平面に表したもので、面積・距離・方位・形のすべてを同時に正しく表すことはできません。目的に応じてさまざまな図法が使われています。メルカトル図法は角度（航海の方位）が正しく、モルワイデ図法は面積が正しく、正距方位図法は中心からの距離と方位が正しく表されます。どの図法にも長所と短所があるため、使う目的に合った地図を選ぶことが大切です。',
          keyPoints: [
            '地球儀：面積・距離・方位・形のすべてを正しく表せる',
            '世界地図：球体を平面にするため、すべてを同時に正しく表せない',
            '目的に応じた図法の選択が重要（メルカトル・モルワイデ・正距方位など）',
          ],
        },
      ],
      slides: [
        {
          id: 'geo1-lm-slide1',
          title: '緯度と経度',
          slides: [
            {
              type: 'question',
              question: '地球上の位置はどうやって表す？',
              subtext: '緯度と経度の仕組み',
              emoji: '🌐',
              image: {
                src: '/images/geography/grade1/world-shape/latitude-longitude.png',
                alt: '緯度と経度',
              },
            },
            {
              type: 'reason',
              headline: '緯度と経度で表す！',
              points: [
                '緯度：赤道（0度）を基準に北緯・南緯（各90度まで）',
                '経度：本初子午線（0度）を基準に東経・西経（各180度まで）',
                '東京は北緯約36度・東経約140度に位置する',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '緯度', value: '赤道基準 北緯・南緯', emoji: '↕️' },
                  { label: '経度', value: '本初子午線基準 東経・西経', emoji: '↔️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion:
                '緯度と経度を組み合わせれば、地球上のどの地点でも正確に位置を表せる！',
              keywords: [
                { text: '緯度', isImportant: true },
                { text: '経度', isImportant: true },
                { text: '赤道' },
                { text: '本初子午線' },
              ],
              nextHint: '次は高緯度地域で起こる白夜と極夜を学ぼう！',
            },
          ],
        },
        {
          id: 'geo1-lm-slide2',
          title: '白夜と極夜',
          slides: [
            {
              type: 'question',
              question: '高緯度地域で見られる特別な現象とは？',
              subtext: '白夜と極夜',
              emoji: '☀️',
            },
            {
              type: 'reason',
              headline: '白夜と極夜が起こる！',
              points: [
                '白夜：夏に太陽が一日中沈まない（真夜中でも明るい）',
                '極夜：冬に太陽が一日中昇らない（一日中暗い）',
                '北極圏（北緯66.6度以北）・南極圏（南緯66.6度以南）で発生',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '白夜', value: '夏・太陽が沈まない', emoji: '🌅' },
                  { label: '極夜', value: '冬・太陽が昇らない', emoji: '🌑' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion:
                '地軸の傾きにより、高緯度地域では白夜（夏）と極夜（冬）が起こる！',
              keywords: [
                { text: '白夜', isImportant: true },
                { text: '極夜', isImportant: true },
                { text: '北極圏・南極圏' },
              ],
              nextHint: '次は地球儀と世界地図の違いを見てみよう！',
            },
          ],
        },
        {
          id: 'geo1-lm-slide3',
          title: '地球儀と世界地図',
          slides: [
            {
              type: 'question',
              question: '地球儀と世界地図、それぞれの特徴は？',
              subtext: '長所と短所を比べよう',
              emoji: '🗺️',
            },
            {
              type: 'reason',
              headline: 'それぞれに長所と短所がある！',
              points: [
                '地球儀：面積・距離・方位・形のすべてが正確だが持ち運びに不便',
                'メルカトル図法：角度（方位）が正確、高緯度の面積が拡大される',
                'モルワイデ図法：面積が正確、形にゆがみが出る',
                '正距方位図法：中心からの距離と方位が正確',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '地球儀', value: 'すべて正確', emoji: '🌍' },
                  { label: '世界地図', value: '目的に応じて図法を選ぶ', emoji: '🗺️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion:
                '地球儀はすべてが正確だが、世界地図は目的に応じた図法の選択が大切！',
              keywords: [
                { text: '地球儀', isImportant: true },
                { text: 'メルカトル図法' },
                { text: 'モルワイデ図法' },
                { text: '正距方位図法' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'geo1-lm-fc1', front: '赤道（0度）が基準。北緯・南緯それぞれ90度まで', back: '緯度の基準となる線は何か？また、緯度は何度まである？', explanation: '赤道から北が北緯、南が南緯。北極点が北緯90度、南極点が南緯90度。', difficulty: 'basic' },
      { id: 'geo1-lm-fc2', front: '本初子午線（0度・ロンドン）が基準。東経・西経それぞれ180度まで', back: '経度の基準となる線は何か？また、経度は何度まである？', explanation: 'イギリスのロンドン（旧グリニッジ天文台）を通る経線が基準。', difficulty: 'basic' },
      { id: 'geo1-lm-fc3', front: '白夜は夏に太陽が一日中沈まない現象、極夜は冬に太陽が一日中昇らない現象', back: '白夜と極夜とはそれぞれどのような現象か？', explanation: '北極圏（北緯66.6度以北）・南極圏（南緯66.6度以南）で見られる。', difficulty: 'basic' },
      { id: 'geo1-lm-fc4', front: '面積・距離・方位・形のすべてを正しく表せる', back: '地球儀はどのような点で世界地図より優れているか？', explanation: '持ち運びが不便で全体を一度に見られない欠点がある。', difficulty: 'basic' },
      { id: 'geo1-lm-fc5', front: '長所：角度（航海の方位）が正しい。短所：高緯度の面積が拡大される', back: 'メルカトル図法の長所と短所は何か？', explanation: '航海に適した図法。グリーンランドが実際より大きく見える。', difficulty: 'basic' },
      { id: 'geo1-lm-fc6', front: 'モルワイデ図法は面積、正距方位図法は中心からの距離と方位', back: 'モルワイデ図法と正距方位図法はそれぞれ何が正しく表される？', explanation: '目的に応じて使い分けることが大切。', difficulty: 'standard' },
      { id: 'geo1-lm-fc7', front: '対蹠点（たいせきてん）', back: '地球上のある地点の正反対にある地点を何という？', explanation: '地球の中心を通って反対側に出た地点のこと。', difficulty: 'basic' },
      { id: 'geo1-lm-fc8', front: '南アメリカのウルグアイ沖の大西洋上', back: '東京の対蹠点はどこ付近にあるか？', explanation: '日本の裏側は陸地ではなく海の上にある。', difficulty: 'standard' },
      { id: 'geo1-lm-fc9', front: '緯度は北緯⇔南緯を反転（数値は同じ）、経度は東経⇔西経を反転し180度から引く', back: '対蹠点の緯度と経度はどのように求めるか？', explanation: '例：北緯36度・東経140度の対蹠点は南緯36度・西経40度。', difficulty: 'standard' },
      { id: 'geo1-lm-fc10', front: '赤道', back: '緯度0度の線は何か？', explanation: '地球を南北に二等分する線。アフリカ大陸や南アメリカ大陸を通る。', difficulty: 'basic' },
      { id: 'geo1-lm-fc11', front: '本初子午線（イギリス・ロンドンの旧グリニッジ天文台を通る）', back: '経度0度の線は何か？どこを通る？', explanation: '経度の基準となる線で、時差の計算にも関わる。', difficulty: 'basic' },
      { id: 'geo1-lm-fc12', front: '北緯66.6度以北', back: '北極圏とは北緯何度以北の地域か？', explanation: '夏に白夜、冬に極夜が見られる。', difficulty: 'basic' },
      { id: 'geo1-lm-fc13', front: '16方位（例：北北東、東南東）', back: '8方位をさらに細かくした方位の表し方を何という？例を2つ答えよ。', explanation: '22.5度刻みで方位を細かく表す。天気予報の風向きなどで使われる。', difficulty: 'standard' },
      { id: 'geo1-lm-fc14', front: '4方位は90度、8方位は45度、16方位は22.5度刻み', back: '4方位・8方位・16方位はそれぞれ何度刻みか？', explanation: '360度を等分した角度で覚えよう。', difficulty: 'standard' },
      { id: 'geo1-lm-fc15', front: '直角に交わる', back: 'メルカトル図法の地図で、緯線と経線はどのように交わるか？', explanation: 'そのため角度が正しく表され、航海に適している。', difficulty: 'standard' },
      { id: 'geo1-lm-fc16', front: '約23.4度', back: '地球の地軸は何度傾いているか？', explanation: 'この傾きが白夜・極夜や四季が生じる原因。', difficulty: 'standard' },
      { id: 'geo1-lm-fc17', front: '航空図（最短ルート・大圏航路を調べるのに適する）', back: '正距方位図法はどのような場面で使われるか？', explanation: '中心からの距離と方位が正しく表される図法。', difficulty: 'standard' },
      { id: 'geo1-lm-fc18', front: '北緯約36度・東経約140度', back: '日本の東京の位置をおおよその緯度と経度で答えよ。', explanation: 'テストでよく出る数値。セットで覚えよう。', difficulty: 'standard' },
      { id: 'geo1-lm-fc19', front: '北緯90度', back: '北極点の緯度を答えよ。', explanation: '緯度の最大値。赤道から北へ最も離れた地点。', difficulty: 'basic' },
      { id: 'geo1-lm-fc20', front: '南緯90度', back: '南極点の緯度を答えよ。', explanation: '赤道から南へ最も離れた地点。南極大陸の中心にある。', difficulty: 'basic' },
      { id: 'geo1-lm-fc21', front: '4方位', back: '東西南北の4つの方位を何というか。', explanation: '最も基本的な方位の表し方。地図では上が北。', difficulty: 'basic' },
      { id: 'geo1-lm-fc22', front: '北東', back: '8方位で、北と東の間は何か。', explanation: '8方位は4方位の間を加えた45度刻みの方位。', difficulty: 'basic' },
      { id: 'geo1-lm-fc23', front: '東南東', back: '16方位で東と南東の間の方位は何か。', explanation: '「東」が先に来るので東寄りの方位であることを示す。', difficulty: 'advanced' },
      { id: 'geo1-lm-fc24', front: '表せない（球体を平面にするため何かが必ずゆがむ）', back: '世界地図で面積・距離・方位・形のすべてを同時に正しく表せるか。', explanation: 'すべてを正しく表せるのは地球儀だけ。', difficulty: 'standard' },
      { id: 'geo1-lm-fc25', front: '持ち運びが不便・地球全体を一度に見ることが難しい', back: '地球儀の短所を2つ答えよ。', explanation: '正確だが実用性では世界地図に劣る面がある。', difficulty: 'standard' },
      { id: 'geo1-lm-fc26', front: 'アフリカ大陸と南アメリカ大陸', back: '赤道が通る大陸を2つ答えよ。', explanation: '赤道直下は熱帯の気候で、年中気温が高い。', difficulty: 'standard' },
      { id: 'geo1-lm-fc27', front: '分布図や各国の面積比較', back: 'モルワイデ図法はどのような場面に適しているか。', explanation: '面積が正しく表されるため。', difficulty: 'advanced' },
      { id: 'geo1-lm-fc28', front: '太陽のまわりを公転している', back: '地球は地軸が約23.4度傾いた状態でどのような運動をしているか。', explanation: 'この傾きと公転が四季や白夜・極夜の原因になっている。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'geo1-lm-q1',
          question: '緯度の基準となる線はどれ？',
          options: ['赤道', '日付変更線', '本初子午線', '北回帰線'],
          correctIndex: 0,
          explanation:
            '緯度の基準は赤道（0度）です。赤道から北が北緯、南が南緯で、それぞれ90度まであります。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-lm-q2',
          question: '本初子午線が通る都市はどこ？',
          options: ['パリ', 'ニューヨーク', 'ロンドン', '東京'],
          correctIndex: 2,
          explanation:
            '本初子午線（経度0度）はイギリスのロンドン（旧グリニッジ天文台）を通ります。これが経度の基準です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-lm-q3',
          question: '高緯度地域で夏に太陽が一日中沈まない現象を何という？',
          options: ['極夜', '永久凍土', '日食', '白夜'],
          correctIndex: 3,
          explanation:
            '白夜とは、高緯度地域で夏に太陽が一日中沈まない現象です。冬に太陽が一日中昇らない現象は極夜といいます。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-lm-q4',
          question:
            '面積・距離・方位・形のすべてを正しく表すことができるのはどれ？',
          options: [
            '地球儀',
            'メルカトル図法',
            'モルワイデ図法',
            '正距方位図法',
          ],
          correctIndex: 0,
          explanation:
            '地球儀は地球を縮小した模型なので、面積・距離・方位・形のすべてを正しく表すことができます。世界地図はすべてを同時に正しく表せません。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-lm-q5',
          question:
            '角度（航海の方位）が正しく表される図法はどれ？',
          options: [
            'モルワイデ図法',
            '正距方位図法',
            '正積図法',
            'メルカトル図法',
          ],
          correctIndex: 3,
          explanation:
            'メルカトル図法は角度が正しく表されるため、航海の方位を調べるのに適しています。ただし高緯度地域の面積が拡大されます。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-lm-q6',
          question: '地球上のある地点の正反対の地点を何という？',
          options: ['基準点', '交差点', '極点', '対蹠点'],
          correctIndex: 3,
          explanation:
            '対蹠点（たいせきてん）は地球上のある地点の正反対にある地点のことです。東京の対蹠点はウルグアイ沖にあります。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-lm-q7',
          question: '面積が正しく表される図法はどれ？',
          options: [
            'モルワイデ図法',
            'メルカトル図法',
            '正距方位図法',
            '多円錐図法',
          ],
          correctIndex: 0,
          explanation:
            'モルワイデ図法は面積が正しく表されます。各国の面積を比較したり、分布図を作成したりするのに適しています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-lm-q8',
          question: '16方位で、北と北東の間の方位は何？',
          options: ['北東北', '東北東', '北北東', '北西東'],
          correctIndex: 2,
          explanation:
            '北と北東の間は北北東です。16方位は8方位をさらに細かくした表し方で、22.5度刻みになります。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-lm-q9',
          question: '北緯35度・東経140度の対蹠点として正しいものはどれ？',
          options: [
            '北緯35度・西経140度',
            '南緯35度・東経40度',
            '南緯55度・西経40度',
            '南緯35度・西経40度',
          ],
          correctIndex: 3,
          explanation:
            '対蹠点は緯度が北緯⇔南緯（数値は同じ）、経度は180度−140度＝40度で東経⇔西経になります。よって南緯35度・西経40度です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-lm-q10',
          question: '白夜と極夜が起こる原因として正しいものはどれ？',
          options: [
            '地球の地軸が約23.4度傾いているため',
            '地球の自転速度が変わるため',
            '太陽の大きさが変わるため',
            '地球と太陽の距離が変化するため',
          ],
          correctIndex: 0,
          explanation:
            '地球の地軸が約23.4度傾いた状態で太陽のまわりを公転しているため、高緯度地域では夏に太陽が沈まない白夜や冬に太陽が昇らない極夜が起こります。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-lm-q11',
          question: '東京の位置をおおよその緯度・経度で表すとどれか。',
          options: [
            '北緯約36度・東経約140度',
            '南緯約36度・西経約140度',
            '北緯約50度・東経約120度',
            '北緯約20度・東経約160度',
          ],
          correctIndex: 0,
          explanation:
            '東京は北緯約36度・東経約140度に位置しています。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-lm-q12',
          question: '南極点の緯度はどれか。',
          options: [
            '北緯90度',
            '南緯90度',
            '北緯0度',
            '南緯0度',
          ],
          correctIndex: 1,
          explanation:
            '南極点の緯度は南緯90度です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-lm-q13',
          question: '東経・西経はそれぞれ最大で何度まであるか。',
          options: [
            '各90度',
            '各120度',
            '各150度',
            '各180度',
          ],
          correctIndex: 3,
          explanation:
            '東経・西経はそれぞれ180度まであります。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-lm-q14',
          question: '地球をそのまま縮めた模型を何というか。',
          options: [
            '世界地図',
            '地球儀',
            '地形模型',
            '縮尺模型',
          ],
          correctIndex: 1,
          explanation:
            '地球儀は地球をそのまま縮小した模型です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-lm-q15',
          question: '世界地図が地球儀と異なる理由として正しいものはどれ？',
          options: [
            '世界地図の方が正確だから',
            '地球儀は方位が不正確だから',
            '世界地図は距離だけが正確だから',
            '球体を平面にするため何かが必ずゆがむから',
          ],
          correctIndex: 3,
          explanation:
            '世界地図は球体の地球を平面にするため、すべてを同時に正しく表すことはできません。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-lm-q16',
          question: '南緯66.6度以南の地域を何というか。',
          options: [
            '北極圏',
            '南極圏',
            '熱帯',
            '亜熱帯',
          ],
          correctIndex: 1,
          explanation:
            '南緯66.6度以南は南極圏で、白夜や極夜が見られます。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-lm-q17',
          question: '地球上の位置を正確に表すために組み合わせるものはどれ？',
          options: [
            '緯度と標高',
            '経度と標高',
            '緯度と経度',
            '方位と距離',
          ],
          correctIndex: 2,
          explanation:
            '緯度と経度を組み合わせれば地球上のどの地点でも正確に表せます。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-lm-q18',
          question: 'モルワイデ図法はどのような場面に適しているか。',
          options: [
            '航海',
            '航空図',
            '分布図や面積の比較',
            '地形の確認',
          ],
          correctIndex: 2,
          explanation:
            'モルワイデ図法は面積が正しく表されるため、分布図や各国の面積比較に適しています。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-lm-q19',
          question: '地軸の傾きによって起こる現象として正しくないものはどれ？',
          options: [
            '白夜',
            '極夜',
            '四季の変化',
            '地震',
          ],
          correctIndex: 3,
          explanation:
            '地軸の傾きは白夜・極夜・四季をもたらしますが、地震とは関係ありません。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-lm-q20',
          question: '8方位で南と西の間の方位は何か。',
          options: [
            '南東',
            '北西',
            '南西',
            '北東',
          ],
          correctIndex: 2,
          explanation:
            '南と西の間は南西です。8方位は45度刻みです。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-lm-q21',
          question: 'メルカトル図法の短所はどれか。',
          options: [
            '面積が正しく表されない',
            '方位が正しく表されない',
            '距離が正しく表されない',
            '形が正しく表されない',
          ],
          correctIndex: 0,
          explanation:
            'メルカトル図法は高緯度地域ほど面積が実際より大きく表される短所があります。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-lm-q22',
          question: '赤道が通る大陸の正しい組み合わせはどれ？',
          options: [
            'ユーラシア大陸と北アメリカ大陸',
            'アフリカ大陸と南アメリカ大陸',
            '南極大陸とオーストラリア大陸',
            '北アメリカ大陸と南アメリカ大陸',
          ],
          correctIndex: 1,
          explanation:
            '赤道はアフリカ大陸と南アメリカ大陸を通っています。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-lm-q23',
          question: 'メルカトル図法で緯線と経線はどのように交わるか。',
          options: [
            '斜めに交わる',
            '直角に交わる',
            '平行に並ぶ',
            '曲線で交わる',
          ],
          correctIndex: 1,
          explanation:
            'メルカトル図法では緯線と経線が直角に交わるため、角度が正しく表されます。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-lm-q24',
          question: '地球儀の短所として正しくないものはどれ？',
          options: [
            '持ち運びが不便',
            '地球全体を一度に見るのが難しい',
            '面積が正しくない',
            '一部の地域しか見えない',
          ],
          correctIndex: 2,
          explanation:
            '地球儀は面積を含むすべてが正しく表されます。短所は持ち運びの不便さと全体を一度に見られないことです。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-lm-q25',
          question: '4方位・8方位・16方位の刻みの正しい組み合わせはどれ？',
          options: [
            '45度・22.5度・11.25度',
            '90度・45度・22.5度',
            '90度・30度・15度',
            '60度・30度・15度',
          ],
          correctIndex: 1,
          explanation:
            '4方位は90度刻み、8方位は45度刻み、16方位は22.5度刻みです。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-lm-q26',
          question: '東京の対蹠点はどこ付近にあるか。',
          options: [
            'アフリカ大陸の北部',
            'オーストラリアの東側',
            '南アメリカのウルグアイ沖',
            '北極海',
          ],
          correctIndex: 2,
          explanation:
            '東京の対蹠点は南アメリカのウルグアイ沖の大西洋上にあります。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-lm-q27',
          question: '北緯40度・東経130度の対蹠点の経度はどれか。',
          options: [
            '東経50度',
            '西経50度',
            '東経130度',
            '西経130度',
          ],
          correctIndex: 1,
          explanation:
            '対蹠点の経度は180度−130度＝50度で、東経⇔西経なので西経50度になります。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-lm-q28',
          question: '正距方位図法で調べることができるのはどれか。',
          options: [
            '面積の正確な比較',
            '角度の正確な測定',
            '中心からの最短ルート',
            '等高線の分布',
          ],
          correctIndex: 2,
          explanation:
            '正距方位図法は中心からの距離と方位が正しいため、最短ルート（大圏航路）を調べるのに適しています。',
        difficulty: 'advanced',
      },
      ],
    },
    examples: {
      examples: [
        {
          id: 'geo1-lm-ex1',
          question:
            '次の文の（　）にあてはまる語句を答えなさい。\n「緯度は（ ア ）を基準（0度）として、北を（ イ ）、南を（ ウ ）という。経度は（ エ ）を基準（0度）として、東を（ オ ）、西を（ カ ）という。」',
          steps: [
            {
              title: 'Step 1: 緯度の基準を確認する',
              content:
                '緯度の基準は赤道（0度）です。赤道より北の緯度を北緯、南の緯度を南緯といいます。',
              highlight: '緯度の基準＝赤道',
            },
            {
              title: 'Step 2: 経度の基準を確認する',
              content:
                '経度の基準は本初子午線（0度）です。イギリスのロンドンを通る経線で、東を東経、西を西経といいます。',
              highlight: '経度の基準＝本初子午線',
            },
            {
              title: 'Step 3: 解答をまとめる',
              content:
                'ア＝赤道、イ＝北緯、ウ＝南緯、エ＝本初子午線、オ＝東経、カ＝西経です。',
              highlight: '緯度は赤道基準、経度は本初子午線基準',
            },
          ],
          answer:
            'ア：赤道　イ：北緯　ウ：南緯　エ：本初子午線　オ：東経　カ：西経',
        },
        {
          id: 'geo1-lm-ex2',
          question:
            'メルカトル図法・モルワイデ図法・正距方位図法について、それぞれ何が正しく表されるかを説明し、地球儀との違いを述べなさい。',
          steps: [
            {
              title: 'Step 1: 各図法の特徴を整理する',
              content:
                'メルカトル図法は角度（方位）が正しい。モルワイデ図法は面積が正しい。正距方位図法は中心からの距離と方位が正しい。',
              highlight: '各図法はそれぞれ異なるものを正確に表す',
            },
            {
              title: 'Step 2: 地球儀の特徴と比較する',
              content:
                '地球儀は面積・距離・方位・形のすべてを正しく表せます。世界地図は球体を平面にするため、すべてを同時に正しく表すことはできません。',
              highlight: '地球儀＝すべて正確、世界地図＝すべては表せない',
            },
          ],
          answer:
            'メルカトル図法：角度（方位）が正しい。モルワイデ図法：面積が正しい。正距方位図法：中心からの距離と方位が正しい。地球儀はすべてを正しく表せるが、世界地図は球体を平面にするためすべてを同時に正しく表すことはできない。',
        },
        {
          id: 'geo1-lm-ex3',
          question:
            '北緯40度・東経130度の地点Aの対蹠点Bの緯度と経度を求めなさい。',
          steps: [
            {
              title: 'Step 1: 対蹠点の緯度を求める',
              content:
                '対蹠点の緯度は、北緯⇔南緯が反転し、数値は同じです。北緯40度の対蹠点は南緯40度になります。',
              highlight: '北緯40度 → 南緯40度',
            },
            {
              title: 'Step 2: 対蹠点の経度を求める',
              content:
                '対蹠点の経度は、東経⇔西経が反転し、180度からもとの経度を引いた値になります。180度−130度＝50度。東経130度の対蹠点は西経50度になります。',
              highlight: '東経130度 → 西経50度（180−130＝50）',
            },
            {
              title: 'Step 3: 解答をまとめる',
              content:
                '地点Bは南緯40度・西経50度です。この地点は南アメリカのアルゼンチン沖の大西洋上にあたります。',
              highlight: '対蹠点B＝南緯40度・西経50度',
            },
          ],
          answer:
            '対蹠点B：南緯40度・西経50度（南アメリカのアルゼンチン沖、大西洋上）',
        },
        {
          id: 'geo1-lm-ex4',
          question:
            '4方位・8方位・16方位の違いを説明し、16方位で「北北東」がどの方向を指すか答えなさい。',
          steps: [
            {
              title: 'Step 1: 4方位・8方位・16方位の違い',
              content:
                '4方位は東・西・南・北の4方向（90度刻み）。8方位は4方位に北東・北西・南東・南西を加えた8方向（45度刻み）。16方位はさらに細かく分けた16方向（22.5度刻み）です。',
              highlight: '4方位＝90度、8方位＝45度、16方位＝22.5度刻み',
            },
            {
              title: 'Step 2: 北北東の位置を確認する',
              content:
                '北北東は北（0度）と北東（45度）の間の方位で、北から22.5度の方向です。',
              highlight: '北北東＝北から22.5度（北と北東の中間）',
            },
          ],
          answer:
            '4方位は90度刻み、8方位は45度刻み、16方位は22.5度刻み。北北東は北と北東の中間（北から22.5度）の方向を指す。',
        },
      ],
    },
    chatId: 'geo1-location-maps',
  },
};

import type { Topic } from '../../../../../../../types';

export const jomonEra: Topic = {
  id: 'jomon-era',
  eraId: 'japanese-origins',
  name: '旧石器時代と縄文時代',
  subtitle: '狩猟・採集から定住生活へ',
  icon: '🏺',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '旧石器時代の暮らし',
          content:
            '数万年前の氷河時代、日本列島は大陸と陸続きでした。人々はナウマンゾウやオオツノジカを狩る移動生活を送り、石を打ち欠いた打製石器を使っていました。群馬県の岩宿遺跡で相沢忠洋が打製石器を発見し、日本にも旧石器時代があったことが証明されました。',
          keyPoints: [
            '氷期：日本が大陸と陸続き',
            '打製石器で狩猟・移動生活',
            '岩宿遺跡（群馬県）：日本の旧石器時代を証明',
          ],
        },
        {
          title: '石器の材料',
          content:
            '旧石器時代の石器の材料には、黒いガラス質の黒曜石や香川県産のサヌカイトが使われました。遠く離れた場所からも黒曜石が見つかることから、すでに広い範囲での物の交換が行われていたと考えられています。',
          keyPoints: [
            '黒曜石：黒いガラス質の石',
            'サヌカイト：香川県の石器材料',
            '遠方の石材 → 交易の証拠',
          ],
        },
        {
          title: '縄文時代の始まり',
          content:
            '約1万数千年前、氷河時代が終わり気候が温暖になると、海面が上昇して日本列島は大陸から切り離されました。森が広がり食料が豊富になったことで、人々はたて穴住居を作って定住生活を始めました。煮炊きに使う縄文土器も作られるようになりました。',
          keyPoints: [
            '気候温暖化 → 海面上昇 → 日本列島誕生',
            'たて穴住居で定住生活',
            '縄文土器：縄目の文様、煮炊きに使用',
          ],
        },
        {
          title: '縄文人の暮らしと文化',
          content:
            '縄文人は狩り・漁・木の実の採集で食料を得ていました。食べ終わった貝殻や骨を捨てた場所が貝塚として残り、当時の生活を知る手がかりになっています。祈りや魔よけのために土偶を作り、死者は屈葬で埋葬されました。青森県の三内丸山遺跡は縄文時代の大規模な集落跡です。',
          keyPoints: [
            '貝塚：食生活を知る手がかり',
            '土偶：祈り・魔よけの人形',
            '三内丸山遺跡（青森県）：大規模集落',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'fc1',
        front: '旧石器時代', explanation: '打製石器を使い移動生活をした最も古い時代。まだ土器は作られていなかった。', back: '打製石器を使い移動しながら生活した最も古い時代は？',
        difficulty: 'basic',
      },
      {
        id: 'fc2',
        front: '氷期（氷河時代）', explanation: '海面が低下して大陸と日本が陸続きになった寒冷な時期。大型動物が渡ってきた。', back: '日本が大陸と陸続きだった寒い時期を何という？',
        difficulty: 'basic',
      },
      {
        id: 'fc3',
        front: 'ナウマンゾウ', explanation: '氷河時代に大陸から渡ってきた大型のゾウ。野尻湖で化石が発見された。', back: '氷河時代に大陸から渡ってきた大型のゾウは？',
        difficulty: 'basic',
      },
      {
        id: 'fc4',
        front: 'オオツノジカ', explanation: '氷河時代に大陸から渡ってきた大きな角を持つシカ。旧石器時代の狩りの対象。', back: '氷河時代に大陸から渡ってきた大きな角を持つシカは？',
        difficulty: 'basic',
      },
      {
        id: 'fc5',
        front: '打製石器', explanation: '石を打ち欠いて作った最も原始的な石器。旧石器時代の代表的な道具。', back: '石を打ち欠いて作った旧石器時代の石器は？',
        difficulty: 'basic',
      },
      {
        id: 'fc6',
        front: '岩宿遺跡', explanation: '相沢忠洋が打製石器を発見し、日本にも旧石器時代があったことを証明した重要な遺跡。', back: '群馬県で打製石器が発見され、日本の旧石器時代を証明した遺跡は？',
        difficulty: 'basic',
      },
      {
        id: 'fc7',
        front: '相沢忠洋', explanation: '行商をしながら独学で考古学を学び、岩宿遺跡で打製石器を発見した人物。', back: '岩宿遺跡で打製石器を発見した人物は？',
        difficulty: 'basic',
      },
      {
        id: 'fc8',
        front: '黒曜石', explanation: '黒いガラス質の石で鋭い刃を作れた。遠方でも出土し、広域交易の証拠となる。', back: '石器の材料として重宝された黒いガラス質の石は？',
        difficulty: 'basic',
      },
      {
        id: 'fc9',
        front: 'サヌカイト', explanation: '香川県で産出された石器の材料。旧石器時代の道具作りに使われた。', back: '旧石器時代の石器の材料となった香川県の石は？',
        difficulty: 'basic',
      },
      {
        id: 'fc10',
        front: '縄文時代', explanation: '約1万数千年前に始まった時代。土器の使用や定住生活が特徴。', back: '約1万数千年前から日本で土器を使い始めた時代は？',
        difficulty: 'basic',
      },
      {
        id: 'fc11',
        front: '縄文土器', explanation: '縄を転がしてつけた文様が特徴。厚手で装飾が豊かな土器。', back: '表面に縄目のような文様がある土器は？',
        difficulty: 'basic',
      },
      {
        id: 'fc12',
        front: 'たて穴住居', explanation: '地面を掘り下げて柱を立て屋根をかけた住居。縄文時代の定住生活を象徴する。', back: '縄文人が地面を掘り柱を立てて造った家は？',
        difficulty: 'basic',
      },
      {
        id: 'fc13',
        front: '貝塚', explanation: '食べた貝殻や骨を捨てた場所。当時の食生活を知る貴重な手がかり。', back: '食べ終わった貝殻や魚の骨を捨てた場所は？',
        difficulty: 'standard',
      },
      {
        id: 'fc14',
        front: '土偶', explanation: '祈りや魔よけのために作られた土製の人形。縄文人の精神世界を示す。', back: '祈りや魔よけのために作られた土の人形は？',
        difficulty: 'standard',
      },
      {
        id: 'fc15',
        front: '三内丸山遺跡', explanation: '青森県にある縄文時代の大規模集落。大型建物やクリの栽培跡が発見された。', back: '青森県にある縄文時代の大規模な集落遺跡は？',
        difficulty: 'standard',
      },
      {
        id: 'fc16',
        front: '屈葬', explanation: '死者の手足を折り曲げて埋葬する方法。霊が再び戻ってこないようにとの意味があったとされる。', back: '死者の手足を折り曲げて埋葬する方法は？',
        difficulty: 'standard',
      },
      {
        id: 'fc17',
        front: '磨製石器', explanation: '表面を磨いて仕上げた石器。打製石器より精巧で、縄文時代に登場した。', back: '縄文時代に磨いて作られた石器は？',
        difficulty: 'standard',
      },
      {
        id: 'fc18',
        front: '野尻湖', explanation: '長野県にある湖。ナウマンゾウの化石が発見された旧石器時代の重要な遺跡。', back: 'ナウマンゾウの化石が発見された長野県の湖は？',
        difficulty: 'standard',
      },
      {
        id: 'fc19',
        front: 'マンモス', explanation: '長い毛に覆われた大型のゾウ。氷河時代に生息し、気候変動で絶滅した。', back: '氷河時代に大陸から渡ってきた長い毛を持つゾウは？',
        difficulty: 'standard',
      },
      {
        id: 'fc21',
        front: '群馬県', explanation: '岩宿遺跡がある県。日本の旧石器時代の存在を証明した重要な場所。', back: '岩宿遺跡がある県は？',
        difficulty: 'standard',
      },
      {
        id: 'fc22',
        front: '青森県', explanation: '三内丸山遺跡がある県。縄文時代の大規模集落が発見された。', back: '三内丸山遺跡がある県は？',
        difficulty: 'standard',
      },
      {
        id: 'fc24',
        front: '釣り針',
        back: '縄文時代に骨や角で作られた魚をとるための道具は？',
        explanation: '骨角器の一種で、骨や角を加工して魚を釣るために使われた。',
        difficulty: 'advanced',
      },
      {
        id: 'fc28',
        front: '狩り・漁・採集',
        back: '縄文人が食料を得ていた3つの方法は？',
        explanation: 'まだ農耕が本格化しておらず、自然の恵みに頼った食料獲得が基本だった。',
        difficulty: 'advanced',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '氷期に日本が大陸と陸続きだった頃、狩りの対象となった動物は？',
          options: ['恐竜', 'ナウマンゾウ', 'シカ', 'ウマ'],
          correctIndex: 1,
          explanation:
            '氷期には大陸と日本が陸続きで、ナウマンゾウやオオツノジカを狩っていました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: '表面に縄目のような文様がある土器は？',
          options: ['弥生土器', '須恵器', '土師器', '縄文土器'],
          correctIndex: 3,
          explanation: '縄文土器は縄を転がしてつけた文様が特徴的な土器です。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: '縄文人が地面を掘り柱を立てて造った家は？',
          options: ['高床倉庫', '武家屋敷', 'たて穴住居', '書院造'],
          correctIndex: 2,
          explanation:
            'たて穴住居は地面を掘り下げて柱を立て、屋根をかけた住居です。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question: '祈りや魔よけのために作られた土の人形は？',
          options: ['土偶', '埴輪', '銅鐸', '勾玉'],
          correctIndex: 0,
          explanation:
            '土偶は縄文時代に祈りや魔よけの目的で作られた土製の人形です。',
          difficulty: 'basic',
        },
        {
          id: 'q5',
          question: '食べ終わった貝殻や魚の骨が捨てられた場所を何という？',
          options: ['貝塚', '古墳', '遺跡', '塚山'],
          correctIndex: 0,
          explanation:
            '貝塚は縄文人が食べた貝殻や骨を捨てた場所で、当時の生活を知る手がかりになります。',
          difficulty: 'basic',
        },
        {
          id: 'q6',
          question:
            '旧石器時代に石器の材料として使われた黒いガラス質の石は？',
          options: ['サヌカイト', '大理石', '黒曜石', '花崗岩'],
          correctIndex: 2,
          explanation:
            '黒曜石は旧石器時代に石器の材料として重宝された黒いガラス質の石です。',
          difficulty: 'basic',
        },
        {
          id: 'q7',
          question:
            '群馬県で打製石器が発見され、日本の旧石器時代を証明した遺跡は？',
          options: ['三内丸山遺跡', '登呂遺跡', '吉野ヶ里遺跡', '岩宿遺跡'],
          correctIndex: 3,
          explanation:
            '岩宿遺跡は相沢忠洋が打製石器を発見し、日本に旧石器時代があったことを証明しました。',
          difficulty: 'basic',
        },
        {
          id: 'q8',
          question: '青森県にある縄文時代の大規模な集落遺跡は？',
          options: [
            '吉野ヶ里遺跡',
            '三内丸山遺跡',
            '岩宿遺跡',
            '登呂遺跡',
          ],
          correctIndex: 1,
          explanation:
            '三内丸山遺跡は青森県にある縄文時代の大規模な集落遺跡で、大型建物やクリの栽培跡が発見されました。',
          difficulty: 'basic',
        },
        {
          id: 'q9',
          question: '旧石器時代の人々が石を打ち欠いて作った石器は？',
          options: ['磨製石器', '石包丁', '打製石器', '石斧'],
          correctIndex: 2,
          explanation:
            '打製石器は石を打ち欠いて作った石器で、旧石器時代に使われました。',
          difficulty: 'basic',
        },
        {
          id: 'q11',
          question: '岩宿遺跡を発見した人物はだれか？',
          options: ['相沢忠洋', '本居宣長', '杉田玄白', '伊能忠敬'],
          correctIndex: 0,
          explanation: '相沢忠洋が群馬県の岩宿遺跡で打製石器を発見しました。',
          difficulty: 'standard',
        },
        {
          id: 'q12',
          question: '旧石器時代に土器は使われていたか？',
          options: ['使われていた', '使われていなかった', '金属器が使われていた', '磁器が使われていた'],
          correctIndex: 1,
          explanation: '旧石器時代にはまだ土器を作る技術がなく、使われていませんでした。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question: '香川県特産の石器の材料は何か？',
          options: ['黒曜石', 'サヌカイト', 'ヒスイ', '花崗岩'],
          correctIndex: 1,
          explanation: 'サヌカイトは香川県特産の石で、旧石器時代に石器の材料として使われました。',
          difficulty: 'standard',
        },
        {
          id: 'q14',
          question: '縄文時代に死者を埋葬する際の方法は？',
          options: ['伸展葬', '屈葬', '火葬', '水葬'],
          correctIndex: 1,
          explanation: '縄文時代には死者の手足を折り曲げて埋葬する屈葬が行われました。',
          difficulty: 'standard',
        },
        {
          id: 'q15',
          question: 'ナウマンゾウの化石が発見された長野県の湖は？',
          options: ['諏訪湖', '野尻湖', '琵琶湖', '浜名湖'],
          correctIndex: 1,
          explanation: '野尻湖（長野県）でナウマンゾウの化石が発見されました。',
          difficulty: 'standard',
        },
        {
          id: 'q16',
          question: '縄文土器と弥生土器を比べたとき、厚みがあり装飾が豊かなのはどちらか？',
          options: ['弥生土器', '縄文土器', '須恵器', '土師器'],
          correctIndex: 1,
          explanation: '縄文土器は厚みがあり装飾が豊かで、弥生土器は薄手でシンプルです。',
          difficulty: 'standard',
        },
        {
          id: 'q17',
          question: '気候が温暖になると海面はどうなったか？',
          options: [
            '海面が上昇して日本列島が大陸から離れた',
            '海面が低下して大陸とさらにつながった',
            '海面は変わらず島の形だけが変わった',
            '海水の温度だけが変わり地形は変わらなかった',
          ],
          correctIndex: 0,
          explanation: '気候が温暖になると海面が上昇し、日本列島は大陸から切り離されました。',
          difficulty: 'standard',
        },
        {
          id: 'q18',
          question: '黒曜石が遠く離れた場所でも発見されることから何がわかるか？',
          options: [
            '遠方との交易が行われていたこと',
            '大きな地震が頻繁にあったこと',
            '人々が広い範囲を移動していたこと',
            '黒曜石がどこでも採れたこと',
          ],
          correctIndex: 0,
          explanation: '遠方の黒曜石が見つかることから、すでに広い範囲での物の交換（交易）が行われていたとわかります。',
          difficulty: 'standard',
        },
        {
          id: 'q21',
          question: '氷河時代に日本が大陸と陸続きだった理由は？',
          options: [
            '人工的に橋が架けられたから',
            '海が凍っていたから',
            '大陸が移動してきたから',
            '海面が低下していたから',
          ],
          correctIndex: 3,
          explanation: '氷河時代は海面が低下し、大陸と日本がつながった場所がありました。',
          difficulty: 'standard',
        },
        {
          id: 'q22',
          question: '貝塚が海岸や河川の近くで多く見つかる理由は？',
          options: [
            '人々が貝や魚を食べていたから',
            '貝殻を建材にしたから',
            '海の神を祀っていたから',
            '塩を作っていたから',
          ],
          correctIndex: 0,
          explanation: '縄文人は海岸や河川の近くで貝や魚をとって食べ、その残りを貝塚に捨てました。',
          difficulty: 'standard',
        },
        {
          id: 'q23',
          question: '縄文時代の平均的な集落の規模は？',
          options: ['数百人程度', '数千人程度', '数十人程度', '数万人程度'],
          correctIndex: 2,
          explanation: '縄文時代の集落は数十人程度の小さな規模でした。',
          difficulty: 'advanced',
        },
        {
          id: 'q24',
          question: '旧石器時代から縄文時代への大きな環境変化は？',
          options: [
            '大規模な火山の噴火で地形が大きく変わった',
            '大陸が沈没して海に沈んでしまった',
            '巨大な隕石が衝突して環境が激変した',
            '氷河時代が終わり気候が温暖になった',
          ],
          correctIndex: 3,
          explanation: '氷河時代が終わり気候が温暖になったことが、旧石器時代から縄文時代への転換点でした。',
          difficulty: 'advanced',
        },
        {
          id: 'q25',
          question: '縄文人が魚や貝をとるために使った骨角器の例は？',
          options: ['打製石器', '磨製石器', '釣り針', '銅鐸'],
          correctIndex: 2,
          explanation: '縄文時代には骨や角で作った釣り針で魚をとっていました。',
          difficulty: 'advanced',
        },
        {
          id: 'q26',
          question: '旧石器時代の遺跡から土器が出土しない理由は？',
          options: [
            '土器が壊れやすかったから',
            '土器を埋めなかったから',
            '土器を使う必要がなかったから',
            'まだ土器を作る技術がなかったから',
          ],
          correctIndex: 3,
          explanation: '旧石器時代にはまだ土器を作る技術がなかったため、遺跡から土器は出土しません。',
          difficulty: 'advanced',
        },
        {
          id: 'q27',
          question: '岩宿遺跡は何県にあるか？',
          options: ['青森県', '静岡県', '佐賀県', '群馬県'],
          correctIndex: 3,
          explanation: '岩宿遺跡は群馬県にあり、日本の旧石器時代を証明した重要な遺跡です。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'jomon-era',
  },
};

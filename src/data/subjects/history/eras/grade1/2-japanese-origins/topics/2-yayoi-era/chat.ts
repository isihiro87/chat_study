import type { HistoryChat } from '../../../../../../../history-chat/types';

export const yayoiEraChat: HistoryChat = {
  id: 'yayoi-era',
  icon: '🌾',
  title: '弥生時代',
  subtitle: '〜紀元前4世紀〜 稲作の伝来とくにの誕生',
  characters: [
    {
      id: 'himiko',
      name: '卑弥呼',
      emoji: '👸',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
    },
    {
      id: 'farmer',
      name: '農民',
      emoji: '👨‍🌾',
      colorFrom: '#15803d',
      colorTo: '#4ade80',
    },
  ],
  content: [
    {
      type: 'date',
      text: '紀元前4世紀頃〜',
    },
    {
      type: 'narrator',
      text: '大陸から<strong>稲作</strong>が九州北部に伝わり、<strong>弥生時代</strong>が始まりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'farmer',
      text: '稲作のおかげで食べ物が安定した！収穫した稲は<strong>高床倉庫</strong>に保管するぞ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'farmer',
      text: '<strong>鉄器</strong>で農具を作り、<strong>銅鐸</strong>は祭りの宝物として大切にしているんだ',
    },
    {
      type: 'quiz',
      question: '収穫した稲を保管するために建てられた倉庫は？',
      options: [
        { letter: 'A', text: '高床倉庫', correct: true },
        { letter: 'B', text: 'たて穴住居', correct: false },
        { letter: 'C', text: '正倉院', correct: false },
        { letter: 'D', text: '校倉造', correct: false },
      ],
      explanation: '<strong>正解はA「高床倉庫」</strong>です。床を高くして湿気やねずみから稲を守りました。',
    },
    {
      type: 'narrator',
      text: '3世紀頃、<strong>卑弥呼</strong>が<strong>邪馬台国</strong>を中心に30あまりの国をまとめました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'himiko',
      text: '魏の皇帝に朝貢し、<strong>親魏倭王</strong>の称号をいただいた',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'farmer',
      text: '奴国の王も漢の皇帝から<strong>金印</strong>をもらったそうですね！',
    },
    {
      type: 'quiz',
      question: '3世紀ごろ、30あまりの国をまとめた女王は？',
      options: [
        { letter: 'A', text: '卑弥呼', correct: true },
        { letter: 'B', text: '推古天皇', correct: false },
        { letter: 'C', text: '持統天皇', correct: false },
        { letter: 'D', text: '額田王', correct: false },
      ],
      explanation: '<strong>正解はA「卑弥呼」</strong>です。邪馬台国の女王で、まじないの力で国々をまとめました。',
    },
    {
      type: 'end',
      points: [
        '<strong>稲作</strong>が九州北部から全国へ',
        '<strong>高床倉庫</strong>で稲を保管、<strong>鉄器</strong>と<strong>銅鐸</strong>',
        '<strong>卑弥呼</strong>：<strong>邪馬台国</strong>の女王 → <strong>親魏倭王</strong>',
      ],
    },
  ],
};

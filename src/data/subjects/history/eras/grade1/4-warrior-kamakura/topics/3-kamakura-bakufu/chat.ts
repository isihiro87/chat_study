import type { HistoryChat } from '../../../../../../../history-chat/types';

export const kamakuraBakufuChat: HistoryChat = {
  id: 'kamakura-bakufu',
  icon: '🏯',
  title: '鎌倉幕府の成立',
  subtitle: '〜1185年〜 源頼朝と御恩・奉公',
  characters: [
    {
      id: 'yoritomo',
      name: '源頼朝',
      emoji: '🏯',
      colorFrom: '#1e3a5f',
      colorTo: '#3b82f6',
    },
    {
      id: 'gokenin',
      name: '御家人',
      emoji: '⚔️',
      colorFrom: '#92400e',
      colorTo: '#d97706',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1185年〜',
    },
    {
      type: 'narrator',
      text: '平氏を滅ぼした<strong>源頼朝</strong>は、鎌倉を拠点に武士による新しい政治のしくみを作りました。<strong>鎌倉幕府</strong>の誕生です。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'yoritomo',
      text: '私は全国に<strong>守護</strong>と<strong>地頭</strong>を置いた。守護は国ごとに軍事・警察を担当し、地頭は荘園・公領の管理や年貢の徴収を行う',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'gokenin',
      text: '我々<strong>御家人</strong>は将軍に忠誠を誓い、戦のときに駆けつける<strong>奉公</strong>をします。その見返りとして将軍から領地をいただく<strong>御恩</strong>を受けるのです',
    },
    {
      type: 'quiz',
      question: '鎌倉幕府で、荘園・公領の管理や年貢の徴収を行った役職は？',
      options: [
        { letter: 'A', text: '地頭', correct: true },
        { letter: 'B', text: '守護', correct: false },
        { letter: 'C', text: '執権', correct: false },
        { letter: 'D', text: '関白', correct: false },
      ],
      explanation: '<strong>正解はA「地頭」</strong>です。地頭は荘園・公領に置かれ、土地の管理や年貢の徴収を行いました。守護は国ごとに置かれ、軍事・警察を担当しました。',
    },
    {
      type: 'narrator',
      text: '頼朝の死後、妻の北条政子の一族である<strong>北条氏</strong>が<strong>執権</strong>として幕府の実権を握りました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'yoritomo',
      text: '1221年、朝廷の後鳥羽上皇が幕府を倒そうと<strong>承久の乱</strong>を起こしたが、北条政子の訴えで御家人たちが団結し、幕府が勝利した',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'gokenin',
      text: '承久の乱の後、北条泰時が武士の法律である<strong>御成敗式目</strong>（貞永式目）を定めました。裁判の基準が明確になりました',
    },
    {
      type: 'quiz',
      question: '北条泰時が定めた武士の法律は？',
      options: [
        { letter: 'A', text: '御成敗式目', correct: true },
        { letter: 'B', text: '大宝律令', correct: false },
        { letter: 'C', text: '十七条の憲法', correct: false },
        { letter: 'D', text: '武家諸法度', correct: false },
      ],
      explanation: '<strong>正解はA「御成敗式目」</strong>です。1232年に北条泰時が制定した武士のための法律で、裁判の基準を示しました。貞永式目とも呼ばれます。',
    },
    {
      type: 'end',
      points: [
        '<strong>鎌倉幕府</strong>：源頼朝が鎌倉に開いた武士の政権',
        '<strong>守護</strong>（軍事・警察）・<strong>地頭</strong>（土地管理・年貢徴収）を設置',
        '<strong>御恩と奉公</strong>：将軍と<strong>御家人</strong>の主従関係',
        '<strong>執権</strong>：<strong>北条氏</strong>が幕府の実権を握る。<strong>承久の乱</strong>で朝廷に勝利',
        '<strong>御成敗式目</strong>：北条泰時が定めた武士の法律',
      ],
    },
  ],
};

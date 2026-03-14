import type { HistoryChat } from '../history-chat/types';
// Grade 1
import { linearEquationsChat } from '../subjects/math/units/grade1/topics/1-linear-equations/chat';
// Grade 2: 式の計算
import { monomialPolynomialChat } from '../subjects/math/units/grade2/1-expressions/topics/1-monomial-polynomial/chat';
import { polynomialAddSubChat } from '../subjects/math/units/grade2/1-expressions/topics/2-polynomial-add-sub/chat';
import { monomialMulDivChat } from '../subjects/math/units/grade2/1-expressions/topics/3-monomial-mul-div/chat';
import { literalExpressionsChat } from '../subjects/math/units/grade2/1-expressions/topics/4-literal-expressions/chat';
// Grade 2: 連立方程式
import { simulEqBasicsChat } from '../subjects/math/units/grade2/2-simultaneous-equations/topics/1-basics/chat';
import { eliminationChat } from '../subjects/math/units/grade2/2-simultaneous-equations/topics/2-elimination/chat';
import { substitutionChat } from '../subjects/math/units/grade2/2-simultaneous-equations/topics/3-substitution/chat';
import { variousSimulEqChat } from '../subjects/math/units/grade2/2-simultaneous-equations/topics/4-various/chat';
import { simulEqAppsChat } from '../subjects/math/units/grade2/2-simultaneous-equations/topics/5-applications/chat';
// Grade 2: 一次関数
import { linearFuncMeaningChat } from '../subjects/math/units/grade2/3-linear-functions/topics/1-meaning/chat';
import { slopeInterceptChat } from '../subjects/math/units/grade2/3-linear-functions/topics/2-slope-intercept/chat';
import { findLinearEquationChat } from '../subjects/math/units/grade2/3-linear-functions/topics/3-find-equation/chat';
import { equationsAndGraphsChat } from '../subjects/math/units/grade2/3-linear-functions/topics/4-equations-and-graphs/chat';
// Grade 3: 式の展開と因数分解
import { expansionBasicsChat } from '../subjects/math/units/grade3/1-expansion-factoring/topics/1-expansion-basics/chat';
import { expansionFormulasChat } from '../subjects/math/units/grade3/1-expansion-factoring/topics/2-expansion-formulas/chat';
import { factoringBasicsChat } from '../subjects/math/units/grade3/1-expansion-factoring/topics/3-factoring-basics/chat';
import { factoringFormulasChat } from '../subjects/math/units/grade3/1-expansion-factoring/topics/4-factoring-formulas/chat';
// Grade 3: 平方根
import { sqrtMeaningChat } from '../subjects/math/units/grade3/2-square-roots/topics/1-meaning/chat';
import { sqrtMulDivChat } from '../subjects/math/units/grade3/2-square-roots/topics/2-mul-div/chat';
import { rationalizationChat } from '../subjects/math/units/grade3/2-square-roots/topics/3-rationalization/chat';
import { sqrtAddExpandChat } from '../subjects/math/units/grade3/2-square-roots/topics/4-add-expand/chat';
// Grade 3: 二次方程式
import { quadEqBasicsChat } from '../subjects/math/units/grade3/3-quadratic-equations/topics/1-basics/chat';
import { quadEqFactoringChat } from '../subjects/math/units/grade3/3-quadratic-equations/topics/2-factoring/chat';
import { quadFormulaChat } from '../subjects/math/units/grade3/3-quadratic-equations/topics/3-formula/chat';
import { quadEqAppsChat } from '../subjects/math/units/grade3/3-quadratic-equations/topics/4-applications/chat';
// Grade 3: 関数y=ax²
import { quadFuncParabolaChat } from '../subjects/math/units/grade3/4-quadratic-functions/topics/1-parabola/chat';
import { quadFuncRangeChat } from '../subjects/math/units/grade3/4-quadratic-functions/topics/2-range/chat';
import { rateOfChangeChat } from '../subjects/math/units/grade3/4-quadratic-functions/topics/3-rate-of-change/chat';
import { quadFuncRealWorldChat } from '../subjects/math/units/grade3/4-quadratic-functions/topics/4-real-world/chat';

const chatMap: Record<string, HistoryChat> = {
  // Grade 1
  [linearEquationsChat.id]: linearEquationsChat,
  // Grade 2: 式の計算
  [monomialPolynomialChat.id]: monomialPolynomialChat,
  [polynomialAddSubChat.id]: polynomialAddSubChat,
  [monomialMulDivChat.id]: monomialMulDivChat,
  [literalExpressionsChat.id]: literalExpressionsChat,
  // Grade 2: 連立方程式
  [simulEqBasicsChat.id]: simulEqBasicsChat,
  [eliminationChat.id]: eliminationChat,
  [substitutionChat.id]: substitutionChat,
  [variousSimulEqChat.id]: variousSimulEqChat,
  [simulEqAppsChat.id]: simulEqAppsChat,
  // Grade 2: 一次関数
  [linearFuncMeaningChat.id]: linearFuncMeaningChat,
  [slopeInterceptChat.id]: slopeInterceptChat,
  [findLinearEquationChat.id]: findLinearEquationChat,
  [equationsAndGraphsChat.id]: equationsAndGraphsChat,
  // Grade 3: 式の展開と因数分解
  [expansionBasicsChat.id]: expansionBasicsChat,
  [expansionFormulasChat.id]: expansionFormulasChat,
  [factoringBasicsChat.id]: factoringBasicsChat,
  [factoringFormulasChat.id]: factoringFormulasChat,
  // Grade 3: 平方根
  [sqrtMeaningChat.id]: sqrtMeaningChat,
  [sqrtMulDivChat.id]: sqrtMulDivChat,
  [rationalizationChat.id]: rationalizationChat,
  [sqrtAddExpandChat.id]: sqrtAddExpandChat,
  // Grade 3: 二次方程式
  [quadEqBasicsChat.id]: quadEqBasicsChat,
  [quadEqFactoringChat.id]: quadEqFactoringChat,
  [quadFormulaChat.id]: quadFormulaChat,
  [quadEqAppsChat.id]: quadEqAppsChat,
  // Grade 3: 関数y=ax²
  [quadFuncParabolaChat.id]: quadFuncParabolaChat,
  [quadFuncRangeChat.id]: quadFuncRangeChat,
  [rateOfChangeChat.id]: rateOfChangeChat,
  [quadFuncRealWorldChat.id]: quadFuncRealWorldChat,
};

export function getMathChat(chatId: string): HistoryChat | undefined {
  return chatMap[chatId];
}

export function getAllMathChats(): HistoryChat[] {
  return Object.values(chatMap);
}

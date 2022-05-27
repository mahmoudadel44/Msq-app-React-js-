import questions from "../../Data/Data";
import { NEXT_QUESTION } from "../types/types";

export const shuffleAnswers = (question) => {
  if (!question) {
    return [];
  }
  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];
  return unshuffledAnswers
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};
const initialState = {
  questions,
  currentQuestionIndex: 0,
  displayResult: false,
  correctAnswersCounter: 0,
  answers: shuffleAnswers(questions[0]),
};
export const ExamReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_QUESTION:
      const displayResult =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = displayResult
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      return {
        ...state,
        currentQuestionIndex,
        displayResult,
      };
    default:
      return state;
  }
};

import questions from "../../Data/Data";
import * as types from "../types/types";

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
  currentAnswer: "",
  isLoggedin: false,
};
export const ExamReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ALLOWED_LOGIN:
      return {
        ...state,
        isLoggedin: !state.isLoggedin,
      };

    case types.SELECT_ANSWER:
      const correctAnswersCounter =
        action.payload === questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswersCounter + 1
          : state.correctAnswersCounter;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCounter,
      };

    case types.NEXT_QUESTION:
      const displayResult =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = displayResult
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;

      const answers = displayResult
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);
      return {
        ...state,
        currentQuestionIndex,
        displayResult,
        answers,
        currentAnswer: "",
      };
    default:
      return state;
  }
};

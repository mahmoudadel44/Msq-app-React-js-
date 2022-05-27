import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NEXT_QUESTION } from "../redux/types/types";
//Css
import "../styles/QuestionComponent.scss";

const QuestionComponent = () => {
  const dispatch = useDispatch();
  const Questions = useSelector((state) => state?.ExamData?.questions);
  const currentQuestionIndex = useSelector(
    (state) => state?.ExamData?.currentQuestionIndex
  );
  //   console.log("exam data", examData);
  const currentQuestion = Questions[currentQuestionIndex];
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div
        className="next-button"
        onClick={() => dispatch({ type: NEXT_QUESTION })}
      >
        Next Question
      </div>
    </div>
  );
};

export default QuestionComponent;

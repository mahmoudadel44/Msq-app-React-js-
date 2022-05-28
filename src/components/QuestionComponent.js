import React from "react";
import { useSelector } from "react-redux";

//Css
import "../styles/QuestionComponent.scss";

const QuestionComponent = () => {
  const Questions = useSelector((state) => state?.ExamData?.questions);
  const currentQuestionIndex = useSelector(
    (state) => state?.ExamData?.currentQuestionIndex
  );
  const currentQuestion = Questions[currentQuestionIndex];
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
    </div>
  );
};

export default QuestionComponent;

import React from "react";
import { useSelector } from "react-redux";

//Css
import "../styles/ExamComponent.scss";

const ExamComponent = () => {
  const Questions = useSelector((state) => state?.ExamData?.questions);
  const currentQuestionIndex = useSelector(
    (state) => state?.ExamData?.currentQuestionIndex
  );
  return (
    <div className="exam">
      <div className="score">
        Question {currentQuestionIndex + 1} / {Questions.length}
      </div>
    </div>
  );
};

export default ExamComponent;

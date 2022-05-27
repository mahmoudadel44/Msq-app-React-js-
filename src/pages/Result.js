import React from "react";
import { useSelector } from "react-redux";

//Css
import "../styles/Result.scss";

const Result = () => {
  const correctAnswersCounter = useSelector(
    (state) => state?.ExamData?.correctAnswersCounter
  );
  const Questions = useSelector((state) => state?.ExamData?.questions);

  return (
    <div className="results mt-5 w-50 m-auto">
      <div className="congratulations mt-5">Congratulations!</div>
      <div className="results-info">
        <div>You have completed the quiz.</div>
        <div>
          You've got {correctAnswersCounter} of &nbsp;
          {Questions.length} right.
        </div>
      </div>
    </div>
  );
};

export default Result;

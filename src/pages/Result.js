import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

//Css
import "../styles/Result.scss";

const Result = () => {
  const correctAnswersCounter = useSelector(
    (state) => state?.ExamData?.correctAnswersCounter
  );
  const Questions = useSelector((state) => state?.ExamData?.questions);
  const isLoggedin = useSelector((state) => state?.ExamData?.isLoggedin);

  return (
    <>
      {isLoggedin ? (
        <div className="results mt-5 w-50 m-auto">
          <div className="congratulations mt-5">Congratulations!</div>
          <div className="resultsInfo">
            <div>You have completed the quiz.</div>
            <div>
              You're Degree : &nbsp;
              {Math.floor((correctAnswersCounter / Questions.length) * 100)}%
            </div>
          </div>
        </div>
      ) : (
        <Navigate replace to="/login" />
      )}
    </>
  );
};

export default Result;

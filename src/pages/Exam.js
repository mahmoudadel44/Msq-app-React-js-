import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { NEXT_QUESTION } from "../redux/types/types";

//Components
import ExamComponent from "../components/ExamComponent";
import QuestionComponent from "../components/QuestionComponent";
import AnswersComponent from "../components/AnswersComponent";
import Result from "./Result";

//Css
import "../styles/Exam.scss";

const Exam = () => {
  const dispatch = useDispatch();
  const displayResult = useSelector((state) => state?.ExamData?.displayResult);
  const isLoggedin = useSelector((state) => state?.ExamData?.isLoggedin);

  return (
    <>
      {isLoggedin ? (
        <div div className="Exam">
          <div className="container">
            <h1 className="text-center">Take Your Quiz</h1>
            {displayResult ? (
              <Result />
            ) : (
              <>
                <ExamComponent />
                <QuestionComponent />
                <AnswersComponent />
                <div
                  className="nextBtn"
                  onClick={() => dispatch({ type: NEXT_QUESTION })}
                >
                  Next Question
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <Navigate replace to="/login" />
      )}
    </>
  );
};

export default Exam;

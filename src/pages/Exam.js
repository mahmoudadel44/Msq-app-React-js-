import React from "react";
import { useSelector } from "react-redux";

//Components
import ExamComponent from "../components/ExamComponent";
import QuestionComponent from "../components/QuestionComponent";

//Components
import Result from "./Result";
//Css
import "../styles/Exam.scss";

const Exam = () => {
  const displayResult = useSelector((state) => state?.ExamData?.displayResult);

  return (
    <>
      {displayResult ? (
        <Result />
      ) : (
        <>
          <ExamComponent />
          <QuestionComponent />
          
        </>
      )}
    </>
  );
};

export default Exam;

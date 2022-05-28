import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SELECT_ANSWER } from "../redux/types/types";

//Component
import Answer from "./Answer";

//Css
import "../styles/AnswersComponent.scss";

const AnswersComponent = () => {
  const dispatch = useDispatch();

  const Answers = useSelector((state) => state?.ExamData?.answers);
  const currentAnswer = useSelector((state) => state?.ExamData?.currentAnswer);
  const Questions = useSelector((state) => state?.ExamData?.questions);
  const currentQuestionIndex = useSelector(
    (state) => state?.ExamData?.currentQuestionIndex
  );
  const currentQuestion = Questions[currentQuestionIndex];

  return (
    <div className="answers mt-5">
      {Answers &&
        Answers.map((answer, index) => (
          <div key={index}>
            <Answer
              answer={answer}
              currentAnswer={currentAnswer}
              correctAnswer={currentQuestion.correctAnswer}
              key={index}
              index={index}
              onSelectAnswer={(answer) =>
                dispatch({ type: SELECT_ANSWER, payload: answer })
              }
            />
          </div>
        ))}
    </div>
  );
};

export default AnswersComponent;

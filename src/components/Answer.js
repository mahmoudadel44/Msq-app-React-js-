import React from "react";

//Css
import "../styles/Answer.scss";

const Answer = ({
  answer,
  index,
  onSelectAnswer,
  currentAnswer,
  correctAnswer,
}) => {
  const letter = ["A", "B", "C", "D"];
  const isCorrectAnswer = currentAnswer && answer === correctAnswer;
  const isWrongAnswer =
    currentAnswer === answer && currentAnswer !== correctAnswer;
  const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
  const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
  const disabledClass = currentAnswer ? "disabled-answer" : "";
  return (
    <div
      className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
      onClick={() => onSelectAnswer(answer)}
    >
      <div className="answer-letter">{letter[index]}</div>
      <div className="answer-text">{answer}</div>
    </div>
  );
};

export default Answer;

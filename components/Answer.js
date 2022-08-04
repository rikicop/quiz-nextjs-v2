import React from "react";

const Answer = ({
  answerText,
  index,
  onSelectAnswer,
  currentAnswer,
  correctAnswer,
}) => {
  //console.log("Index??: ", index);
  const letterMapping = ["A", "B", "C", "D"];
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer;
  const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
  const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
  const disabledClass = currentAnswer ? "disabled-answer" : "";
  const numberLetterAnswer = answerText.length
  console.log("numberLetterAnswer: ", numberLetterAnswer);
  return (
    <div
      className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
      onClick={() => onSelectAnswer(answerText)}
    >
      <div className="answer-letter">{letterMapping[index]}</div>
      <div className="answer-text">
        {/* Esta bien pero debes hacerlo responsive ahora */}
        <p style={{fontSize:`${numberLetterAnswer <= 35 ? "44px":"39px" }`}}>{answerText}</p>
      </div>
    </div>
  );
};

export default Answer;

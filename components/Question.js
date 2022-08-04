import React, { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import Answer from "./Answer";
import NoSsr from "./NoSsr";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        <NoSsr>
          {quizState.answers.map((answer, index) => (
            <Answer
              answerText={answer}
              key={index}
              index={index}
              currentAnswer={quizState.currentAnswer}
              correctAnswer={currentQuestion.correctAnswer}
              onSelectAnswer={(answerText) => {
                dispatch({ type: "SELECT_ANSWER", payload: answerText });
                console.log("AnswerText: ", answerText);
              }}
            />
          ))}
        </NoSsr>
      </div>
    </div>
  );
};

export default Question;

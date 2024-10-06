import React from "react";
import { nanoid } from "nanoid";

import "./index.css";

import Question from "./Question";

export default function App() {
  const [checked, setChecked] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);
  const [correctLength, setCorrectLength] = React.useState(0);
  const [quizStarted, setQuizSTarted] = React.useState(false);

  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=19&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then(({ results }) => {
        const questions = results.map((question) => {
          const questionsData = {
            id: nanoid(),
            question: question.question,
            answers: question.incorrect_answers.map((answer) => ({
              answer: answer,
              isSelected: false,
              isCorrect: false,
            })),
          };

          const randomIndex = Math.floor(
            Math.random() * (questionsData.answers.length + 2)
          );

          questionsData.answers.splice(randomIndex, 0, {
            answer: question.correct_answer,
            isSelected: false,
            isCorrect: true,
          });

          return questionsData;
        });

        setQuestions(questions);
      });
  }, []);

  function restartGame() {
    window.location.reload();
  }

  function handleCheckResults() {
    setChecked(true);
    let correctAnswersCount = 0;
    for (const question of questions) {
      for (const answer of question.answers) {
        if (answer.isSelected && answer.isCorrect) {
          console.log(`${answer.isSelected} ${answer.isCorrect}`);
          correctAnswersCount++;
        }
      }
    }
    setCorrectLength(correctAnswersCount);
  }

  function handleClickAnswer(questionIndex, answerIndex) {
    setQuestions((oldQuestions) =>
      oldQuestions.map((oldQuestion) => {
        return oldQuestion.id === questionIndex
          ? {
              ...oldQuestion,
              answers: oldQuestion.answers.map((answer, index) => {
                return index === answerIndex
                  ? { ...answer, isSelected: true }
                  : { ...answer, isSelected: false };
              }),
            }
          : oldQuestion;
      })
    );
  }

  return (
    <main>
      {quizStarted ? (
        <div className="container">
          <div className="quiz-container">
            {questions.map((question, index) => (
              <Question
                key={index}
                checked={checked}
                question={question}
                handleClickAnswer={handleClickAnswer}
              />
            ))}
          </div>
          {checked ? (
            <div>
              <h3 style={{ marginTop: "20px" }}>
                You scored {correctLength}/{questions.length} correct answers
              </h3>
              <button
                className="submit-button"
                style={{ marginTop: "20px" }}
                onClick={restartGame}
              >
                Play again
              </button>
            </div>
          ) : (
            <button
              className="submit-button"
              style={{ marginTop: "20px" }}
              onClick={handleCheckResults}
            >
              Check answers
            </button>
          )}
        </div>
      ) : (
        <div className="container">
          <h1>Quiz</h1>
          <p>Simple math quiz!</p>
          <button onClick={() => setQuizSTarted(true)}>Start quiz</button>
        </div>
      )}
    </main>
  );
}

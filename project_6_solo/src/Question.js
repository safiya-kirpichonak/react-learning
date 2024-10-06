export default function Question(props) {
  return (
    <div className="question">
      <h2>{props.question.question}</h2>
      <div className="options">
        {props.question.answers.map((answer, index) => {
          let className = answer.isSelected ? "button--clicked" : "";

          if (props.checked) {
            if (answer.isCorrect) className = "button--green";
            if (!answer.isCorrect && answer.isSelected)
              className = "button--red";
          }

          return (
            <button
              key={index}
              className={className}
              onClick={() => props.handleClickAnswer(props.question.id, index)}
            >
              {answer.answer}
            </button>
          );
        })}
      </div>
    </div>
  );
}

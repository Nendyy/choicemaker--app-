import { useContext } from "react";
import { StateContext } from "../context";
import Question from "../Components/Question";



const Result = () => {
  const { state } = useContext(StateContext);

  const { question, options } = state.question;
  const rand = Math.floor(Math.random() * options.length);

  return (
    <>
      <div>
        <p>{question}</p>
      </div>
      <div>
        {options.map((_, index) => (
          <Question
            key={index}
            index={index}
            question={options[index].value}
            isAnswer={index === rand}
          />
        ))}
      </div>
    </>
  );
};

export default Result;

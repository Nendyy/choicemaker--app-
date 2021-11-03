import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { StateContext } from "../context";
import Question from "../Components/Question";
import Button from "../Components/Button";

const Result = () => {
  const { state } = useContext(StateContext);
  const history = useHistory();

  const { question, options } = state.question;
  const rand = Math.floor(Math.random() * options.length);

  return (
    <main>
      <div className="content">
        <div className="question">
          <p>{question}</p>
        </div>
        <div className="answer">
          {options.map((_, index) => (
            <Question
              key={index}
              index={index}
              question={options[index].value}
              isAnswer={index === rand}
            />
          ))}
        </div>
        <div className="button-group">
          <Button
            title="go back"
            handleClick={() => {
              history.push("/");
            }}
          />
          <Button
            handleClick={() => {
              history.push("/questions");
            }}
            title="questions"
          />
        </div>
      </div>
    </main>
  );
};

export default Result;

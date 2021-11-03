import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { StateContext } from "../context";
import ResultContainer from "../Components/ResultContainer";
import Button from "../Components/Button";

const Questions = () => {
  const { state } = useContext(StateContext);
  const history = useHistory();

  return (
    <main>
      <div className="content">
        <h1>Asked questions</h1>
        <div className="all-questions">
          {state.questions.map((_, index) => {
            const val = state.questions[index];
            return (
              <ResultContainer
                key={index}
                question={val.question}
                occurrence={val.occurrence}
              />
            );
          })}
        </div>
        <div className="button-group">
          <Button
            title="go back"
            handleClick={() => {
              history.push("/");
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default Questions;

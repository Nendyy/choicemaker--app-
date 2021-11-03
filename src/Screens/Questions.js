import { useContext } from "react";
import { StateContext } from "../context";
import ResultContainer from "../Components/ResultContainer";

const Questions = () => {
  const { state } = useContext(StateContext);

  return (
    <>
      <h1>Asked questions</h1>
      <nav showPointer />
      <div>
        {state.questions.map((_, index) => {
          const val = state.questions[index];
          return (
            <ResultContainer
              key={index}
              question={val.question}
              count={val.occurrence}
            />
          );
        })}
      </div>
    </>
  );
};

export default Questions;

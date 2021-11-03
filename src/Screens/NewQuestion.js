import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import QuestionContainer from "../Components/QuestionContainer";
import OptionsInputContainer from "../Components/OptionsInputContainer";
import Button from "../Components/Button";
import { StateContext } from "../context";


const NewQuestion = () => {
  const history = useHistory();
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const { setState, state } = useContext(StateContext);

  const handleIncludeOption = () => {
    const latestOption = [...options][options.length - 1];
    if (options.length === 0 || latestOption.value !== "") {
      setOptions([...options, { value: "" }]);
      return;
    }
  };

  const handleViewResult = () => {
    if (question.length > 0 && options.length > 0) {
      const questions = [...state.questions];

      let _question = {
        question,
        options,
      };

      const index = questions.findIndex((val) => val.question === question);

      if (index > -1) {
        _question[index].occurrence += 1;
      } else {
        _question.occurrence = 1;
        questions.push(_question);
      }

      setState({
        questions,
        question: _question,
      });

      history.push("/view_result");
    }
  };

  return (
    <main>
      <div className='content'>
        <QuestionContainer question={question} setQuestion={setQuestion} />
        <OptionsInputContainer options={options} setOptions={setOptions} />
        <div>
          <Button title="include option" handleClick={handleIncludeOption} />
          <Button handleClick={handleViewResult} title="View Result" />
        </div>
      </div>
    </main>
  );
};

export default NewQuestion;

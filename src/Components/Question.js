import { MdDone } from "react-icons/md";

const Question = (props) => {
  return (
    <div>
      <span>{props.question}</span>
      <div className={`checkbox ${props.isAnswer && "isAnswer"}`}>
        {props.isAnswer && <MdDone />}
      </div>
    </div>
  );
};

export default Question;

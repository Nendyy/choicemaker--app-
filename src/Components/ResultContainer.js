const ResultContainer = (props) => {
  return (
    <div>
      <span>{props.question}</span>
      <span>{props.occurrence}</span>
    </div>
  );
};

export default ResultContainer;

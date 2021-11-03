const ResultContainer = (props) => {
  return (
    <div className="occurrences">
      <span>{props.question}</span>
      <span>{props.occurrence}</span>
    </div>
  );
};

export default ResultContainer;

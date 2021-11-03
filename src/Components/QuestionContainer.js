const QuestionContainer = (props) => {
  return (
    <div className="question">
      <textarea
        cols="30"
        rows="5"
        placeholder="Enter your question..."
        value={props.question}
        onChange={(e) => props.setQuestion(e.target.value)}
      />
    </div>
  );
};

export default QuestionContainer;

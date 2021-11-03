const QuestionContainer = (props) => {
  return (
    <div className='question'>

      <input
        placeholder="Enter question..."
        value={props.question}
        onChange={(e) => props.setQuestion(e.target.value)}
      />
    </div>
  );
};

export default QuestionContainer;

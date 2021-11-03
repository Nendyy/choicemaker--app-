const OptionsInputContainer = (props) => {
  return (
    <div>
      {props.options.map((_, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Answer question..."
            onChange={(e) => {
              props.setOptions((options) => {
                options[index].value = e.target.value.trim();
                return [...options];
              });
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default OptionsInputContainer;

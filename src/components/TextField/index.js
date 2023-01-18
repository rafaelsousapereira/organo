import './TextField.css';

const TextField = (props) => {
  const placeholderModify = `${props.placeholder}...`;

  const isTyping = (event) => {
    props.isChanged(event.target.value);
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={isTyping}
        required={props.required}
        placeholder={placeholderModify}
      />
    </div>
  );
};

export default TextField;

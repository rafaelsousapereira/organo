import './TextField.css';

const TextField = (props) => {
    const placeholderModify = `${props.placeholder}...`;
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input required={props.required} placeholder={placeholderModify} />
        </div>
    );
}

export default TextField;

import './TextField.css';

const TextField = (props) => {
    const placeholderModify = `${props.placeholder}...`;
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input placeholder={placeholderModify} />
        </div>
    );
}

export default TextField;

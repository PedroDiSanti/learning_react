import './TextField.css'

const TextField = (props) => {
    const onType = (event) => {
        props.onValueChange(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input
                value={props.eventValue}
                onChange={onType}
                required={props.required}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default TextField
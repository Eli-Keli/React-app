import React, { useState } from "react";

function FormComponent() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Form submitted with input: ${inputValue}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Input:
                <input type="text" value={inputValue} placeholder="Enter input value" onChange={handleChange}/>
                <button type="submit">Submit</button>
            </label>
        </form>
    );
}

export default FormComponent;
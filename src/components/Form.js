import React from "react";

const Form = ({type, label, placeholder, updatename}) => {
    return(
        <div>
            <label>{label}</label>
            <input type={type}
            placeholder={placeholder}
            onChange={(e)=>updatename(e.target.value)} />
        </div>
    )
}

export default Form;
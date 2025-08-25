import React from "react";
import "./inputFiled.css";

const InputFiled = ({ label, type, name, placeholder, required, value, onChange }) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(name, e.target.value);
    }
  };

  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        id={name}
        className="form-control requiredField input-label"
        name={name}
        placeholder={placeholder}
        required={required}
        value={value || ''}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputFiled;
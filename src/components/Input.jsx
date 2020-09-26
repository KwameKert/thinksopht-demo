import React from "react";

const Input = ({ name, label, value, onChange, error }) => {
  return (
    <div className="form-group mt-1">
      <label htmlFor={name}>{null}</label>
      <input
        name={name}
        onChange={onChange}
        value={value}
        id={name}
        placeholder={name}
        type="text"
        className="form-control input-space"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;

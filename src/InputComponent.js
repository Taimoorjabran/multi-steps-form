import React from 'react';

const InputComponent = ({ onInputChange, label, value }) => {
  console.log(label);
  return (
    <>
      {label && (
        <div className="form-input-cont">
          <label className="input-label">{label}</label>
          <input
            type={
              label === 'Password'
                ? 'password'
                : label === 'Confirm Password'
                ? 'password'
                : 'text'
            }
            className="input-class"
            placeholder={label}
            value={value}
            onChange={onInputChange}
          />
        </div>
      )}
    </>
  );
};

export default InputComponent;

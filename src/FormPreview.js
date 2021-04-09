import React, { useState } from 'react';

const FormPreview = ({ data, handlePreView }) => {
  const [input, setInput] = useState({ inputType: 'password' });

  const setInputType = (data) => {
    const currentInputType = { ...input };
    currentInputType.inputType = data;
    console.log(currentInputType);
    setInput(currentInputType);
  };
  return (
    <div className="form-preview-cont">
      <div className="form-preview-content">
        <h4>Email</h4> :<h6>{data.email}</h6>
      </div>
      <div className="form-preview-content">
        <h4>Mobile</h4> :<h6>{data.mobile}</h6>
      </div>
      <div className="form-preview-content">
        <h4>First Name</h4> :<h6>{data.firstName}</h6>
      </div>
      <div className="form-preview-content">
        <h4>Last Name</h4> :<h6>{data.lastName}</h6>
      </div>
      <div className="form-preview-content">
        <h4>Password</h4> :
        <div className="password-cont">
          <input type={input.inputType} value={data.password} />
          {input.inputType === 'password' ? (
            <button onClick={() => setInputType('text')}>view</button>
          ) : (
            <button onClick={() => setInputType('password')}>hide</button>
          )}
        </div>
      </div>

      <div className="form-button-cont">
        <button type="button" className="form-button" onClick={handlePreView}>
          Edit
        </button>
        <button type="button" className="form-button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormPreview;

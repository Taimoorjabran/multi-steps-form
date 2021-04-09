import React, { useState } from 'react';
import InputComponent from './InputComponent';

const From = ({
  formToShow,
  formTitle,
  handlePrev,
  handleNext,
  handlePreView,
  formdata,
  handleFormData,
  error,
}) => {
  const [contactFormCurrentInput] = useState(
    formToShow.contactForm
      ? 'email'
      : formToShow.informationForm
      ? 'firstName'
      : 'password'
  );

  const [informationFormCurrentInput] = useState(
    formToShow.contactForm
      ? 'confirmEmail'
      : formToShow.informationForm
      ? 'lastName'
      : 'confirmPassword'
  );

  const handleChange = (name, e) => {
    const currentFormData = { ...formdata };
    currentFormData[name] = e.target.value;
    console.log(currentFormData);
    handleFormData(currentFormData);
  };

  console.log(formdata.confirmPassword);

  return (
    <>
      <div className="form-container">
        <h2>{formTitle}</h2>
        <InputComponent
          onInputChange={(e) => handleChange(contactFormCurrentInput, e)}
          label={
            formToShow.contactForm
              ? 'Email'
              : formToShow.informationForm
              ? 'First Name'
              : 'Password'
          }
          value={
            formToShow.contactForm
              ? formdata.email
              : formToShow.informationForm
              ? formdata.firstName
              : formdata.password
          }
        />

        <InputComponent
          onInputChange={(e) => handleChange(informationFormCurrentInput, e)}
          label={
            formToShow.contactForm
              ? 'Confirm Email'
              : formToShow.informationForm
              ? 'Last Name'
              : 'Confirm Password'
          }
          value={
            formToShow.contactForm
              ? formdata.confirmEmail
              : formToShow.informationForm
              ? formdata.lastName
              : formdata.confirmPassword
          }
        />
        {error.emailError && <small>Email doesn't matched</small>}
        {error.passwordError && <small>Password doesn't matched</small>}

        <InputComponent
          onInputChange={(e) => handleChange('mobile', e)}
          label={formToShow.contactForm && 'Mobile'}
          value={formToShow.contactForm && formdata.mobile}
        />
        <div className="form-button-cont">
          {!formToShow.contactForm && (
            <button className="form-button" type="button" onClick={handlePrev}>
              Prev
            </button>
          )}
          {!formToShow.passwordForm && (
            <button className="form-button" type="button" onClick={handleNext}>
              Next
            </button>
          )}
          {formToShow.passwordForm && (
            <button
              className="form-button"
              type="button"
              onClick={() => handlePreView(formdata)}
            >
              PreView
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default From;

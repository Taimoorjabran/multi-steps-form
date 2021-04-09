import React, { useState } from 'react';
import FormPreview from './FormPreview';
import From from './From';

const MultistepForm = () => {
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [currentForm, setCurrentForm] = useState({
    contactForm: true,
    informationForm: false,
    passwordForm: false,
  });
  const [formData, setFormData] = useState({
    email: '',
    confirmEmail: '',
    mobile: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  });

  const [previewForm, setPreviewForm] = useState(false);
  console.log(currentForm);

  const handlePrev = () => {
    if (currentForm.informationForm) {
      const formToShow = { ...currentForm };
      formToShow.informationForm = false;
      formToShow.contactForm = true;
      formToShow.passwordForm = false;
      setCurrentForm(formToShow);
    }
    if (currentForm.passwordForm) {
      const formToShow = { ...currentForm };
      formToShow.informationForm = true;
      formToShow.contactForm = false;
      formToShow.passwordForm = false;
      setCurrentForm(formToShow);
    }
  };

  const handleNext = () => {
    if (currentForm.contactForm && formData.email === formData.confirmEmail) {
      const formToShow = { ...currentForm };
      formToShow.informationForm = true;
      formToShow.contactForm = false;
      formToShow.passwordForm = false;
      setCurrentForm(formToShow);
      setEmailError(false);
    } else if (currentForm.informationForm) {
      const formToShow = { ...currentForm };
      formToShow.informationForm = false;
      formToShow.contactForm = false;
      formToShow.passwordForm = true;
      setCurrentForm(formToShow);
    } else {
      setEmailError(true);
    }
  };

  const handlePreView = (data) => {
    if (formData.password === formData.confirmPassword) {
      setPreviewForm(!previewForm);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  return (
    <>
      {previewForm ? (
        <FormPreview handlePreView={handlePreView} data={formData} />
      ) : (
        <>
          {currentForm.contactForm && (
            <>
              <h1 style={{ textAlign: 'center', marginTop: '3rem' }}>
                Welcome To Multistep Form
              </h1>
              <From
                formTitle="Please Enter Contact Details"
                formToShow={currentForm}
                formdata={formData}
                handlePrev={handlePrev}
                handleFormData={setFormData}
                handleNext={handleNext}
                handlePreView={handlePreView}
                error={{ emailError, passwordError }}
              />
            </>
          )}
          {currentForm.informationForm && (
            <From
              formTitle="Please Enter Information Details"
              formToShow={currentForm}
              formdata={formData}
              handleFormData={setFormData}
              handlePrev={handlePrev}
              handleNext={handleNext}
              handlePreView={handlePreView}
              error={{ emailError, passwordError }}
            />
          )}
          {currentForm.passwordForm && (
            <From
              formTitle="Please Enter Security Details"
              formToShow={currentForm}
              formdata={formData}
              handleFormData={setFormData}
              handlePrev={handlePrev}
              handleNext={handleNext}
              handlePreView={handlePreView}
              error={{ emailError, passwordError }}
            />
          )}
        </>
      )}
    </>
  );
};

export default MultistepForm;

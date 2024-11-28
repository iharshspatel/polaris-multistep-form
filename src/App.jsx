import React, { useEffect, useState } from 'react';
import { AppProvider, Button, Page } from '@shopify/polaris';
import Step1 from './components/steps/Step1';
import Step2 from './components/steps/Step2';
import Step3 from './components/steps/Step3';
import Summary from './components/steps/Summary';
import ProgressBar from './components/shared/ProgressBar';
import useFormValidation from './hooks/useFormValidation';
import {LOCAL_STORAGE, TITLE} from "./constants/constants.js"
import '@shopify/polaris/build/esm/styles.css';

const App = () => {
  const [currentStep, setCurrentStep] = useState(()=>{
    const currentStep = localStorage.getItem(LOCAL_STORAGE.CURRENT_STEP);
    return currentStep ? parseInt(currentStep) : 1;
  });
  const [formState, setFormState] = useState(()=>{
    const savedState = localStorage.getItem(LOCAL_STORAGE.MULTI_STEP_FORM);
    return savedState ? JSON.parse(savedState) : {
      personalInfo: { firstName: '', lastName: '', email: '', phone: '' },
      location: { country: '', city: '' },
      paymentInfo: { cardNumber: '', expiry: '', cvv: '', billingAddress: '' },
    };
  });
  const [title , setTitle ] = useState("");
  const { errors, validate } = useFormValidation(formState);

  const nextStep = ()  => { 
    if (validate(currentStep)) {
      setCurrentStep((next)=> next + 1);
    }
  }
  const prevStep = () => setCurrentStep((prev) => prev - 1);
  const onSubmit = () => {
    if(validate(1) && validate(2) && validate(3)){
      alert("Success");
    }
  };

  const updateFormState = (section, field, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [field]: value,
      },
    }));
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE.MULTI_STEP_FORM, JSON.stringify(formState));
  }, [formState]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE.CURRENT_STEP,currentStep);
    switch (currentStep){
      case 1:
        setTitle(TITLE.PERSONAL_INFORMATION);
        break;
      case 2:
        setTitle(TITLE.LOCATION_INFORMATION);
        break;
      case 3:
        setTitle(TITLE.PAYMENT_INFORMATION);
        break;
      case 4:
        setTitle(TITLE.SUMMARY);
        break;
      default:
        setTitle(TITLE.MULTI_STEP_FORM)
    }
  }, [currentStep]);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 formState={formState} updateFormState={updateFormState} errors={errors} />;
      case 2:
        return <Step2 formState={formState} updateFormState={updateFormState} errors={errors} />;
      case 3:
        return <Step3 formState={formState} updateFormState={updateFormState} errors={errors} />;
      case 4:
        return <Summary formState={formState} updateFormState={updateFormState} errors={errors}/>;
      default:
        return <Step1 />;
    }
  };

  return (
    <AppProvider>
      <Page title={title}
       primaryAction={{
        content:"Submit",
        disabled: currentStep !== 4,
        onAction:onSubmit
       }}
        secondaryActions={[
        {
          content: 'Prev',
          destructive: false,
          onAction:prevStep,
          disabled: currentStep == 1 ? true : false
        },
        {
          content: 'Next',
          destructive: false,
          onAction:nextStep,
          disabled: currentStep == 4 ? true : false
        },
      ]}>
        <ProgressBar progress={(currentStep / 4) * 100} />
        <br/>
        <br/>
        {renderStep()}
       
      </Page>
    </AppProvider>
  );
};

export default App;

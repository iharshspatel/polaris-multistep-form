import React from 'react';
import { Button, Stack } from '@shopify/polaris';

const NavigationButtons = ({ currentStep, setCurrentStep, maxSteps, validateStep }) => {
  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, maxSteps));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <Stack distribution="equalSpacing">
      {currentStep > 1 && <Button onClick={handleBack}>Back</Button>}
      {currentStep < maxSteps ? (
        <Button primary onClick={handleNext}>
          Next
        </Button>
      ) : (
        <Button primary onClick={() => alert('All Steps Completed!')}>
          Finish
        </Button>
      )}
    </Stack>
  );
};

export default NavigationButtons;

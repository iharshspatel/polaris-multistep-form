import React from 'react';
import { Card, InlineError, TextField } from '@shopify/polaris';

const Step1 = ({ formState, updateFormState, errors }) => {

  return (
    <Card>
      <TextField
        label="First Name"
        placeholder='Enter First Name'
        value={formState.personalInfo.firstName}
        onChange={(value) => updateFormState('personalInfo', 'firstName', value)}
        error={errors.firstName}
      />
      <br/>
      <TextField
        label="Last Name"
        placeholder='Enter Last Name'
        value={formState.personalInfo.lastName}
        onChange={(value) => updateFormState('personalInfo', 'lastName', value)}
        error={errors.lastName}
      />
      <br/>
      <TextField
        label="Email"
        placeholder="Enter Email"
        value={formState.personalInfo.email}
        onChange={(value) => updateFormState('personalInfo', 'email', value)}
        error={errors.email}
      />
       <br/>
      <TextField
        label="Phone (Optional)"
        placeholder="Enter Phone"
        type='number'
        value={formState.personalInfo.phone}
        onChange={(value) => updateFormState('personalInfo', 'phone', value)}
        error={errors.phone}
      />
       <br/>
      <InlineError errors={errors} />
    </Card>
  );
};

export default Step1;

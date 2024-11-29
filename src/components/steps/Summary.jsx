import React from 'react';
import { Card, TextField, Button } from '@shopify/polaris';
import Step2 from './Step2';

const Summary = ({ formState, updateFormState, errors }) => {
  return (
    <div>
      <Card title="Personal Information" sectioned>
        <TextField
          label="First Name"
          value={formState.personalInfo.firstName}
          onChange={(value) => updateFormState('personalInfo', 'firstName', value)}
          error={errors.firstName}
        />
        <br/>
        <TextField
          label="Last Name"
          value={formState.personalInfo.lastName}
          onChange={(value) => updateFormState('personalInfo', 'lastName', value)}
          error={errors.lastName}
        />
         <br/>
        <TextField
          label="Email"
          value={formState.personalInfo.email}
          onChange={(value) => updateFormState('personalInfo', 'email', value)}
          error={errors.email}
        />
         <br/>
        <TextField
          label="Phone Number"
          value={formState.personalInfo.phone}
          onChange={(value) => updateFormState('personalInfo', 'phone', value)}
          error={errors.phone}
        />
         <br/>
      </Card>
      <br/>
      <Step2 formState={formState} updateFormState={updateFormState} errors={errors}/>
    <br/>
      <Card title="Payment Information" sectioned>
        <TextField
          label="Credit Card Number"
          value={formState.paymentInfo.cardNumber}
          onChange={(value) => updateFormState('paymentInfo', 'cardNumber', value)}
          error={errors.cardNumber}
        />
         <br/>
        <TextField
          label="Expiry Date"
          value={formState.paymentInfo.expiry}
          onChange={(value) => updateFormState('paymentInfo', 'expiry', value)}
          error={errors.expiry}
        />
         <br/>
        <TextField
          label="CVV"
          value={formState.paymentInfo.cvv}
          onChange={(value) => updateFormState('paymentInfo', 'cvv', value)}
          error={errors.cvv}
        />
         <br/>
         {formState.paymentInfo.billingAddress &&  <TextField
          label="Billing Address"
          value={formState.paymentInfo.billingAddress}
          onChange={(value) => updateFormState('paymentInfo', 'billingAddress', value)}
          error={errors.billingAddress}
        />}
         <br/>
      </Card>
      <br/>
    </div>
  );
};

export default Summary;

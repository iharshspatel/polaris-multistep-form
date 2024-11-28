import React, { useState } from 'react';
import { TextField, Checkbox, InlineError, Card } from '@shopify/polaris';

const Step3 = ({ formState, updateFormState, errors }) => {
  
  const [useSameBillingAddress, setUseSameBillingAddress] = useState(true);


  return (
    <Card>
      <TextField
        label="Credit Card Number"
        placeholder='Enter Credit Card Number'
        type="number"
        value={formState.paymentInfo.cardNumber}
        onChange={(value) => updateFormState('paymentInfo', 'cardNumber', value)}
        error={errors.cardNumber}
      />
      <br/>
      <TextField
        label="Expiry Date (MM/YY)"
        type="month"
        value={formState.paymentInfo.expiry}
        onChange={(value) => updateFormState('paymentInfo', 'expiry', value)}
        error={errors.expiry}
      />
      <br/>
      <TextField
        label="CVV"
        type="password"
        value={formState.paymentInfo.cvv}
        onChange={(value) => updateFormState('paymentInfo', 'cvv', value)}
        error={errors.cvv}
      />
      <br/>
      <Checkbox
        label="Billing address is the same as shipping address"
        checked={useSameBillingAddress}
        onChange={(newChecked) => {
          setUseSameBillingAddress(newChecked);
          if (newChecked) {
            updateFormState('paymentInfo', 'billingAddress', '');
          }
        }}
      />
      <br/>
      {!useSameBillingAddress && (
        <TextField
          label="Billing Address"
          placeholder="Enter Billing Address"
          type="text"
          value={formState.paymentInfo.billingAddress}
          onChange={(value) => updateFormState('paymentInfo', 'billingAddress', value)}
          error={errors.billingAddress}
        />
      )}
      <InlineError errors={errors} />
    </Card>
  );
};

export default Step3;

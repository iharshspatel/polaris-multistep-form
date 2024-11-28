import { useState } from "react";

const useFormValidation = (formState) => {
  const [errors, setErrors] = useState({});

  const validateStep1 = () => {
    const newErrors = {};
    if (!formState.personalInfo.firstName)
      newErrors.firstName = "First name is required.";
    if (
      !formState.personalInfo.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.personalInfo.email)
    )
      newErrors.email = "Valid email is required.";
    if (!formState.personalInfo.lastName)
      newErrors.lastName = "Valid Last name is required.";

    if (
      formState.personalInfo.phone &&
      !/^\+?(\d{1,3})?[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{1,4}[\s.-]?\d{1,4}$/.test(
        formState.personalInfo.phone
      )
    )
      newErrors.phone = "Valid Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formState.location.country) newErrors.country = "Country is required.";
    if (!formState.location.city) newErrors.city = "City is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    if (!formState.paymentInfo.cardNumber)
      newErrors.cardNumber = "Credit card number is required.";
    if (!/^\d{16}$/.test(formState.paymentInfo.cardNumber))
      newErrors.cardNumber = "Invalid card number format.";
    if (
      !formState.paymentInfo.expiry ||
      new Date() > new Date(formState.paymentInfo.expiry)
    )
      newErrors.expiry = "Valid Expiry date is required.";
    if (!formState.paymentInfo.cvv) newErrors.cvv = "CVV is required.";

    setErrors(newErrors);
    console.log(errors);
    return Object.keys(newErrors).length === 0;
  };

  const validate = (currentStep) => {
    switch (currentStep) {
      case 1:
        return validateStep1();
      case 2:
        return validateStep2();
      case 3:
        return validateStep3();
      default:
        return true;
    }
  };

  return { errors, validate };
};

export default useFormValidation;

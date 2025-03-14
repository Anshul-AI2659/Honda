// Email Validation
export const validateEmail = (text: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(text);
};

// Password Validation
export const validatePassword = (password: string) => {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
  return passwordRegex.test(password);
};

// Name Validation
export const validateName = (text: string) => {
  const nameRegex = /^[A-Za-z]{3,}$/;
  return nameRegex.test(text);
};

// Phone Number Validation
export const validatePhoneNumber = (number: string) => {
  const phoneRegex = /^[0-9]{10,13}$/;
  return phoneRegex.test(number);
};


export const validateField = (value: string) => {
  const fieldRegex = /(?:.*\d.*){5,}/;
  return fieldRegex.test(value);
};

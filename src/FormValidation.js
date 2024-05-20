// formValidation.js
export const validateForm = (country, phoneNumber, password) => {
    let errors = [];

    //Проверка страны
    if (!country) {
      errors.push("Country is required.");
    }
  
    //Проверка номера телефона 
    if (!phoneNumber) {
      errors.push("Phone number is required.");
    } 
    else if (phoneNumber.length > 11) {
      errors.push("Phone number must be at least 11 characters long.");
    }

    //Проверка пароля 
    if (!password) {
      errors.push("Password is required.");
    } 
    else if (password.length < 8 ||  password.length > 30) {
      errors.push("Пароль должен быть от 8 до 30 символов");
    }
    return errors;
  };
  
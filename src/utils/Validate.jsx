import React from 'react'

export const checkValidData = (email, password) => {

  const isEmailValid = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email);
  const isPasswordValid = /"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"/.test(password);

    if(!isEmailValid) return "Email ID is not valid."
    if(!isPasswordValid) return "Password is not valid."

    if(isEmailValid && isPasswordValid) return null;

};



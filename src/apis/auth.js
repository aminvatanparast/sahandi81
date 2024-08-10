import axios from 'axios';

export const sendOtp = (phoneNumber) =>
  axios.post('account/login', {
    phoneNumber,
  });

export const verifyOtp = (phoneNumber, otp) =>
  axios.post('account/verifyotp', {
    phoneNumber,
    otp,
  });

export const register = (firstName, lastName, phoneNumber) =>
  axios.post('account/register', {
    firstName,
    lastName,
    phoneNumber,
  });

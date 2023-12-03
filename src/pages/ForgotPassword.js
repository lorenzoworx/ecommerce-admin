import React from 'react';
import CustomInput from '../components/CustomInput';

const ForgotPassword = () => {
  return (
    <section className="authentication-wrapper py-5 d-flex flex-cloumn align-items-center">
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <form action="" className="authentication-form">
          <h3 className="text-center">Forgot Password?</h3>
          <p className="text-center">Please enter your registered email to reset your password</p>
          <CustomInput type="email" place_holder="name@email.com" i_id="forgot-password-email" label="Email" />
          <button type="submit" className="border-0 px-3 py-2 text-white fw-bold w-100">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
import React from 'react';
import CustomInput from '../components/CustomInput';

const ResetPassword = () => {
  return (
    <section className="authentication-wrapper py-5 d-flex flex-cloumn align-items-center">
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <form action="" className="authentication-form">
          <h3 className="text-center">Reset Password</h3>
          <p className="text-center">Update your password</p>
          <CustomInput type="password" place_holder="New Password" i_id="new-password" label="New Password" />
          <CustomInput type="password" place_holder="Confirm Password" i_id="confirm-password" label="Confirm Password" />
          <button type="submit" className="border-0 px-3 py-2 text-white fw-bold w-100">Reset Password</button>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
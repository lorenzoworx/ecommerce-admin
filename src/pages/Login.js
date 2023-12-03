import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import CustomInput from '../components/CustomInput';

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    //Authentication Logic goes here
    navigate("/admin");
  }
  return (
    <section className="authentication-wrapper py-5 d-flex flex-cloumn align-items-center">
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <form onSubmit={handleSubmit} className="authentication-form">
          <h3 className="text-center">Sign In</h3>
          <p className="text-center">
            Log in to your account to continue
          </p>
          <CustomInput type="email" place_holder="name@email.com" i_id="login-email" label="Email" />
          <CustomInput type="password" place_holder="Password" i_id="login-password" label="Password" />
          <div className="mb-3 text-end">
            <Link to="forgot-password" className="">Forgot Password?</Link>
          </div>
          <button type="submit" className="border-0 px-3 py-2 text-white fw-bold w-100">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
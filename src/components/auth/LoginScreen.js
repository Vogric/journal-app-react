import React from "react";
import { Link } from "react-router-dom";

export const LoginScreen = () => {
  return (
    <>
      <h1 className="auth__title">Login</h1>
      <form action="">
        <input
          type="email"
          placeholder="Mail"
          name="email"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
        />

        <button className="btn btn-primary btn-block" type="submit">
          Login
        </button>

        <div className="auth__social-networks">
          <p>Login with social networks</p>

          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google-icon"
              />
            </div>

            <p className="btn-text">
              <b>Sign in with Google</b>
            </p>

            <Link to="/auth/register">Create new account</Link>
          </div>
        </div>
      </form>
    </>
  );
};

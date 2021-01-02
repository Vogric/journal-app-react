import React from "react";
import { Link } from "react-router-dom";
import { googleLogin, loginWithEmailPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: "blvogric@gmail.com",
    password: 12345678,
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginWithEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  return (
    <>
      <h1 className="auth__title">Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Mail"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />

        <button className="btn btn-primary btn-block" type="submit">
          Login
        </button>

        <div className="auth__social-networks">
          <p>Login with social networks</p>

          <div onClick={handleGoogleLogin} className="google-btn">
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
          </div>
        </div>
        <Link to="/auth/register" className="link">
          Create new account
        </Link>
      </form>
    </>
  );
};

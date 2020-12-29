import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  return (
    <>
      <h1 className="auth__title">Register</h1>
      <form action="">
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
        />
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

        <input
          type="password"
          placeholder="Repeat password"
          name="password2"
          className="auth__input"
        />
        <button className="btn btn-primary btn-block " type="submit">
          Register
        </button>

        <Link to="/auth/login" className="link ">
          Already registered?
        </Link>
      </form>
    </>
  );
};

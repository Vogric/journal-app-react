import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch } from "react-redux";
import { removeError, setError } from "../../actions/ui";

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    name: "braian",
    email: "blvogric@gmail.com",
    password: "12345678",
    password2: "12345678",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(name, email, password, password2);

    if (isFormValid()) {
      console.log("Form is correct");
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password !== password2 || password.lenght < 8) {
      dispatch(
        setError("Password must be greater than or equal to 8 characters")
      );
      return false;
    }
    dispatch(removeError);
    return true;
  };
  return (
    <>
      <h1 className="auth__title">Register</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Mail"
          name="email"
          className="auth__input"
          autoComplete="off"
          onChange={handleInputChange}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          onChange={handleInputChange}
          value={password}
        />

        <input
          type="password"
          placeholder="Repeat password"
          name="password2"
          className="auth__input"
          onChange={handleInputChange}
          value={password2}
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

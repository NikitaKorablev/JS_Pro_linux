import React, { useState } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import Input from "../Common/Input";
import "./index.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setRepeatPassword("");
  };

  const handler = () => {
    if (password === repeatPassword) {
      console.log({
        firstName,
        lastName,
        email,
        password,
      });
      clearForm();
    } else {
      console.log("Passwords don`t match");
    }
  };

  return (
    <div className="registration">
      <Header />
      <div className="registrationForm">
        <div className="title">
          <div className="reg">registration</div>
        </div>
        <div className="inputFild">
          <div className="informationBlock">
            <div className="name">Name</div>
            <div className="surname">Surname</div>
            <div className="login">Login</div>
            <div className="password">Password</div>
            <div className="password">Repeat password</div>
          </div>
          <div className="inputBlock">
            <Input
              value={firstName}
              setValue={setFirstName}
              placeHolder="Введите имя"
              type="text"
            />
            <Input
              value={lastName}
              setValue={setLastName}
              placeHolder="Введите фамилию"
              type="text"
            />
            <Input
              value={email}
              setValue={setEmail}
              placeHolder="Введите email"
              type="text"
            />
            <Input
              value={password}
              setValue={setPassword}
              placeHolder="Введите пароль"
              type="password"
            />
            <Input
              value={repeatPassword}
              setValue={setRepeatPassword}
              placeHolder="Повторите пароль"
              type="password"
            />
          </div>
        </div>

        <button onClick={handler} type="button">
          Sign up
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;

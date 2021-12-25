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
          <Input
            value={firstName}
            setValue={setFirstName}
            placeHolder="Введите имя"
            type="text"
            title="Name"
          />
          <Input
            value={lastName}
            setValue={setLastName}
            placeHolder="Введите фамилию"
            type="text"
            title="Surname"
          />
          <Input
            value={email}
            setValue={setEmail}
            placeHolder="Введите email"
            type="text"
            title="Email"
          />
          <Input
            value={password}
            setValue={setPassword}
            placeHolder="Введите пароль"
            type="password"
            title="Password"
          />
          <Input
            value={repeatPassword}
            setValue={setRepeatPassword}
            placeHolder="Повторите пароль"
            type="password"
            title="Repeat password"
          />
          {/* </div> */}
        </div>

        <button onClick={handler} className="btn">
          Sign up
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;

import React from "react";

type InputPropsType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeHolder: string;
  type: string;
  title: string;
};

const Input: React.FC<InputPropsType> = (props) => {
  const { value, setValue, placeHolder, type, title } = props;

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ fontSize: "24px", display: "flex", margin: "10px 0" }}>
      <span className="title">{title}</span>
      <input
        placeholder={placeHolder}
        type={type}
        onChange={changeHandler}
        style={{ fontSize: "24px", margin: "0 0 0 auto" }}
        value={value}
      />
    </div>
  );
};

export default Input;

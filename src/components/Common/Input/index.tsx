import React from "react";

type InputPropsType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeHolder: string;
  type: string;
};

const Input: React.FC<InputPropsType> = (props) => {
  const { value, setValue, placeHolder, type } = props;

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ fontSize: "24px" }}>
      <input
        placeholder={placeHolder}
        type={type}
        onChange={changeHandler}
        style={{ fontSize: "24px", marginBottom: "20px" }}
        value={value}
      />
    </div>
  );
};

export default Input;

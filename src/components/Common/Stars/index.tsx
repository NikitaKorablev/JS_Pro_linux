import React from "react";
import "./index.css";

type StarsPropsType = {
  name: string;
};

const Stars: React.FC<StarsPropsType> = (props) => {
  const { name } = props;

  return (
    <div className="stars">
      <fieldset className="rating">
        <div className="rating_group">
          <input
            className="rating_star"
            type={"radio"}
            name={name}
            value={"1"}
            // checked
          />
          <input
            className="rating_star"
            type={"radio"}
            name={name}
            value={"2"}
          />
          <input
            className="rating_star"
            type={"radio"}
            name={name}
            value={"3"}
          />
          <input
            className="rating_star"
            type={"radio"}
            name={name}
            value={"4"}
          />
          <input
            className="rating_star"
            type={"radio"}
            name={name}
            value={"5"}
          />
        </div>
      </fieldset>
    </div>
  );
};

export default Stars;

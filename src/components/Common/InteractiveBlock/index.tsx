import React from "react";
import Stars from "../Stars";
import "./index.css";

type InteractiveBlockPropsType = {
  price: number;
  name: string;
};

const InteractiveBlock: React.FC<InteractiveBlockPropsType> = (props) => {
  const { price, name } = props;

  return (
    <div className="block">
      <div className="btns">
        <a href="#" className="quickView">
          <p>быстрый просмотр</p>
        </a>
        <a href="#" className="trash">
          <p>в корзину</p>
        </a>
      </div>
      <Stars name={name} />
      <div className="namePrice">
        <p className="name">Чёрное платье{`\n`}</p>
        <p className="price">
          <span className="rubl">P</span>
          {price}
        </p>
      </div>
    </div>
  );
};

export default InteractiveBlock;

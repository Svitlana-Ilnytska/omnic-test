import React from "react";
import css from "./CardItem.module.scss";

export default function CardItem(props) {
  const { image, title } = props;
  return (
    <div className={css.card}>
      <img src={image} alt="card" />
      <div className={css.itemDetails}>{title}</div>
    </div>
  );
}

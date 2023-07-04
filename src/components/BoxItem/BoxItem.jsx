import React from "react";
import css from "./BoxItem.module.scss";

export default function BoxItem(props) {
  const { image, title, size, disabled, active, onClick } = props;

  const BOX_VISIBLE_CLASSES = {
    true: css.disabled,
    false: css.static,
  };

  return (
    <div
      className={`${css.box} ${BOX_VISIBLE_CLASSES[disabled]} ${
        active ? css.active : ""
      }`}
      onClick={onClick}
    >
      <img src={image} alt="box" />
      <div className={css.itemDetails}>
        <span className={css.title}>{title}</span>
        <p className={css.size}>{size}</p>
      </div>
    </div>
  );
}

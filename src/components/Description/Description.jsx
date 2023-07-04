import React from "react";

import BoxImage from "../../assets/box.png";
import css from "./Description.module.scss";

export default function Description() {
  return (
    <div className={css.listBlock}>
      <img src={BoxImage} alt="box" />

      <ol className={css.list}>
        <li>
          Упакуйте товар у коробку чи пакет. На упаковці не повинно бути
          сторонніх наклейок та етикеток;
        </li>
        <li>
          Заклейте упаковку скотчем, щоб не було доступу до вкладених предметів;
        </li>
      </ol>
    </div>
  );
}

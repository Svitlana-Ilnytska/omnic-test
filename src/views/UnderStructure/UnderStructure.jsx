import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import css from "./UnderStructure.module.scss";

export default function UnderStructure() {
    return (
      <div className={css.emptyBlock}>
        <h2>Сторінка в розробці</h2>
        <p>Ви можете повернутися, або скористатися іншими опціями.</p>

       <div className={css.buttonBlock}>
        <Link to="/">
          <Button type="button" buttonType="inverted">
            Назад
          </Button>
        </Link>

        </div>
      </div>
    );
  }
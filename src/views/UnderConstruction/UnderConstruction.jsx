import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import css from "./UnderConstruction.module.scss";

export default function UnderConstruction() {
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
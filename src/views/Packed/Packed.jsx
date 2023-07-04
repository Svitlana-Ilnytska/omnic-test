import React from "react";
import { Link, useParams } from "react-router-dom";
import Description from "../../components/Description/Description";
import Button from "../../components/Button/Button";

import css from "./Packed.module.scss";

export default function Packed() {
  const { uid } = useParams();

  return (
    <div className={css.chekedPage}>
      <h2 className={css.title}>Відправлення має бути надійно упаковане</h2>

      <Description />
      <div className={css.buttonsBlock}>
        <Link to="/">
          <Button type="button" buttonType="inverted">
            Назад
          </Button>
        </Link>
        <Link to={`/${uid}/sizes`}>
          <Button type="button" buttonType="approved">
            Я добре упакував
          </Button>
        </Link>
      </div>
    </div>
  );
}

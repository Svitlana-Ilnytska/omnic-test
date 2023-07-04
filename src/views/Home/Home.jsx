import React from "react";
import { Link, useParams } from "react-router-dom";
import CardItem from "../../components/CardItem/CardItem";
import PostImage from "../../assets/post.png";
import ParcelImage from "../../assets/parcel.png";

import css from "./Home.module.scss";

export default function Home() {
  const { uid } = useParams();

  return (
    <div className={css.homePage}>
      <div className={css.title}>
        <h1>Вітаємо вас!</h1>
        <p>Що відправлятимемо сьогодні?</p>
      </div>

      <div className={css.cardsBlock}>
        <Link to={`/${uid}/packed`}>
          <CardItem
            image={PostImage}
            title={"Надіслати посилку через поштомат"}
          />
        </Link>

        <Link to="/">
          <CardItem
            image={ParcelImage}
            title={"Повернення до інтернет магазину"}
          />
        </Link>
      </div>
    </div>
  );
}

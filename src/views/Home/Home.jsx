import React from "react";
import {useEffect, useState } from "react";

import CardItem from "../../components/CardItem/CardItem";
import css from "./Home.module.scss";
import PostImage from "../../assets/post.png";
import ParcelImage from "../../assets/parcel.png";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { useFetchDeviceQuery } from "../../redux/device/operations"
import { useParams } from 'react-router-dom';
export default function Home() {

  // const dispatch = useDispatch(); 
  // const { data, loading, error } = useFetchDeviceQuery();
  // const deviceData = useSelector((state) => state.deviceApi.data);

  // useEffect(() => {
  //   if (data) {
  //     console.log(data);
  //   }
  // }, [data, dispatch]);

  // const uid = data?.data?.location?.uid || "";
  // console.log(uid);

  const { uid } = useParams();

  console.log('uid home', uid)
  return (
    <div className={css.homePage}>
      <div className={css.title}>
        <h1>Вітаємо вас!</h1>
        <p>Що відправлятимемо сьогодні?</p>
      </div>

      <div className={css.cardsBlock}>

      <Link  to={`/${uid}/packed`}>
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

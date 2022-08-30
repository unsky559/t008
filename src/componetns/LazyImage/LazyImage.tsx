import React from 'react';
import loadWithTwoEvens from './loadWithTwoEvens';
import style from "./LazyImage.module.scss";

type propsType = {
  url: string,
  isLoading: boolean
}

const LazyImage = (props: propsType) => {
  if (props.isLoading) {
    return (
      <div className={`${style.imageContainer} ${style.imageLoading}`}>
        <h1>Picking the right numbers...</h1>
      </div>
    );
  }

  return (
      <div className={style.imageContainer}>
        <img className={style.image} src={props.url} alt=""/>
      </div>
  );
};

export default loadWithTwoEvens(LazyImage);

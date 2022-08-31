import React, { ReactElement, useEffect } from 'react';
import style from './LazyImage.module.scss';
import useFetch from '../../hooks/useFetch';
import randomService from '../../API/randomService';

type propsType = {
  url: string
}

const LazyImage = (props: propsType): ReactElement => {
  const [fetchRandoms, isLoading, error] = useFetch(() => randomService.awaitTwoEven());

  useEffect(() => {
    fetchRandoms().then();
  }, []);

  if (error) {
    return (
      <div className={`${style.imageContainer} ${style.imageError}`}>
        <h1>Cannot access the Server</h1>
      </div>
    );
  }

  if (isLoading) {
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

export default LazyImage;

import React from 'react';
import LazyImage from '../componetns/LazyImage/LazyImage';
import styles from './homePage.module.scss';

const HomePage = () => (
    <>
      <div className={styles.homePageLayout}>
        <LazyImage url="https://images.unsplash.com/photo-1531986627054-7f294d095acd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>

        <LazyImage url="https://images.unsplash.com/photo-1561542320-9a18cd340469?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>

        <LazyImage url="https://images.unsplash.com/photo-1564787775937-7005afb1f969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
      </div>
      <footer>
        <p>
          Photo by <a href="https://unsplash.com/@vinayak_125?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vinayak Sharma</a> on <a href="https://unsplash.com/s/photos/ford-fusion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </p>
        <p>
          Photo by <a href="https://unsplash.com/@lifeinkyiv?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eugene</a> on <a href="https://unsplash.com/s/photos/ukraine?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </p>
        <p>
          Photo by <a href="https://unsplash.com/es/@brandoncmorales?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brandon Morales</a> on <a href="https://unsplash.com/s/photos/ukraine?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </p>


      </footer>
    </>
);

export default HomePage;

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '/styles/home.module.css';

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.circle}>
            <img src="/images/ittLogo.png" alt="" />
          </div>
          <div className={styles.circle}>
            <img src="/images/ibfkLogo.png" alt="" />
          </div>
        </div>
        <div className={styles.row}>
         <div className={styles.circle}>
            <img src="/images/htmlLogo.png" alt="" />
          </div>        
        </div>
        <div className={styles.row}>
          <div className={styles.button}>
            <Link href="/next"><a>START</a></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

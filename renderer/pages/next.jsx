import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '/styles/home.module.css';

function Next() {
  return (
    <React.Fragment>
      <Head>
        <title>Next</title>
      </Head>
      <div className={styles.container}>
        <Link href="/home">
          <a>Go to home</a>
        </Link>
        <div className={styles.row}>
          <div className={styles.sideBar}></div>
          <div className={styles.compiler}></div>
        </div>

      </div>
    </React.Fragment>
  );
};

export default Next;

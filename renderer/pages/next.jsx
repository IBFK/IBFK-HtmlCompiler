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
      <div className={styles.compilerPage}>
          <div className={styles.backButton}>
            <Link href="/home"><a>BACK</a></Link>
          </div>
          <div className={styles.sideBar}></div>
          <div className={styles.compiler}></div> 
      </div>
    </React.Fragment>
  );
};

export default Next;

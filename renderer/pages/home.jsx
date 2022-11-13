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
        <Link href="/next">
          <a>Go to home</a>
        </Link>
      </div>
    </>
  );
};

export default Home;

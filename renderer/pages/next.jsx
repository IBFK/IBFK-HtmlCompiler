import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '/styles/home.module.css';
import {useState} from 'react';



function Next() {

  const [backGroundColor, setBackGroundColor] = useState('');
  const [message, setMessage] = useState('');


  const words = ['1','4','3','2','<h1></h1>'];
  
  const compiling = event => {
    let code = event.target.value;
    changeColor(toString(code));
    setMessage(code);
  };

  const toString = (code) => {
    let string = '';
    for (let i = 0; i < code.length; i++) {
      string += code[i];
    }
    return string;
  };

  const changeColor = (text) => {
    words.includes(text) ? setBackGroundColor('green') : setBackGroundColor('white');
  }

  return (
    <React.Fragment>
      <Head>
        <title>Compiler</title>
      </Head>
      <div className={styles.compilerPage}>

          <div className={styles.backButton}>
            <Link href="/home"><a>BACK</a></Link>
          </div>

          <div style={{backgroundColor: backGroundColor}} className={styles.sideBar}>
            <div key={message} className={styles.text}>
              <p>{message}</p>
            </div>
          </div>

          <div className={styles.compiler}>
            <textarea
              onChange={compiling} 
              name="compiler" 
              value={message}
              id="message">
            </textarea>
          </div>
      </div>
    </React.Fragment>
  );
}

export default Next;

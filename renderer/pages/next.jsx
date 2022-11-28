import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '/styles/home.module.css';
import {useState} from 'react';

function Next() {

  const [backGroundColor, setBackGroundColor] = useState('');
  const [message, setMessage] = useState('');

  const tags = {
    h1: /^[<h1>]+.+?<h1>$/,
    p: /^[<p>]+.+?<p>$/,
    a: /^[<a>]+.+?<a>$/,
    number: /^<\d>$/
  };


  const evaluateRegex = (inputText) => {
    for (const [key, value] of Object.entries(tags)) {
      if (value.test(inputText)) {
        return key;
      }
      // if (inputText.match(value)) {
      //   return value;
      // }
    }
  };

  
  
  const compiling = event => {
    let inputText = event.target.value;

    changeBgColor(toString(inputText));
    setMessage(inputText);
  };

  const toString = (inputText) => {
    let string = '';
    for (let i = 0; i < inputText.length; i++) {
      string += inputText[i];
    }
    return string;
  };




  const changeBgColor = (text) => {
    // words.includes(text) ? setBackGroundColor('green') : setBackGroundColor('white');
    evaluateRegex(text) ? setBackGroundColor('green') : setBackGroundColor('white');
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

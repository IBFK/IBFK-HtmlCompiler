import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '/styles/home.module.css';
import {useState} from 'react';



function Next() {

  const [backGroundColor, setBackGroundColor] = useState('');
  const words = ['<h1>Next.js</h1>', '<h2>React</h1>', '<h3>Node.js</h1>'];

  const [message, setMessage] = useState('');

  const compiling = event => {
    let code = event.target.value;
    setMessage(code);
    changeColor(code);
  };

  

  function changeColor(text) {
      if (text === words[0]) {
        setBackGroundColor('green');
      } else if (text === words[1]) {
        setBackGroundColor('blue');
      } else if (text === words[2]) {
        setBackGroundColor('red');
      } else {
        setBackGroundColor('white');
      }
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

          <div onClick={changeColor} className={styles.compiler}>
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
};

export default Next;

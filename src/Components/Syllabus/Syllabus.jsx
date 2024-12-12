import React, { useState } from 'react';
import styles from './Syllabus.module.css';
import { useNavigate } from 'react-router-dom'
import { data } from '../../data/data';
import banner from '../../assets/banner.jpeg';

function Syllabus() {
  const navigator =useNavigate();
  function GotoHome(){
   navigator("/");
   console.log("madhav")
  }
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className={styles.bg}>
      <div className={styles.topSection}>
        <img src={banner} alt="it image" />
       <h3 onClick={GotoHome}>Home</h3>
        <div className={styles.heading}>
          <h1>Department of Information Technology</h1>
        </div>
      </div>
      <div>
        <h1
          style={{
            padding: '10px',
            fontFamily: 'Roboto',
            fontSize: '30px',
            color: '#0b5394',
          }}
        >
          Click on appropriate year for the Course content
        </h1>
        <div className={styles.buttonContainer}>
          <a href="#Year1">
            <button>1st Year</button>
          </a>
          <a href="#Year2">
            <button>2nd Year</button>
          </a>
          <a href="#Year3">
            <button>3rd Year</button>
          </a>
          <a href="#Year4">
            <button>4th Year</button>
          </a>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.accordion}>
          {data.map((item, i) => (
            <div key={i} className={styles.item} id={item.id}>
              <h1>{item.title}</h1>
              <div className={styles.title} onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span>{selected === i ? '-' : '+'}</span>
              </div>
              <div
                className={`${styles.content} ${
                  selected === i ? styles.show : ''
                }`}
              >
                <ul>
                  <li>{item.unit1}</li>
                  <li>{item.unit2}</li>
                  <li>{item.unit3}</li>
                  <li>{item.unit4}</li>
                  <li>{item.unit5}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Syllabus;

import React from 'react';
import styles from '../Hero/Hero.module.scss';
import Subscribe from '../Subscribe';

export default function Hero() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.hero}>
        <h1>The DS/Algo Newsletter</h1>
        <p>
        Subscribe to our newsletter to receive biweekly email and be a Master of Data Structures and Algorithms and ace <strong>Coding Interviews</strong> 
          <br />
        </p>
      </div>
      <Subscribe />
      <div className={styles.producthunt}>
        <a
          href="https://www.producthunt.com/posts/bubblegum-dev?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bubblegum-dev"
          target="_blank"
        >
         
        </a>
      </div>
    </header>
  );
}

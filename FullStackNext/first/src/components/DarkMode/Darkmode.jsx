<<<<<<< HEAD
"use client"
import React, { useContext, useState } from 'react';
import styles from "./darkmode.module.css";
import { ThemContext } from '../../context/ThemContext';

const Darkmode = () => {
 const {toggle , mode} = useContext(ThemContext)

  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>L</div>
      <div className={styles.icon}>D</div>
      <div
        className={styles.ball}
        style={{ transform: mode === "light" ? "translateX(0)" : "translateX(26px)" }}
      />
    </div>
  );
};

export default Darkmode;
=======
"use client"
import React, { useContext, useState } from 'react';
import styles from "./darkmode.module.css";
import { ThemContext } from '../../../context/ThemContext';

const Darkmode = () => {
 const {toggle , mode} = useContext(ThemContext)

  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>L</div>
      <div className={styles.icon}>D</div>
      <div
        className={styles.ball}
        style={{ transform: mode === "light" ? "translateX(0)" : "translateX(26px)" }}
      />
    </div>
  );
};

export default Darkmode;
>>>>>>> 91eb025d213b349f0940b74f78dae0b98895365a

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from "../styles/Pizza.module.css";


const Pizza = () => {
  return (
      <>
      <Link href="/product/:id">
    <div className={styles.container}>
        <div className={styles.img}>
            <Image src="/img/pizza.png" height="250px" width="250px" />
        </div>
        <div className={styles.title}>
            <p>Overloaded Pizza</p>
        </div>
        <div className={styles.price}>
            <p>₹ 299.90</p>
        </div>
        <div className={styles.desc}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, saepe.</p>
        </div>
    </div></Link></>
  )
}

export default Pizza
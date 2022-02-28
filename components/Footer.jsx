import Image from 'next/image'
import React from 'react'
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image src="/img/bg.png" layout='fill' objectFit='cover'/>
      </div>
      <div className={styles.details}>
        <div className={styles.title}>
          <p className={styles.logo}>PIZZERIA</p>
          <p>Pizza never tasted this good!</p>
        </div>
        <div className={styles.about}>
          <div className={styles.outlets}>
            <h2 className={styles.head}>Find our outlets</h2>
            <p><p>Prayagraj - Uttar Pradesh</p>
              987-654-322
            </p>
            <p><p>Lucknow - Uttar Pradesh</p>
              987-654-323
            </p>
            <p><p>Bhopal - Madhya Pradesh</p>
              987-654-324
            </p>
            <p><p>Pune - Maharashtra</p>
              987-654-325
            </p>
          </div>
          <div className={styles.availability}>
            <h2 className={styles.head}>Working Hours</h2>
            <p><p>Monday until Friday</p>
            9:00-22:00</p>
            <p><p>Saturday - Sunday</p>
            9:00-24:00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
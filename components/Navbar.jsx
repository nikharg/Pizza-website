import React from 'react'
import styles from "../styles/Navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.left}>
        <div className={styles.icon}>
          <Image src="/img/telephone.png" alt='phone' width='35px' height='35px' />
        </div>
        <div className={styles.contact}>
          <h5>ORDER NOW!</h5>
          <h3>987 654 321</h3>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.navList}>
          <Link href="/"><a className={styles.links}>Homepage</a></Link>
          </div>
        <div className={styles.navList}>Products</div>
        <div className={styles.navList}>Menu</div>
        <div className={styles.logo}>
        <Link href="/"><a className={styles.links}>PIZZERIA</a></Link>
        </div>
        <div className={styles.navList}>Events</div>
        <div className={styles.navList}>Blogs</div>
        <div className={styles.navList}>Contact</div>
      </div>
      <div className={styles.right}>
        <div className={styles.cart}>
        <Link href="/cart">
        <Image src="/img/cart.png" alt='cart' width='40px' height='40px' className={styles.cartIcon}/>
        </Link>
          <div className={styles.counter}><p>2</p></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
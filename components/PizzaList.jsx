import React from 'react'
import styles from "../styles/PizzaList.module.css";
import Pizza from './Pizza';

const PizzaList = () => {

  return (
    <div className={styles.mainContainer}>
        <div className={styles.title}>
            <h1>THE BEST PIZZAS IN THE CITY</h1>
        </div>
        <div className={styles.desc}>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia iste consectetur inventore. Placeat ex quidem hic rem voluptatibus nihil, aspernatur vero! Architecto, doloribus aliquid dolores ipsa ea officia, consequatur facere corporis cumque, quam tempore eos dolorum ullam eius dolor numquam.</p>
        </div>
        <div className={styles.pizzaList}>
            {/* Remove later when using api */}
            <Pizza/>
            <Pizza/>
            <Pizza/>
            <Pizza/>
            <Pizza/>
            <Pizza/>
            <Pizza/>
            <Pizza/>
        </div>
    </div>
  )
}

export default PizzaList
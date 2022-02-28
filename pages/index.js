import Head from 'next/head'
import PizzaList from '../components/PizzaList'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizzeria</title>
        <meta name="description" content="The best pizzas in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider/>
      <PizzaList/>
    </div>
  )
}

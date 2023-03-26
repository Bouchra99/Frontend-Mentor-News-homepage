import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import MainCard from '../components/MainCard'
import NewsList from '../components/NewsList'
import DiverseList from '../components/DiverseList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <Header/>
      <div>
      <div className={styles.main}>
        <MainCard/>
        <NewsList/>
      </div>
      <div className={styles.diverse}>
        <DiverseList/>
      </div>
      </div>
    </div>
  )
}

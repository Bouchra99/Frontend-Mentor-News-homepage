import React from 'react'
import styles from '../styles/NewsList.module.css'
import NewCard from './NewCard'

const NewsList = () => {
  // The Downsides of AI Artistry
  // What are the possible adverse effects of on-demand AI image generation?

  // Is VC Funding Drying Up?
  // Private funding by VC firms is down 50% YOY. We take a look at what that means.

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>New</h3>
      <div className={styles.news}>
      <NewCard title = "Hydrogyn VS Electric Cars" preview="Will hydrogyn fulled cars ever catch up to EVs?" />
      <NewCard title = "The Downsides of AI Artistry" preview="What are the possible adverse effects of on-demand AI image generation?" />
      <NewCard title = "Is VC Funding Drying Up?" preview="Private funding by VC firms is down 50% YOY. We take a look at what that means." />

      </div>
    </div>
  )
}

export default NewsList
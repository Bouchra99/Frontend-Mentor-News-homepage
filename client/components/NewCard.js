import React from 'react'
import styles from '../styles/NewCard.module.css'
const NewCard = ({title,preview}) => {
  return (
    <div className={styles.card}>
        <h4 className={styles.title}>{title}</h4>
        <pc className={styles.preview}>{preview}</pc>
    </div>
  )
}

export default NewCard
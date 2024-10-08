import React from 'react'
import Image from 'next/image'
import styles from './preview.module.sass'

export default function Preview() {
  return (
    <div className={styles.main}>
      <div className={styles.about}>
        <p className={styles.text}>Svalka</p>
        <h1 className={styles.title}>Svalka is a web application that allows you to manage your contacts.</h1>
        <p className={styles.description}>By using Svalka you can easily manage your contacts</p>
      </div>
      <div className={styles.img}>
        <Image src="/svalka.png" alt="svalka" width={400} height={400} />
      </div>
    </div>
  )
}

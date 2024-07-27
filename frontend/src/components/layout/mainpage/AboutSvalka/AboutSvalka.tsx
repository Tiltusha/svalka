import React from 'react'
import styles from './AboutSvalka.module.sass'
import Image from 'next/image'

export default function AboutSvalka() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Let Your Newsletter Do the talk</h2>
      <p className={styles.text}>Let`s clam it , today we don`t the time to talk or time to scroll over groups or other
        plateforms . So it is better for your automated newsletter to do the tlk. What cloud be
        done better? Stay connected to your community.</p>
        <Image src='/dasboardDesign.png' alt='dashboard' width='1250' height='680'></Image>
    </section>
  )
}

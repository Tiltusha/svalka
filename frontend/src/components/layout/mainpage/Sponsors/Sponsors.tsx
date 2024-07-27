import React from 'react'
import styles from './sponsors.module.sass'
import Image from 'next/image'

export default function Sponsors() {
  return (
    <div className={styles.sponsors}>
      <Image src='/stripe.svg' alt='stripe' width={100} height={45}></Image>
      <Image src='/google.svg' alt='google' width={130} height={45}></Image>
      <Image src='/samsung.svg' alt='samsung' width={160} height={23}></Image>
      <Image src='/visa.svg' alt='visa' width={85} height={27}></Image>
      <Image src='/spotify.svg' alt='mastercard' width={100} height={40}></Image>
      <Image src='/linkedin.svg' alt='paypal' width={100} height={40}></Image>
      <Image src='/zoom.svg' alt='paypal' width={100} height={40}></Image>
    </div>
  )
}


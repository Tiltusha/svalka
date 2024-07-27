import React from 'react'
import styles from './AuthButton.module.sass'

export default function AuthButton({ children }: { children: React.ReactNode }) {
  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}

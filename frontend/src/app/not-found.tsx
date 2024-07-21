import Link from 'next/link'
import styles from '../styles/not-found.module.sass'
 
export default function NotFound() {
  return (
    
    <div className={styles.error_wrap}>
        <h1 data-t="404" className={styles.h1}>404</h1>
    </div>
  )
}
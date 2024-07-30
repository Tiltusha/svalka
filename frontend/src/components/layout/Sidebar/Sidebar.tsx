'use client'

import cn from 'clsx'
import { SunIcon } from 'lucide-react'
import Link from 'next/link'
import styles from './sidebar.module.sass'
import { MENU } from './sidebar.data'
import { getServerPathName } from '@/server-actions/get-path-name'
import { useSession } from 'next-auth/react'

export default function Sidebar() {
  const pathname = getServerPathName()
  const { data: session, status } = useSession();
  if (status === 'unauthenticated') return null

  return (
    <aside className={styles.sidebar}>
      <div>
        <Link href="/"><p className={styles.logo}>Svalka</p></Link>
      </div>
      <div className={styles.links}>
        {MENU.map(item => (
          <Link
            href={item.url}
            key={item.url}
            className={cn(styles.link, {
              [styles.active]: pathname === item.url,
            })}
          >
            <item.Icon
              size={24}
              color={pathname === item.url ? 'green' : session ? 'black' : 'gray'}
            />
          </Link>
        ))}
      </div>
      <div>
        <SunIcon
          size={24}
          color={session ? 'black' : 'gray'}
        />
      </div>
    </aside>
  )
}


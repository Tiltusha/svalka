import cn from 'clsx'

import React from 'react'
import { Sun } from 'lucide-react'
import Link from 'next/link'
import styles from './sidebar.module.sass'
import { MENU } from './sidebar.data'
import { getServerPathName } from '@/server-actions/get-path-name'

export default function Sidebar() {
  const pathname = getServerPathName()

  return (
    <aside className={styles.sidebar}>
      <div>
        Logo
      </div>
      <div className={styles.links}>
        {MENU.map(item => (
          <Link
            href={item.url}
            key={item.url}
            className={cn({
              [styles.active]: pathname === item.url,
            })}
          >
            <item.Icon size={24} />
          </Link>
        ))}
      </div>
      <div>
        <Sun />
      </div>
    </aside>
  )
}


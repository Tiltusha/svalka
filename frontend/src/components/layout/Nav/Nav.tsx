'use client';

import React from 'react';
import styles from './nav.module.sass';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

function Nav() {
    const { data: session, status } = useSession();

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                {status === 'unauthenticated' && (
                    <Link href="/">
                        <p className={styles.text}>Svalka</p>
                    </Link>
                )}
            </div>
            <div className={styles.buttons}>
                {status === 'authenticated' && <button>Sign Out</button>}
                {status === 'unauthenticated' && <button>Sign In</button>}
            </div>
        </nav>
    );
}

export default Nav;

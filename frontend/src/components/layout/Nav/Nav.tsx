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
                    {status === 'authenticated' && <button><Link href="/profile">Sign Out</Link>Sign Out</button>}
                    {status === 'unauthenticated' && <button><Link href="/login">Sign In</Link></button>}
                </div>
            </nav>
    );
}

export default Nav;

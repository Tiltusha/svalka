'use client';

import React from 'react';
import styles from './nav.module.sass';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import AuthButton from '../../buttons/authbutton/AuthButton';

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
                    {status === 'authenticated' && <AuthButton><Link href="/profile">Sign Out</Link></AuthButton>}
                    {status === 'unauthenticated' && <AuthButton><Link href="/login">Sign In</Link></AuthButton>}
                </div>
            </nav>
    );
}

export default Nav;

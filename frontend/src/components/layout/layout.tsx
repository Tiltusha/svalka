'use client';

import type { PropsWithChildren } from "react";
import { useSession } from 'next-auth/react';
import styles from "./layout.module.sass";
import Sidebar from "./Sidebar/Sidebar";
import Nav from "./Nav/Nav";

export default function LayoutClient({ children }: PropsWithChildren<unknown>) {
    const { data: session } = useSession();

    return (
        <main className={styles.layout}>
            {session && <Sidebar />}
            <div className={styles.nav}>
                <Nav />
            </div>
            <section className={session ? styles.contentWithSidebar : styles.contentFullWidth}>
                {children}
            </section>
        </main>
    );
}


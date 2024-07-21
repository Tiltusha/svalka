'use client';

import type { PropsWithChildren } from "react";
import styles from "./layout.module.sass";
import Sidebar from "./Sidebar/Sidebar"
import Nav from "./Nav/Nav"

export default function LayoutClient({ children }: PropsWithChildren<unknown>) {
    return (
    <main className={styles.layout}>
        <Sidebar />
        <div className={styles.nav}>
            <Nav />
        </div>
        <section className={styles.content}>{children}</section>
    </main>
    );
}
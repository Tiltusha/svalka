import type { PropsWithChildren } from "react";
import styles from "./layout.module.sass";
import Sidebar from "./Sidebar/Sidebar"

export default function LayoutClient({ children }: PropsWithChildren<unknown>) {
    return (
    <main className={styles.layout}>
        <Sidebar />
        <section className={styles.content}>{children}</section>
    </main>
    );
}
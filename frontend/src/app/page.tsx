'use client';

import Image from "next/image";
import styles from "./page.module.sass";
import Preview from "../components/layout/mainpage/Preview/Preview";
import Sponsors from "../components/layout/mainpage/Sponsors/Sponsors";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (session) { 
    return (
    <section className={styles.section}>
      <p>Добро пожаловать, {session.user.name}!</p>
    </section>);
  }

  return (
    <main className={styles.main}>
      <Preview />
      <Sponsors />
    </main>
  );
}

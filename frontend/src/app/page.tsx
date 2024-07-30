'use client';

import Image from "next/image";
import styles from "./page.module.sass";
import Preview from "../components/layout/mainpage/Preview/Preview";
import Sponsors from "../components/layout/mainpage/Sponsors/Sponsors";
import AboutSvalka from "../components/layout/mainpage/AboutSvalka/AboutSvalka";
import TablesSection from "../components/layout/mainpage/TablesSection/TablesSection";
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
      <AboutSvalka />
      <TablesSection />
    </main>
  );
}

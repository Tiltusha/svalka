import Image from "next/image";
import styles from "./page.module.sass";
import Preview from "../components/layout/mainpage/Preview/Preview";
import Sponsors from "../components/layout/mainpage/Sponsors/Sponsors";

export default function Home() {
  return (
    <main className={styles.main}>
      <Preview />
      <Sponsors />
    </main>
  );
}

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Download from "../components/Download";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>iv. Irregular Verbs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Download />
    </div>
  );
}

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Download from "../components/Download";
import Meta from "../components/Meta";

export default function Home() {
  return (
    <div className={styles.container}>
      <Meta />
      <Header />
      <Download />
    </div>
  );
}

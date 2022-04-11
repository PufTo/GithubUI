import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const inputRef = useRef();
  const route = useRouter();

  const handleSearchRepo = () => {
    route.push(`/${inputRef.current.value}`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <input ref={inputRef}></input>
        <button onClick={handleSearchRepo}>Show repos</button>
      </main>
    </div>
  );
}

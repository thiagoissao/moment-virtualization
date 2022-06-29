import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Eureka Virtualization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Eureka Moment - Virtualization
        </h1>

        <p className={styles.description}>
          Please, choose one of the following options below
        </p>

        <div className={styles.grid}>
          <a href="/svsm" className={styles.card}>
            <h2>Sem virtualização e sem memoização</h2>
          </a>

          <a href="/svcm" className={styles.card}>
            <h2>Sem virtualização e com memoização</h2>
          </a>

          <a href="/cvsm" className={styles.card}>
            <h2>Com virtualização e sem memoização</h2>
          </a>

          <a href="/cvcm" className={styles.card}>
            <h2>Com virtualização e com memoização</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://teceo.co" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/logo.png" alt="Vercel Logo" width={52} height={40} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

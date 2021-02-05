import Head from 'next/head';
import styles from '../styles/Home.module.css';

var ReplaceMe = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>REPLACE ME</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the <span className={styles.cdk}>CDK</span>{' '}
          <span className={styles.link}>React</span>/Next.js Starter Project{' '}
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/_app.js</code>
          <br />
          Remove the ReplaceMe component, and have at it.
        </p>

        <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/master/examples'
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default ReplaceMe;

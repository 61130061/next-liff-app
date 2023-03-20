import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home({ liff, liffError }) {

  if (!liff) {
    return (
      <div>loading...</div>
    )
  }

  return (
    <div>
      <Head>
        <title>NextJS LIFF App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-4xl font-bold my-3 text-indigo-400">create-liff-app</h1>
        <div className="my-3">
          {liff && <p>LIFF init succeeded.</p>}
          {liffError && (
            <> <p>LIFF init failed.</p>
              <p>
                <code>{liffError}</code>
              </p>
            </>
          )}
          <div>on {liff.isInClient() ? 'LIFF browser':'external browser'}</div>
        </div>
        {!liff.isLoggedIn() &&
          <button className="px-3 py-1 bg-blue-500 rounded text-white my-3">Login</button>
        }
      </main>
    </div>
  );
}

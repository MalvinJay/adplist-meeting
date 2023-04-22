import { AppProps } from 'next/app';
import Head from 'next/head';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import './styles.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to user profile!</title>
      </Head>
      <main className="app">
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </main>
    </>
  );
}

export default CustomApp;

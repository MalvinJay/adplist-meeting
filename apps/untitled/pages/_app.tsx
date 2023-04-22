import { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Head from 'next/head';
import './styles.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to AdpList!</title>
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

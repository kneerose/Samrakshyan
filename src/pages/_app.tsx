import '../../styles/globals.css';
import Router from 'next/router';
import nProgress from 'nprogress';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Logo from '../assets/images/logo.png';
import { NextPageWithLayout } from '../types';
import { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from '../components/ui/nprocess';
type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    Router.events.on('routeChangeStart', () => {
        nProgress.start();
    });
    Router.events.on('routeChangeComplete', () => {
        nProgress.done();
    });
    const getLayout = Component.getLayout ?? ((page) => page);
    return (
        <>
            <Head>
                <title>संरक्षण</title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <NextNProgress color="#f04444" startPosition={0} stopDelayMs={400} height={5} options={{ easing: 'ease' }} />
            <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
        </>
    );
}
export default MyApp;

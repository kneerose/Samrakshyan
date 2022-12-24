import "../../styles/globals.css";
import Router from "next/router";
import nProgress from "nprogress";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { NextPageWithLayout } from "../types";
import { AppProps } from "next/app";
import { NextSeo } from "next-seo";
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  Router.events.on("routeChangeStart", () => {
    nProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    nProgress.done();
  });
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <div>
      <NextSeo title="संरक्षण" />
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </div>
  );
}

// MyApp.getInitialProps = async ({ Component, ctx }) => {
//   let pageProps = {};
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }
//   return { pageProps };
// };
export default MyApp;

import type { AppProps } from "next/app";
import "../styles/globals.css";
import dynamic from "next/dynamic";
import React from "react";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});

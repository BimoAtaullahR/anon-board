import type { Metadata } from "next";
import "../app/globals.css";
import type { AppProps } from "next/app";

export const metadata: Metadata = {
  title: "Anon Board",
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lato, Montserrat, Open_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const openSans = Open_Sans({
  weight: ["300", "400", "700"],
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${lato.className} ${montserrat.variable} ${openSans.variable}`}
    >
      <Head>
        <link
          rel="shortcut icon"
          href="/icon/favicon.ico"
          type="image/x-icon"
        />
        <title>Subid Das - Dashboard UI Test</title>
      </Head>
      <Component {...pageProps} />
      <Toaster />
    </div>
  );
}

import localFont from "next/font/local";
import type { AppProps } from "next/app";
import "@/styles/theme.css";
import "@/styles/globals.css";

const ubuntu = localFont({
  src: [
    {
      path: "../fonts/Ubuntu-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Ubuntu-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Ubuntu-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={ubuntu.className}>
      <Component {...pageProps} />
    </div>
  );
}

import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: any) {
  const getLayout = Component.getLayout || ((page: any) => page);

  return getLayout(<Component {...pageProps} />);
}

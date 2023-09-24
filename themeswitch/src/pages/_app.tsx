import { AppProps } from 'next/app';
import MyProvider from '@/Context/Provider';

function App({ Component, pageProps }: AppProps) {
  return (
    <MyProvider>
      <Component {...pageProps} />
    </MyProvider>
  );
}

export default App;

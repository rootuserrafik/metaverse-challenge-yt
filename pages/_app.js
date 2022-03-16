import '../styles/globals.css';
import { MoralisProvider } from 'react-moralis';
import '../styles/style.css';

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider 
      appId={process.env.NEXT_PUBLIC_KEY_APP_ID} 
      serverUrl={process.env.NEXT_PUBLIC_KEY_SERVER_URL}
      >
      <Component {...pageProps} />
    </MoralisProvider>
  );
};

export default MyApp

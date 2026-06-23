import Ubuntu from "../components/ubuntu";
import ReactGA from 'react-ga4';
import Meta from "../components/SEO/Meta";

if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_TRACKING_ID) {
  ReactGA.initialize(process.env.NEXT_PUBLIC_TRACKING_ID);
}

function App() {
  return (
    <>
      <Meta />
      <Ubuntu />
    </>
  )
}

export default App;

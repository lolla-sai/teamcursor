import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
// ..

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init();
    }, []);
    return <Component {...pageProps} />;
}

export default MyApp;

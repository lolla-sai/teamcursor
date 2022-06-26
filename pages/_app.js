import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

import { createClient } from "next-sanity";

// import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: "g0r9zjpb",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false,
});

// ..

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init();
    }, []);
    return <Component {...pageProps} />;
}

export default MyApp;

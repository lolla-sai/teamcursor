import Head from "next/head";
import WorkInProgress from "../../components/WorkInProgress";

function PixelHome() {
    return (
        <>
            <Head>
                <title>Pixel Magazine</title>
                <meta name="description" content="Pixel 2022 by Cursor" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <WorkInProgress />
            </div>
        </>
    );
}

export default PixelHome;

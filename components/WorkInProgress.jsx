import Link from "next/link";
import Header from "./HeaderDefault";

function WorkInProgress() {
    return (
        <div>
            <Header />
            <div className="text-center min-h-screen flex items-center">
                <div>
                    <h1 className="lg:text-9xl md:text-7xl text-6xl text-gray-900 font-bold my-16">
                        Great things coming soon...{" "}
                        <span className="block m-4">😉</span>
                    </h1>

                    <div className="buttons justify-center flex gap-4 md:flex-row flex-col items-center">
                        <button className="inline-block px-4 py-2 border-green-500 border-2 rounded hover:bg-green-500 hover:-translate-y-1 hover:shadow-lg transition-all">
                            Give suggestions for this page
                        </button>

                        <Link href="/">
                            <a className="inline-block px-4 py-2 border-gray-200 border-2 rounded hover:bg-gray-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                                Take me back Home
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkInProgress;

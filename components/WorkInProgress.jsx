import Link from "next/link";
import Header from "./HeaderDefault";

function WorkInProgress() {
    return (
        <div>
            <Header />
            <div className="text-center min-h-screen flex items-center">
                <div>
                    <h1 className="text-9xl text-gray-900 font-bold my-16">
                        Great things coming soon... 😉
                    </h1>

                    <div className="buttons justify-center flex space-x-5">
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

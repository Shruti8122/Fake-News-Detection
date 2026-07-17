import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6">

            <div className="max-w-xl w-full bg-white rounded-xl shadow-md p-10 text-center">

                <div className="text-7xl mb-4">
                    📰
                </div>

                <h1 className="text-7xl font-extrabold text-cyan-600">
                    404
                </h1>

                <h2 className="mt-3 text-3xl font-bold text-gray-800">
                    Page Not Found
                </h2>

                <p className="mt-5 text-gray-600 leading-8">
                    Sorry, the page you're looking for doesn't exist or may have
                    been moved. You can return to the homepage and continue
                    detecting fake news articles.
                </p>

                <Link
                    to="/"
                    className="inline-block mt-8 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
                >
                    ← Back to Home
                </Link>

            </div>

        </div>
    );
};

export default NotFound;
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">

            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo */}

                <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-2xl">
                        📰
                    </div>

                    <div>

                        <h1 className="text-xl font-bold text-gray-800">
                            AI-Powered Fake News Detection
                        </h1>

                        <p className="text-sm text-gray-500">
                            Machine Learning News Classifier
                        </p>

                    </div>

                </div>

                {/* Navigation */}

                <div className="flex items-center gap-3">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `px-5 py-2 rounded-lg transition font-medium ${isActive
                                ? "bg-cyan-600 text-white"
                                : "text-gray-700 hover:bg-cyan-50 hover:text-cyan-600"
                            }`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `px-5 py-2 rounded-lg transition font-medium ${isActive
                                ? "bg-cyan-600 text-white"
                                : "text-gray-700 hover:bg-cyan-50 hover:text-cyan-600"
                            }`
                        }
                    >
                        About
                    </NavLink>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;
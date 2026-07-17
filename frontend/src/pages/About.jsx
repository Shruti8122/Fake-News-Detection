const About = () => {
    const technologies = [
        "React",
        "Tailwind CSS",
        "Flask API",
        "Python",
        "Scikit-learn",
        "Pandas",
        "NLTK",
        "TF-IDF",
        "Random Forest",
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">

            {/* Header */}
            <div className="text-center mb-14">

                <div className="text-6xl mb-4">📰</div>

                <h1 className="text-5xl font-bold text-cyan-600">
                    AI-Powered Fake News Detection
                </h1>

                <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
                    Analyze news articles using Artificial Intelligence and Machine
                    Learning to determine whether the content is likely to be
                    <span className="font-semibold text-green-600"> Real</span> or
                    <span className="font-semibold text-red-600"> Fake</span>.
                </p>

            </div>

            {/* Features */}

            <div className="grid md:grid-cols-3 gap-6 mb-14">

                <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">

                    <div className="text-5xl">🌲</div>

                    <h2 className="text-2xl font-semibold mt-5 mb-3">
                        Random Forest
                    </h2>

                    <p className="text-gray-600">
                        Ensemble learning model trained to classify news articles
                        with high accuracy.
                    </p>

                </div>

                <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">

                    <div className="text-5xl">⚡</div>

                    <h2 className="text-2xl font-semibold mt-5 mb-3">
                        Flask REST API
                    </h2>

                    <p className="text-gray-600">
                        Delivers predictions securely between the backend and
                        frontend.
                    </p>

                </div>

                <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">

                    <div className="text-5xl">💻</div>

                    <h2 className="text-2xl font-semibold mt-5 mb-3">
                        React Frontend
                    </h2>

                    <p className="text-gray-600">
                        Responsive interface built with React and Tailwind CSS.
                    </p>

                </div>

            </div>

            {/* Pipeline */}

            <div className="bg-white rounded-xl shadow-md p-8 mb-14">

                <h2 className="text-3xl font-bold text-center mb-10">
                    Machine Learning Pipeline
                </h2>

                <div className="flex flex-wrap justify-center items-center gap-5 text-lg">

                    <div className="bg-cyan-50 border border-cyan-200 rounded-lg px-5 py-3">
                        📰 News
                    </div>

                    <span>→</span>

                    <div className="bg-cyan-50 border border-cyan-200 rounded-lg px-5 py-3">
                        🧹 Cleaning
                    </div>

                    <span>→</span>

                    <div className="bg-cyan-50 border border-cyan-200 rounded-lg px-5 py-3">
                        📊 TF-IDF
                    </div>

                    <span>→</span>

                    <div className="bg-cyan-50 border border-cyan-200 rounded-lg px-5 py-3">
                        🌲 Random Forest
                    </div>

                    <span>→</span>

                    <div className="bg-green-600 text-white rounded-lg px-5 py-3">
                        Prediction
                    </div>

                </div>

            </div>

            {/* Technologies */}

            <div className="mb-14">

                <h2 className="text-3xl font-bold text-center mb-8">
                    Technologies Used
                </h2>

                <div className="flex flex-wrap justify-center gap-3">

                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="bg-cyan-100 text-cyan-800 px-5 py-2 rounded-full font-medium"
                        >
                            {tech}
                        </span>
                    ))}

                </div>

            </div>

            {/* Overview */}

            <div className="bg-white rounded-xl shadow-md p-8">

                <h2 className="text-3xl font-bold mb-5">
                    Project Overview
                </h2>

                <p className="text-gray-600 leading-8">
                    Fake news has become a significant challenge in today's digital
                    world. This project applies Natural Language Processing (NLP)
                    techniques and a Random Forest classifier to analyze news
                    articles and predict whether they are real or fake. The backend
                    is implemented using Flask, while the frontend is built with
                    React and Tailwind CSS to provide a simple and intuitive user
                    experience.
                </p>

            </div>

        </div>
    );
};

export default About;
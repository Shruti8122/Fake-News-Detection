import { useState } from "react";
import Result from "../Components/Result";

const Home = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [news, setNews] = useState("");
    const [prediction, setPrediction] = useState("");
    const [confidence, setConfidence] = useState(0);

    const handlePredict = async (e) => {
        e.preventDefault();
        setIsClicked(false);

        if (!news.trim()) {
            setError("Please enter a news article.");
            return;
        }

        try {
            setLoading(true);
            setError("");

            const response = await fetch("http://127.0.0.1:5000/predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    news,
                }),
            });

            const data = await response.json();

            setPrediction(data.prediction);
            setConfidence(data.confidence);

            setIsClicked(true);
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto px-6 py-12">

            <div className="text-center mb-10">

                <div className="text-6xl mb-4">
                    📰
                </div>

                <h1 className="text-5xl font-bold text-cyan-600">
                    Fake News Detection
                </h1>

                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    Paste a news article below to determine whether it is
                    <span className="font-semibold text-green-600"> Real</span> or
                    <span className="font-semibold text-red-600"> Fake</span>
                    {" "}using a trained Random Forest model.
                </p>

            </div>

            <div className="bg-white rounded-xl shadow-md p-8">

                <form onSubmit={handlePredict}>

                    <label className="block text-lg font-semibold text-gray-700 mb-3">
                        Enter News Article
                    </label>

                    <textarea
                        rows={10}
                        placeholder="Paste the news article here..."
                        value={news}
                        onChange={(e) => setNews(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                    />

                    {error && (
                        <p className="mt-4 text-red-600 font-medium">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-6 w-full bg-cyan-600 hover:bg-cyan-700 transition text-white font-semibold py-3 rounded-lg disabled:bg-cyan-300"
                    >
                        {loading ? "Predicting..." : "Predict"}
                    </button>

                </form>

            </div>

            {isClicked && (
                <Result
                    confidence={confidence}
                    prediction={prediction}
                />
            )}

        </div>
    );
};

export default Home;
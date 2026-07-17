const Result = ({ confidence, prediction }) => {
    const isFake = prediction === "Fake News";

    return (
        <div className="max-w-4xl mx-auto mt-10">

            <div className="bg-white rounded-xl shadow-md p-8">

                <h2 className="text-3xl font-bold text-center text-cyan-600 mb-8">
                    Prediction Result
                </h2>

                <div className="space-y-5">

                    <div className="flex justify-between items-center p-5 bg-gray-50 rounded-lg border">

                        <span className="text-lg font-semibold text-gray-700">
                            Prediction
                        </span>

                        <span
                            className={`px-5 py-2 rounded-full text-white font-semibold ${isFake
                                    ? "bg-red-600"
                                    : "bg-green-600"
                                }`}
                        >
                            {isFake ? "🚨 Fake News" : "✅ Real News"}
                        </span>

                    </div>

                    <div className="flex justify-between items-center p-5 bg-gray-50 rounded-lg border">

                        <span className="text-lg font-semibold text-gray-700">
                            Confidence
                        </span>

                        <span className="text-2xl font-bold text-cyan-600">
                            {confidence}%
                        </span>

                    </div>

                    <div className="flex justify-between items-center p-5 bg-gray-50 rounded-lg border">

                        <span className="text-lg font-semibold text-gray-700">
                            Model Used
                        </span>

                        <span className="font-semibold text-gray-800">
                            Random Forest
                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Result;
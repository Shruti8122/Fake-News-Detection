from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import re
import string

app = Flask(__name__)
CORS(app)

model = joblib.load("models/fake_news_random_forest.pkl")
vectorizer = joblib.load("models/tfidf_vectorizer.pkl")

def clean_text(text):
    text = text.lower()

    text = re.sub(r"http\S+", "", text)
    text = re.sub(r"www\S+", "", text)
    text = re.sub(r"<.*?>", "", text)
    text = re.sub(r"\d+", "", text)

    text = text.translate(
        str.maketrans("", "", string.punctuation)
    )

    text = re.sub(r"\s+", " ", text).strip()

    return text


@app.route("/")
def home():
    return jsonify({
        "message": "Fake News Detection API is running."
    })



@app.route("/predict", methods=["POST"])
def predict():

    data = request.get_json()

    if not data or "news" not in data:
        return jsonify({
            "error": "No news text provided."
        }), 400

    news = data["news"]

    cleaned = clean_text(news)

    vector = vectorizer.transform([cleaned])

    prediction = model.predict(vector)[0]

    confidence = float(model.predict_proba(vector).max() * 100)

    if prediction == 1:
        label = "Real News"
    else:
        label = "Fake News"

    return jsonify({
        "prediction": label,
        "confidence": round(confidence, 2)
    })


import os

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
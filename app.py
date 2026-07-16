import streamlit as st
import joblib
import re
import string

st.set_page_config(
    page_title="Fake News Detection",
    page_icon="📰",
    layout="centered"
)

try:
    model = joblib.load("models/fake_news_random_forest.pkl")
    vectorizer = joblib.load("models/tfidf_vectorizer.pkl")
except FileNotFoundError:
    st.error("Model files not found. Please check the models folder.")
    st.stop()

def clean_text(text):
    text = text.lower()
    text = re.sub(r"http\S+", "", text)
    text = re.sub(r"www\S+", "", text)
    text = re.sub(r"<.*?>", "", text)
    text = re.sub(r"\d+", "", text)
    text = text.translate(str.maketrans("", "", string.punctuation))
    text = re.sub(r"\s+", " ", text).strip()
    return text


st.title("📰 AI-Powered Fake News Detection")

st.write(
    "Paste a news article below to predict whether it is **Real** or **Fake** using a trained Random Forest model."
)

news = st.text_area(
    "Enter News Article",
    height=250,
    placeholder="Paste the news article here..."
)

if st.button("Predict"):

    if news.strip() == "":
        st.warning("Please enter a news article.")
    else:

        cleaned = clean_text(news)

        vector = vectorizer.transform([cleaned])

        prediction = model.predict(vector)[0]

        confidence = model.predict_proba(vector).max() * 100

        st.divider()

        st.subheader("Prediction")

        if prediction == 1:
            st.success("🟢 Real News")
        else:
            st.error("🔴 Fake News")

        st.write(f"**Confidence:** {confidence:.2f}%")

        st.divider()

        st.caption("Model Used: Random Forest")
# 📰 AI-Powered Fake News Detection

A full-stack machine learning application that classifies news articles as **Real** or **Fake** using **Natural Language Processing (NLP)** and a **Random Forest** classifier.

The project features a **React frontend**, a **Flask REST API backend**, and a trained machine learning model for real-time fake news detection.

---

## 📖 Overview

Fake news has become one of the major challenges of the digital era, spreading misinformation across social media and online platforms. This project leverages Machine Learning and NLP techniques to automatically analyze news articles and determine whether they are likely to be real or fake.

The application provides an intuitive React-based user interface where users can paste a news article and instantly receive a prediction along with the model's confidence score.

---

## 🚀 Features

- Detects Real and Fake news articles
- React frontend with responsive UI
- Flask REST API backend
- Random Forest classifier
- TF-IDF text vectorization
- Confidence score for each prediction
- Easy-to-use interface

---

## 🛠 Tech Stack

### Frontend

- React
- Tailwind CSS
- React Router DOM

### Backend

- Flask
- Flask-CORS
- Python

### Machine Learning

- Scikit-learn
- Random Forest
- TF-IDF Vectorizer
- NLTK
- Pandas
- NumPy

---

## 🧠 Machine Learning Pipeline

```
News Article
      │
      ▼
Text Cleaning
      │
      ▼
TF-IDF Vectorization
      │
      ▼
Random Forest Classifier
      │
      ▼
Prediction
```

---

## 📂 Project Structure

```
Fake_News_Detection
│
├── dataset/
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── models/
│   ├── fake_news_random_forest.pkl
│   └── tfidf_vectorizer.pkl
│
├── app.py
├── requirements.txt
├── README.md
└── train_model.py
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone <repository-url>
```

```bash
cd Fake_News_Detection
```

---

### Install Backend Dependencies

```bash
pip install -r requirements.txt
```

---

### Run Flask API

```bash
python app.py
```

The backend will start at:

```
http://127.0.0.1:5000
```

---

### Run Frontend

Navigate to the frontend directory.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

The frontend will be available at:

```
http://localhost:5173
```

---

## 📡 API Endpoint

### POST `/predict`

Request

```json
{
  "news": "Paste your news article here..."
}
```

Response

```json
{
  "prediction": "Real News",
  "confidence": 99.72
}
```

---

## 📸 Application

The application allows users to:

- Paste a news article
- Click the Predict button
- View whether the article is Real or Fake
- View the model confidence score

---

## 📊 Model

**Algorithm**

- Random Forest Classifier

**Feature Extraction**

- TF-IDF Vectorizer

**Text Preprocessing**

- Lowercase conversion
- URL removal
- HTML tag removal
- Number removal
- Punctuation removal
- Extra whitespace removal

---

## 📁 Dataset

This project uses the **Real & Fake News Dataset** available on Kaggle.

Dataset License:

**CC BY-NC-SA 4.0 (Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International)**

Please refer to the original dataset page for attribution and licensing details before using the dataset for any commercial purpose.

---

## 📜 License

This project is intended for educational and research purposes.

Please ensure compliance with the dataset's **CC BY-NC-SA 4.0** license when redistributing or using the dataset.

---

## 👩‍💻 Author

**Shruti Singh**

B.Tech CSE (Artificial Intelligence & Machine Learning)

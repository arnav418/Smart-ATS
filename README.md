# Smart-ATS — Full-Stack Resume ATS Checker

Smart-ATS is a **full-stack web application** that analyzes a resume against a given job description and provides an **ATS (Applicant Tracking System) match score**, **missing keywords**, and **actionable suggestions** to improve resume alignment.

The application is **job-role agnostic**, meaning it works for **any Job Description** (Full Stack, Frontend, Backend, QA, Analyst, etc.).

---

## 🌐 Live Demo

- **Frontend (Vercel):**  
  https://smart-ats-gamma.vercel.app/

- **Backend API (Render):**  
  https://smart-ats-tdb9.onrender.com

---

## 🧩 Problem Statement

Many candidates are rejected during the initial screening phase because their resumes are **not optimized for ATS software**, even if they are technically qualified.

Recruiters rely on ATS systems that filter resumes based on **keyword relevance** to job descriptions.

**Smart-ATS solves this problem by:**
- Comparing resume content with job descriptions
- Calculating an ATS compatibility score
- Identifying missing keywords
- Providing clear improvement suggestions

---

## ✨ Features

- 📄 Upload resume in **PDF format**
- 📝 Paste any **Job Description**
- 📊 ATS Match Score (percentage)
- ❌ Missing keyword identification
- 💡 Resume improvement suggestions
- ⚡ Real-time analysis
- 🌍 Fully deployed production-ready application

---

## 🛠 Tech Stack

### Frontend
- React.js (Vite)
- HTML5, CSS3
- Fetch API
- Deployed on **Vercel**

### Backend
- Python
- Flask
- Flask-CORS
- PyPDF2 (PDF text extraction)
- Gunicorn (production WSGI server)
- Deployed on **Render**

---

## 🧱 Project Structure

Smart-ATS/
│
├── backend/
│ ├── app.py
│ ├── utils.py
│ └── requirements.txt
│
├── frontend/
│ ├── src/
│ ├── index.html
│ └── package.json
│
└── README.md

---

## ⚙️ How It Works

1. User uploads a **resume PDF**
2. User pastes a **job description**
3. Backend:
   - Extracts text from the resume PDF
   - Cleans and normalizes text
   - Extracts keywords
   - Compares resume keywords with job description keywords
4. System calculates:
   - ATS Match Score
   - Missing Keywords
   - Suggestions
5. Results are displayed on the frontend dashboard

---

## 📐 ATS Score Calculation Logic

### ATS Score Formula
ATS Score (%) =
(Matched JD Keywords / Total JD Keywords) × 100

## 🔁 Local Setup (Optional)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/arnav418/Smart-ATS.git
cd Smart-ATS

cd backend
pip install -r requirements.txt
python app.py

cd frontend
npm install
npm run dev

from flask import Flask, request, jsonify
from flask_cors import CORS
from utils import analyze_resume
import PyPDF2

app = Flask(__name__)
CORS(app)

@app.route("/health", methods=["GET"])
def health():
    return {"status": "ok"}

def extract_text_from_pdf(file):
    reader = PyPDF2.PdfReader(file)
    text = ""
    for page in reader.pages:
        text += page.extract_text() or ""
    return text

@app.route("/analyze", methods=["POST"])
def analyze():
    resume_file = request.files.get("resume")
    jd_text = request.form.get("jd")

    if not resume_file or not jd_text:
        return jsonify({"error": "Resume file and JD required"}), 400

    resume_text = extract_text_from_pdf(resume_file)

    result = analyze_resume(resume_text, jd_text)
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)

import re

STOPWORDS = {
    "and","or","the","to","of","in","for","with","on","at","by","a","an",
    "is","are","was","were","be","been","being",
    "can","will","should","must",
    "across","additional","using","use","used",
    "this","that","these","those",
    "role","responsibilities","requirements","experience"
}



def clean_text(text):
    text = text.lower()
    text = re.sub(r"[^a-z ]", " ", text)
    words = text.split()
    return set(w for w in words if w not in STOPWORDS)

def analyze_resume(resume, jd):
    resume_words = clean_text(resume)
    jd_words = clean_text(jd)

    matched = resume_words & jd_words
    missing = jd_words - resume_words

    ats_score = round((len(matched) / len(jd_words)) * 100, 2) if jd_words else 0

    return {
        "ats_score": ats_score,
        "matched_keywords": sorted(list(matched)),
        "missing_keywords": sorted(list(missing))[:15],
        "suggestions": [
            "Add missing keywords if you have relevant experience",
            "Tailor project descriptions to match the job description",
            "Use action verbs like developed, implemented, designed"
        ]
    }

from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline

app = Flask(__name__)
CORS(app)  # <--- This is critical!

summarizer = pipeline("summarization", model="t5-small")

@app.route('/summarize', methods=['POST'])
def summarize():
    data = request.get_json()
    text = data.get('text', '')
    if not text.strip():
        return jsonify({'summary': 'No input provided.'})
    result = summarizer(text, max_length=100, min_length=25, do_sample=False)
    return jsonify({'summary': result[0]['summary_text']})

if __name__ == '__main__':
    app.run(port=3001)

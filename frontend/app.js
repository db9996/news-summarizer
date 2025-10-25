document.getElementById('summarizeBtn').onclick = async () => {
  const text = document.getElementById('newsText').value;
  document.getElementById('summaryOutput').innerText = 'Summarizing...';
  const resp = await fetch('http://localhost:3001/summarize', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });
  const data = await resp.json();
  document.getElementById('summaryOutput').innerText = data.summary;
};

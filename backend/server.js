const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// POST /summarize: endpoint expects { text: ... }
app.post('/summarize', async (req, res) => {
  const { text } = req.body;
  // For now: dummy summary
  res.json({ summary: 'Demo summary! (Replace this with AI model)' });
});

app.listen(3001, () => console.log('Summarizer API running on 3001'));

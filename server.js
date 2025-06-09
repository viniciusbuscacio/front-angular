const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const TARGET_URL = process.env.TARGET_URL || 'http://localhost:8080/archetype';

app.post('/archetype', async (req, res) => {
  try {
    const response = await axios.post(TARGET_URL, req.body);
      res.status(response.status).json(response.data);
  } catch (err) {
    if (err.response) {
      res.status(err.response.status).json(err.response.data);
    } else {
      res.status(500).json({ error: 'Unable to reach the archetype service' });
    }
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

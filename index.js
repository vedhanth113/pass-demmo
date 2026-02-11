const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("Hello! This is the practical: Implementation of Platform as a Service (PaaS) in Public Cloud Environment.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

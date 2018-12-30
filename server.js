require('dotenv').config();
const express = require('express');
const path = require('path');
const helmet = require('helmet');

// Port should match webpack config URL
const port = 7800;

const app = express();

app.use(helmet());

app.use(express.static(path.join(__dirname, 'docs')));

app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs/index.html'));
});

app.listen(process.env.PORT || port, () => {
  console.log(`Listening on port ${port}`);
});

import express from 'express';
const v0 = express.Router();

v0.get('/', (req, res) => {
  res.send('Hello World!');
});

export default v0
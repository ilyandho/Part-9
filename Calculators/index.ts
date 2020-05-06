import express from 'express';

import calculateBmi from './calculateBmi';

const app = express();

app.get('/ping', (_req, res) => {
  res.send('hey');
});

app.get('/bmi', (req, res) => {
  let { height, weight } = req.query;
  if (isNaN(Number(height)) || isNaN(Number(weight))) {
    return res.status(400).json({ error: 'malformatted parameters' });
  }

  const parsedWeight = Number(weight);
  const parsedHeight = Number(height);
  const result = calculateBmi(parsedWeight, parsedHeight);

  res
    .status(200)
    .json({ weight: parsedWeight, height: parsedHeight, bmi: result });
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

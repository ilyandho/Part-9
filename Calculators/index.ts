import express from 'express';
import bodyParser from 'body-parser';
import calculateBmi from './calculateBmi';
import exerciseCalculator from './exerciseCalculator';

const app = express();
app.use(bodyParser.json());

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

app.post('/exercises', (req, res) => {
  const { daily_exercises, target } = req.body;
  if (!req.body.target || !req.body.daily_exercises) {
    return res.status(400).json({ error: 'Parameters mising' });
  }

  if (isNaN(Number(req.body.target))) {
    return res.status(400).json({ error: 'Malformated parameters' });
  }

  let NaNExercise: boolean = false;
  daily_exercises.map((exercise: number) => {
    if (isNaN(Number(exercise))) {
      NaNExercise = true;
    }
  });

  if (NaNExercise) {
    return res.status(400).json({ error: 'Malformated parameters' });
  }
  const result = exerciseCalculator(daily_exercises, target);
  res.status(200).json(result);
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

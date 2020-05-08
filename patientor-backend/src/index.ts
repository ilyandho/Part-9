import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import diagnosesRouter from './routes/diagnoses';
import patientsRouter from './routes/patients';

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = 3001;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.get('/api/ping', (_req, res) => {
  res.send('pong');
});

app.use('/api/diagnoses', diagnosesRouter);
app.use('/api/patients', patientsRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

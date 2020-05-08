import express from 'express';

import diagnosesService from '../services/diagnoses';

const diagnosesRouter = express.Router();

diagnosesRouter.get('/', (_req, res) => {
  res.status(200).send(diagnosesService.getDiagnoses());
});

export default diagnosesRouter;

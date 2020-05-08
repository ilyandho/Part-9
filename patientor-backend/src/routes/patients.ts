import express from 'express';

import patientsService from '../services/patients';
import toNewPatient from '../utils';

const patientsRouter = express.Router();

patientsRouter.get('/', (_req, res) => {
  res.status(200).send(patientsService.getNonSensitivePatientDetails());
});

patientsRouter.post('/', (req, res) => {
  try {
    const newPatientEntry = toNewPatient(req.body);
    const newPatient = patientsService.addPatient(newPatientEntry);
    res.status(200).json(newPatient);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

export default patientsRouter;

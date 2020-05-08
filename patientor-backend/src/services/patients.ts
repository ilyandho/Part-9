import { uuid } from 'uuidv4';

import { patients } from '../data';
import { Patient, NewPatient, NonSensitivePatientDetails } from '../types';

const getPatients = (): Array<Patient> => {
  return patients;
};
const getNonSensitivePatientDetails = (): NonSensitivePatientDetails[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};
const addPatient = (patient: NewPatient) => {
  const newPatient: Patient = { id: uuid(), ...patient };
  patients.push(newPatient);
  return newPatient;
};

export default { getPatients, addPatient, getNonSensitivePatientDetails };

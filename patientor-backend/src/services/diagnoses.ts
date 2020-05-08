import { diagonoses } from '../data';

import { Diagonosis } from '../types';

const getDiagnoses = (): Array<Diagonosis> => {
  return diagonoses;
};

const addDiagnosis = () => {
  return null;
};

export default { getDiagnoses, addDiagnosis };

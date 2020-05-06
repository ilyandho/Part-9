interface ResultValues {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const exerciseCalculator = (
  exercises: Array<number>,
  target: number
): ResultValues => {
  const average = exercises.reduce((acc, sum) => sum + acc) / exercises.length;
  const trainingDays = exercises.filter((exercise) => exercise !== 0).length;
  let ratingDescription = '';
  let rating = 0;

  if ((average / target) * 100 >= 100) {
    ratingDescription = 'Great work, you succeeded!!!';
    rating = 3;
  } else if ((average / target) * 100 > 50) {
    ratingDescription = 'not too bad but could be better';
    rating = 2;
  } else {
    ratingDescription = 'you need to see the teacher';
    rating = 1;
  }

  return {
    periodLength: exercises.length,
    trainingDays,
    success: average > target,
    rating,
    ratingDescription,
    target,
    average,
  };
};

console.log(exerciseCalculator([3, 0, 2, 4.5, 0, 3, 1], 2));

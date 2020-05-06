interface ResultValues {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface parsedValues {
  exercises: Array<number>;
  target: number;
}

const parseInputArguments = (args: Array<string>): parsedValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  const target = Number(args[2]);
  const inputExercises = args.slice(3);
  const exercises = inputExercises.map((exercise) => {
    if (isNaN(Number(exercise))) {
      throw new Error('Provided values were not numbers!');
    }

    return Number(exercise);
  });
  if (!isNaN(Number(args[2]))) {
    return {
      exercises,
      target,
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

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

// console.log(exerciseCalculator([3, 0, 2, 4.5, 0, 3, 1], 2));
try {
  const { exercises, target } = parseInputArguments(process.argv);
  exerciseCalculator(exercises, target);
} catch (err) {
  console.log('Oooppps... Something went wrong, message: ', err.message);
}

export default exerciseCalculator;

console.log('bmiCalculator is running ...');

type Result = string;
interface DetailValues {
  weight: number;
  height: number;
}

const parseArguments = (args: Array<string>): DetailValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      weight: Number(args[2]),
      height: Number(args[3]),
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

const calculateBmi = (weight: number, height: number): Result => {
  const BMI = weight / (height / 100) ** 2;
  if (BMI <= 15) {
    console.log(`Very severely underweight`);
    return `Very severely underweight`;
  } else if (BMI <= 16) {
    console.log(`Severely underweight	15	16`);
    return `Severely underweight	15	16`;
  } else if (BMI <= 18.5) {
    console.log(`Underweight	16	18.5`);
    return `Underweight	16	18.5`;
  } else if (BMI <= 25) {
    console.log(`Normal (healthy weight)`);
    return `Normal (healthy weight)`;
  } else if (BMI <= 30) {
    console.log(`Overweight`);
    return `Overweight`;
  } else if (BMI <= 35) {
    console.log(`Obese Class I (Moderately obese)`);
    return `Obese Class I (Moderately obese)`;
  } else if (BMI <= 40) {
    console.log(`Obese Class II (Severely obese)`);
    return `Obese Class II (Severely obese)`;
  } else {
    console.log(`Obese Class III (Very severely obese)`);
    return `Obese Class III (Very severely obese)`;
  }
};

try {
  const { weight, height } = parseArguments(process.argv);
  calculateBmi(weight, height);
} catch (err) {
  console.log('Error, something bad happened, message:', err.message);
}

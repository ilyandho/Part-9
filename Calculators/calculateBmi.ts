type Result = string;

const calculateBmi = (weight: number, height: number): Result => {
  const BMI = weight / (height / 100) ** 2;
  if (BMI <= 15) {
    return `Very severely underweight`;
  } else if (BMI <= 16) {
    return `Severely underweight	15	16`;
  } else if (BMI <= 18.5) {
    return `Underweight	16	18.5`;
  } else if (BMI <= 25) {
    return `Normal (healthy weight)`;
  } else if (BMI <= 30) {
    return `Overweight`;
  } else if (BMI <= 35) {
    return `Obese Class I (Moderately obese)`;
  } else if (BMI <= 40) {
    return `Obese Class II (Severely obese)`;
  } else {
    return `Obese Class III (Very severely obese)`;
  }
};

console.log(calculateBmi(65, 174));

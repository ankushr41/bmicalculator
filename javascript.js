const BODY_WEIGHT = document.getElementById("weight");
const BODY_HEIGHT = document.getElementById("height");

const BMI_Count = document.querySelector(".bmi");
const BMI_Category = document.querySelector(".bmi-category");
const container = document.querySelector(".container");

let bmiMetric;

const BMI_Calcuation = () => {
  let weight = BODY_WEIGHT.value;
  let height = BODY_HEIGHT.value;

  let bmi = weight / (height * height); //bmi = kg / cm * cm * 10000

  bmiMetric = (bmi * 10000).toFixed(); //round to 1 decimal
};

const Update = () => {
  BMI_Calcuation();
  // console.log(bmiMetric);
  if (isFinite(bmiMetric)) {
    BMI_Count.innerHTML = bmiMetric;
    // console.log("Number is Not Infinity");
    BMI_Category.innerHTML = checkCategory(bmiMetric);
  }
};

const checkCategory = (value) => {
  if (isFinite(value)) {
    if (value >= 30.0) {
      BMI_Category.style.color = "#b00";
      BMI_Count.style.color = "#b00";
      BMI_Count.style.borderColor = "#b00";
      return `Obese`;
    } else if (value >= 25.0 && value <= 29.0) {
      BMI_Category.style.color = "#8a4f02";
      BMI_Count.style.color = "#8a4f02";
      BMI_Count.style.borderColor = "#8a4f02";
      return `Overweight`;
    } else if (value >= 18.5 && value <= 24.9) {
      BMI_Category.style.color = "#2ca1bc";
      BMI_Count.style.color = "#2ca1bc";
      BMI_Count.style.borderColor = "#2ca1bc";
      return `Normal`;
    } else if (value <= 18.4) {
      BMI_Category.style.color = "#625301";
      BMI_Count.style.color = "#625301";
      BMI_Count.style.borderColor = "#625301";
      return `Underweight`;
    }
  } else {
    BMI_Category.style.color = "#000";
    return "";
  }
};

// when user inputs in container function will invoke
container.addEventListener("input", Update);
let firstInput = document.getElementById("input1");
let secondInput = document.getElementById("input2");

let total = document.getElementById("btn-1");
let finalResult = document.getElementById("style");

total.onclick = () => {
  let convertFirstNum = Number(firstInput.value);
  let converSecondNum = Number(secondInput.value);

  let multiplication = convertFirstNum * converSecondNum;
  finalResult.innerHTML = multiplication;
};

let total2 = document.getElementById("btn-2");
let divide = document.getElementById("style");

total2.onclick = () => {
  let convertFirstNum = Number(firstInput.value);
  let converSecondNum = Number(secondInput.value);

  let division = convertFirstNum / converSecondNum;
  finalResult.innerHTML = division;
};

let total3 = document.getElementById("btn-3");
let remainder = document.getElementById("style");

total3.onclick = () => {
  let convertFirstNum = Number(firstInput.value);
  let converSecondNum = Number(secondInput.value);

  let percent = convertFirstNum % converSecondNum;
  finalResult.innerHTML = percent;
};

let total4 = document.getElementById("btn-4");
let exponential = document.getElementById("style");

total4.onclick = () => {
  let convertFirstNum = Number(firstInput.value);
  let converSecondNum = Number(secondInput.value);

  let power = convertFirstNum ** converSecondNum;
  finalResult.innerHTML = power;
};

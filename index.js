const positivNegative = (arr) => {
  let jumlahPositif = 0;
  let jumlahNegatif = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      jumlahPositif += arr[i];
    } else if (arr[i] <= 0) {
      jumlahNegatif += arr[i];
    }
  }
  return [jumlahPositif, jumlahNegatif];
};

let angka = [1, 2, 3, 4, -1, -2, -3, -4];
console.log(positivNegative(angka));

const squareAll = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let hasil = arr[i] * arr[i];
    result.push(hasil);
  }
  return result;
};

let test = [1, 2, 3, 4, 5, 9];

console.log(squareAll(test));

const plusMinus = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 != 0) {
      result -= arr[i];
    } else if (i % 2 == 0) {
      result += arr[i];
    }
  }
  return result;
};

console.log(plusMinus(test));

const removeVowels = (str) => {
  let spliter = str.split("");
  let result = [];
  spliter.forEach((val) => {
    if (val != "a") {
      result.push(val);
    }
  });
  return result.join("");
};

let string = removeVowels("javaScript");
console.log(string);

// 1. Remove vowels
// Input: "javascript"
// Output: "jvscrpt"

const removeVowels = (str) => {
  let spliter = str.split(""); //menbuat input menjadi array
  let result = []; //penampung nilai sementara bentuk aray
  let string1 = ""; // penampung hasil akhir menjadi string
  spliter.forEach((val) => {
    if (val != "a") {
      result.push(val);
    }
  });
  string1 = result.join("");
  return string1;
};

let string = removeVowels("javaScript");
console.log(string);

// 2. Alphabet value
// Hitung jumlah value suatu string dimana setiap huruf memiliki value
// posisi huruf tersebut di dalam abjad. Contoh: A = 1, B = 2, Z = 26, J = 10
// Examples
let input2 = "abc";
console.log(input2[0]);
// Output: 6

let input3 = "steve";
// Output: 71

const countAbjad = (str) => {
  let alfabet = "abcdefghijklmnopqrstuvwxyz";
  let newStr = str.split("");
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    result += alfabet.indexOf(newStr[i]) + 1;
  }
  return result;
};

console.log(countAbjad(input2));
console.log(countAbjad(input3));

// 3. Odd alphabet value
// Sama seperti soal nomor 2, tetapi kali ini hanya hitung huruf yang memiliki
// value ganjil

// Input: "steve"
// Output: 29

// Input: "abc"
// Output: 4

const abjadGanjil = (str) => {
  let alfabet = "abcdefghijklmnopqrstuvwxyz";
  let newStr = str.split("");
  let result = 0;
  //   console.log(alfabetIdx.indexOf("b"));
  for (let i = 0; i < str.length; i++) {
    let targetIndex = alfabet.indexOf(newStr[i]) + 1;
    if (targetIndex % 2 != 0) {
      result += targetIndex;
    }
  }
  return result;
};

console.log(abjadGanjil(input2));
console.log(abjadGanjil(input3));

// 4. Unique items
// Diketahui ada 2 array of numbers, dimana 2 array tersebut memiliki beberapa
// value/number yang sama. Tampilkan sebuah array baru yang berisi list value
// unique (hanya berada di salah satu array saja)

// Input:
let test1 = [1, 3, 7, 4];
let test2 = [1, 5, 3, 7, 0];
// Output: [5, 4, 0]

const unique = (a = [], b) => {
  let result = [];
  for (let i = 0; i < b.length; i++) {
    if (a.includes(b[i]) == false) {
      result.push(b[i]);
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (b.includes(a[i]) == false) {
      result.push(a[i]);
    }
  }
  return result;
};
console.log(unique(test1, test2));

// Bonus Question
// 5. Remove duplicates
// Diketahui ada 2 array of numbers, dimana 2 array tersebut memiliki beberapa
// value/number yang sama. Tampilkan sebuah array baru yang berisi list value
// dari kedua array tersebut, tetapi sudah

let newArray = test1.concat(test2);

let result = [...new Set(newArray)];

console.log(result);

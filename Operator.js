//* Operator javascript -> +, -, *, /, %

// let num1 = 10;
// let num2 = 5;

// console.log(num1 + num2); //tambah
// console.log(num1 - num2); // kurang
// console.log(num1 * num2); // kali
// console.log(num1 / num2); // bagi
// console.log(num1 % num2); // sisa bagi

//? What is Operator assignment
//  operator untuk memberi atau mengubah nilai ke variabel

//* Opeartor assignment
//let a = 5; // nilai awal
// a -= 2;  nilai a  dikurangi 2
// a += 2;  nilai a  ditambah 2
// a *= 2;  nilai a  dikali 2
// a /= 2; nilai a dibagi 2
// a %= 2;  nilai a sisa bagi 2
// hasil nya 5

//console.log(a);

// ? What is operator comparison ?
// Operator comparison digunakan untuk membandingkan dua nilai
// Hasilnya berupa boolean (true / false)

//* Operator comparison (perbandingan)

let num1 = 15;
let num2 = 5;

// hasil perbandingan disimpan dalam variabel
const isNum1Greater = num1 > num2; // true (15 lebih besar dari 5)
const isNum1EqualTo = num1 >= num2; // true (15 lebih besar atau sama dengan 5)
const isNum1LessThan = num1 < num2; // false (15 tidak lebih kecil dari 5)

console.log(isNum1LessThan);

// daftar opeartor
// >   -> lebih besar dari
// <   -> lebih kecil dari
// >=  -> lebih besar atau sama dengan
// <=  -> lebih kecil atau sama dengan
// ==  -> sama dengan (nilai saja)
// === -> sama dengan (nilai & tipe data)
// !=  -> tidak sama dengan (nilai saja)
// !== -> tidak sama dengan (nilai & tipe data)

//* Ternary Operator
// Ternary operator digunakan untuk membuat kondisi (if else)
// dalam satu baris agar kode lebih singkat dan mudah dibaca

let age = 18;
const dapetSim = age >= 18 ? true : false; // kalo umur lebih dari 18 / sam dengan 18 maka bisa dapet sim
console.log(dapetSim);

let nilai = 80;
// Jika nilai >= 80 maka A, jika tidak B
const hasil = nilai >= 80 ? "A" : "B";
console.log(hasil);

//* Logical operator

//? What is logical operator
//

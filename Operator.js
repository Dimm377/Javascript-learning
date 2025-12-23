//* Operator javascript -> +, -, *, /, %
//* + Summary
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

// hasil akhirnya kembali ke variabel a

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
//const dapetSim = age >= 18; // bisa gini juga biar singkat
const dapetSim = age >= 18 ? true : false; // kalo umur lebih dari 18 / sam dengan 18 maka bisa dapet sim
console.log(dapetSim);

let nilai = 80;
// Jika nilai >= 80 maka A, jika tidak B
const hasil = nilai >= 80 ? "A" : "B";
console.log(hasil);

//* Logical Operator + Summary
//? what is logical operator
// Logical operator adalah simbol khusus / kata kunci yang digunakan untuk ekpresi untuk melakukan operasi logika
// Hasilnya berupa true atau false

let hasRegister = true;
let notRegister = false;
const hasAccessToRoom = hasRegister || notRegister; // OR || salah satu true → hasil true
console.log(hasAccessToRoom); // true

let foodPrice = 16;
let hasPaid = true;

const hasBought = foodPrice >= 16 && hasPaid; // AND && semua kondisi harus true
console.log(hasBought); // true

let restaurantClosed = true;
let restaurantOpen = !restaurantClosed; // NOT ! membalikan nilai boolean misal true -> false dan sebaliknya

console.log(restaurantOpen); // output nya false

let username = null;
let displayname = username ?? "pengunjung"; // ?? digunakan jika nilai di kiri null atau undefined

console.log(displayname);

//* Logical operator non boolean

let usersChosenColor = "red";
let defaultColor = "black";

const currentColor = usersChosenColor || defaultColor; // jika usersChosenColor ada isinya maka pakai itu, klo gaada pakai defaultColor

console.log(currentColor); // outputnya red / outputnya black jika di isi null, '', 0, undefined, false, dan NaN

//? common quest
// what are the falsy value ? :
// null, 0, false, undefined, NaN

// How do logical operator function when applied to non boolean value ? :
// nilai operator dievaluasi dari kiri ke kanan (short circuit operation), mengembalikan nilai terakhi yang dievaluasi

//* Operator presendence
//? what is operator presendence ?
// untuk menentukan urutan eksekusi () -> artinya dieksekusi dulu jadi gini 5 + 5 dijumlah kan dulu baru dikali 4 // pokoknya klo ada angka nya di dalem () berarti didulukan
let num = (5 + 5) * 4;
let tanpaKurung = 5 + 5 * 4; // hasilnya 25 karena kali dulu baru tambah basic mtk lah ya
// bacanya gini keknya 5 + (5 * 4)
// si js ngecek dari kiri ke kanan, eksekusi nya tergantung prioritas operator contohnya diatas +, * yang di dulukan * karena lebih tinggi
console.log(num);
console.log(tanpaKurung);

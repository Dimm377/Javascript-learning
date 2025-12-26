// ? what is array in javascript
// array adalah tipe data yang digunakan untuk menyimpan banyak data dalam satu variabel, dan data disimpan secara berurutan

// ? how to declare an array
let buah = ["apel", "mangga", "pisang", "semangka"];
buah.push("salak"); // push -> nambah jumlah array dari belakang
buah.unshift("jeruk"); // unshift -> nambah jumlah array dari depan
console.log(buah);

//? how to remove an array
let siswaNakal = ["Bahwlil", "luhur", "zulhazzz", "sahronmi", "mekarwati"];
siswaNakal.pop(); // pop -> hapus data array terakhir
siswaNakal.shift(); // shift -> hapus data array pertama
console.log(siswaNakal);

// ? How would you acces the first element of an array ?
//* Ex :

let warna = ["merah", "kuning", "hijau", "hytam", "ungu", "biru"];
// index array:
// [0] = "merah"
// [1] = "kuning"
// [2] = "hijau"
console.log(warna[1]); // Array menggunakan index/angkak yang dimulai dari 0

// ? how to find the length of an array
console.log(warna.length);

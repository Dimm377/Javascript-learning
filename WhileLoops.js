let number = [1, 2, 3, 4, 5, 6, 7];

// for (let index = 0; index < number.length; index++) {
//   console.log(number[index]);
// }

// let index = 0;
// while (index < number.length) {
//   console.log(number[index]);
//   index++;
// }

//? what are similarity and difference between for loop and while loops ?
// persamaan nya adalah sama" mengulang sebuah blok kode selama kondisi nya terpenuhi (true)
// perbedaan nya
// For -> kalo jumlahnya udah diktahui, ada inisialisasi, kondisi, increment contohnya di file FoorLoops.js
// While -> kalo jumlahnya ga diketahui, bakal looping klo kondisinya benar (true)
//* Ex
let hasil = 0;
while (true) {
  console.log("Loop"); // -> eh lu bener ga klo bener kamu lanjut looping
  hasil++;

  if (hasil === 10) break;
  //if (hasil === 10) //! TUTORIAL GANTI LAPTOP
}

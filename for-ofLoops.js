//? what is the for of loops ?
//? what is different between for of and for in ?
// for of loops cara modern buat ambil isi dari sebuah list di array
//* for of -> one of, ambil salah satu data di list array
let numbers = [1, 2, 3, 4, 5, 6, 7];

// for (let num = 0; num < numbers.length; num++) {
//   console.log(numbers[num]); //* ini looping biasa
// }

for (let number of numbers) {
  // woi js ambil tiap isi di list array numbers, isiniya berupa nilai
  console.log(number);
}

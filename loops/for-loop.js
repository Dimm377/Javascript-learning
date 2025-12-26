let numbers = [1, 2, 3, 4, 5, 6, 7];

// let index = 0;
// let lengthArray = numbers.length;

// console.log(numbers[index++]);
// console.log(numbers[index++]);
// console.log(numbers[index++]); //! YANG NGODING GINI ANOMALI JIR
// console.log(numbers[index++]);
// console.log(numbers[index++]);
// console.log(numbers[index++]);
// console.log(numbers[index++]);

//? What is for loop ?
// perulangan for digunakan untuk menjalankan code secara berulang kali, daripada harus ketik satu" kyk contoh anomali diatas

for (let index = 0; index < numbers.length; index++) {
  // let index = 0; -> bagian inisailisasi, index < number.length; -> kondisi nya, index++ -> penambahan / index-- pengurangan
  console.log(numbers[index]); // pokoknya for (inisialisasi; kondisi; perubahan nilai)
}

// Contoh for loop tanpa array
for (let angka = 0; angka <= 100; angka++) {
  console.log(angka);
}

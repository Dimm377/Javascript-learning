let course = {
  name: "javascript pemula",
  durations: 3,
};

//? what is object in javascript
// object adalah wadah untuk menyimpan banyak data dalam bentuk key : value

// ? are object a refference type or a primitive type
// refference type karena tipe data nya ga menyimpan nilai langsung, tapi menyimpan alamat
// contoh refference type
// Object (), Array, Function, Date, dll

// variabel value menyimpan NAMA properti yang ingin diambil
let value = "durations";

// ambil nilai dari object course
// pakai isi variabel value sebagai nama properti
// sama seperti: course["durations"]
console.log(course[value]); // hasilnya 3

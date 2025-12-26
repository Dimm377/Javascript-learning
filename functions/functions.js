// ? what is a function ?
// Function adalah blok kode yang bisa dipakai ulang untuk menjalankan perintah tertentu
// name = parameter
// ? what is parameter ?
// parameter adalah variabel penampung data yang ada di dlama function
function sayHello(name) {
  console.log("Hello welocome to javascript fundamentals (function) " + name);
}

sayHello("dimas");

//? what are two reasons to create a function
// untuk melakukan suatu tindakan tertentu atau untuk mrnghitung suatu nilai dan mengembalikan nilai tersebut (return )

//* Type of function

// Function dengan return value
// menerima paramater untuk memproses data
// mengembalikan hasil return
function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(2, 2));

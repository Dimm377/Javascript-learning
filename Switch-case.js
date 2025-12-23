let taskForEachJobs = "Software developer";

// if (taskForEachJobs === "Software developer") {
//   console.log("write code and must be clean code");
// } else if (taskForEachJobs === "Designer") {
//   console.log("design a flyer for a company");
// } else if (taskForEachJobs === "Project manager") {
//   console.log("make a plan for the futre of company");
// } else {
//   console.log("work free ");
// }

// console.log(taskForEachJobs); //! Contoh klo pake if else (ribet jir)

//* pakai switch case
//? What is switch case ?
// digunakan jika nilai nay udah tetap dari sebuah variabel
//? use for ?
// untuk ngebandingin satu nilai aja
// biar code nya rapi ga kyk contoh if else diatas
switch (taskForEachJobs) {
  case "Software developer":
    console.log("Write a code and must be clean code");
    break;
  case "Designer":
    console.log("design a flyer for a company");
    break;
  case "Project manager":
    console.log("make a plan for the future of company");
    break;
  default:
    console.log("bebas bro gada kerjaan soalnya");
}

//? what is different between if else and siwtch case ?
//* if else
// bisa pake operator entah itu perbandingan, logika dll contoh kek di file Operator.js
// untuk mengetahui range sebuah nila atau kondisi tertentu

//* switch case
// membandingkan satu variavel
// lebih ringkas dan rapi
// ga cocok buat nentuin range, malah gabisa keknya

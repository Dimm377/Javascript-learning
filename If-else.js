//? What is if else ?
// if else digunakan untuk menjalankan kode berdasarkan kondisi tertentu

let jam = 15;

if (jam >= 6 && jam < 12) {
  // jika jam 6 sampai sebelum jam 12 -> waktunya sarapan
  console.log("waktunya sarapan");
} else if (jam >= 12 && jam <= 14) {
  console.log("waktunya makan siang"); // klo udah jam 12 sampai jam 14 -> makan siang
} else {
  console.log("waktunya makan malam"); // jika jam lebih dari 14 -> udah masuk makan malem
}

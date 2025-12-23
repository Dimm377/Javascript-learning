//? what is for in loops and when would you use it ?
// loop for in itu digunakan buat melakukan loop di dalam object / key nyebutnya
//* for in -> in artinya inside, di dalam sebuah object
//* for in loops object

const learn = { name: "Javascript for beginner", durations: 3, numFile: 13 };

// console.log(learn.name);
// console.log(learn["durations"]); //* orang mana yang mau ngoding kek gini le
// console.log(learn.numFile);

for (const object in learn) {
  console.log(learn[object]); // Kenapa ga learn.object ? ya karena . itu buat nyari key di dalem object, // pake [] karena buat manggil variabel object
}

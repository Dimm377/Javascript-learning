//? what is break keyword used for ?
// untuk menghentikan loopingsecara paksa
//* Break
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

let a = 0;
while (a <= 100) {
  if (a == 50) {
    break;
  }
  console.log(a);
  a++;
}

let b = 0;
do {
  if (b === 5) {
    break;
  }
  console.log(b);
  b++;
} while (b < 10);

const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
for (let key in obj) {
  if (key === 'd') {
    break;
  }
  console.log(obj[key]);
}

const arr = [1, 2, 3, 4, 5, 6, 7];
for (let val of arr) {
  if (val === 5) {
    break;
  }
  console.log(val);
}
//? what is continue keyword used for ?
// untuk melewati looping saat ini lalu lakukan perulangan berikutnya
//* Continue
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

let c = 0;
while (c < 20) {
  c++;
  if (c === 10) {
    continue;
  }
  console.log(c);
}

let d = 0;
do {
  d++;
  if (d === 5) {
    continue;
  }
  console.log(d);
} while (d < 10);

const obj2 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
for (let key in obj2) {
  if (key === 'd') {
    continue;
  }
  console.log(obj2[key]);
}

const ar = [1, 2, 3, 4, 5, 6, 7];
for (let val of ar) {
  if (val === 5) {
    continue;
  }
  console.log(val);
}

//* Exercise

//? implement a function to accept two numbers and return the maximum number ?

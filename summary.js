//* Array
let siswa = ["dimas", "jelii", "irfan", "samsul"];
console.log(siswa[0], "pergi jalan-jalan sama", siswa[1]);

// array bisa nyimpen banyak data
// array mulai dari 0
// cara ambil array menggunakan variabel[0] <- nama indeksnya

console.log("total semua siswa ada", siswa.length);

// misalnya ingin hapus data array
let reshuffleMentri = ["bahwlil", "luhur", "zulharz", "sahronmi", "mekarwati"];
reshuffleMentri.pop(); // -> belakang
reshuffleMentri.shift(); // -> depan
// reshuffleMentri.splice(); -> Kalau mau di resuffle semua
console.log(
  "list menteri yang dipecat demi kemajuan jayakarta",
  reshuffleMentri
);

// ingin menambah baru

let nmbhMenteri = [];

nmbhMenteri.push("purbata", "anas"); // nambah dari belakang
nmbhMenteri.unshift("rocky", "ferry"); // nambah dari depan

let yangTerbaik = nmbhMenteri.slice(); // ambil menteri terbaik (misal semua terbaik, tapi emang)

console.log("list menteri baru untuk jayakarta", nmbhMenteri);
console.log("menteri terbaik:", yangTerbaik);

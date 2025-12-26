//* ARRAY
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

//* FUNCTION

// Function adalah blok kode yang bisa dipakai ulang

function botMenyapa(name) {
  console.log("Halo", name);
}

botMenyapa("dimas");
botMenyapa("jelii");

// Function dengan return
function tambah(a, b) {
  return a + b;
}

let hasil = tambah(2, 4);
console.log("jumlah", hasil);

///* OBJECT SUMMARY

let mhs = {
  nama: "ahmad",
  umur: 22,
  aktif: true,
};

// ambil data
console.log(mhs.nama);
console.log(mhs["umur"]);

// merubah data
mhs.umur = 23;

// klo mau nambah data object
mhs.jurusan = "Informatika";

console.log("data diri ahmad", mhs);

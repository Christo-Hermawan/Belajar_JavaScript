const isRaining = false;

console.log('Persiapan sebelum berangkat kegiatan.');
if (isRaining) {
  console.log('Hari ini Hujan. Bawa Payung.');
}
console.log('Berangkat kegiatan.');

// Jika isRaining true maka fungsi if akan dijalankan
//
// contoh lain:

let x = 75;

if (x > 70) {
  console.log(x);
} else {
  console.log('Nilai kurang dari 70');
}
// Karena nilai x kurang dari 70 maka if = false dan else dijalankan
//
// contoh lain:
let language = 'French';
let greeting = 'Selamat Pagi';

if (language === 'English') {
  greeting = 'Good Morning!';
} else if (language === 'French') {
  greeting = 'Bonjour!';
} else if (language === 'Japanese') {
  greeting = 'Ohayou Gozaimasu!';
}

console.log(greeting);

// contoh lain:
// condition ? true expression : false expression

const isMember = true;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`);

//Truthy & Falsy
//Setiap nilai pada JScript mewarisi sifat boolean yaitu truthy & falsy

/*Tipe data atau nilai yang dianggap falsy, seperti:
number 0
BigInt 0n
String kosong sepert "" atau "
null
undefined
NaN, atau Not a Number
*/
//Selain contoh di atas maka nilainya adalah truthy dan ketika dievaluasi ke dalam if statement akan bernilai true
//contohnya:

let name = '';

if (name) {
  console.log(`Halo, ${name}`);
} else {
  console.log('Nama masih kosong');
}

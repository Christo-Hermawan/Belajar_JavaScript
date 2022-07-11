let x;
console.log(typeof x);

// output: undefined, karena x belum memiliki nilai

//numbers

let a = 10;
console.log(typeof a);

let b = 10.15;
console.log(typeof b);

//BigInt
//Pada JScript tipe data number mencakup nilai yang terbatas
//Untuk membedakan tipe BigInt dan number, tambahkan karakter n di akhir angka
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

/*BigInt juga dapat digunakan untuk operasi aritmatika.
Tetapi pada operasi pembagian, hasilnya akan dibulatkan ke bawah dan 
tanpa mengandung nilai desimal.
*/

console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n); //tidak 2,5 karena dibulatkan kebawah
console.log(5n % 2n);

//strings

let greet = 'Hello';
console.log(typeof greet);

//Tidak ada perbedaan antara menggunakan petik satu atau petik dua
//Tanda petik dapat digunakan secara bergantian, khusunya jika memiliki teks yang mengandung tanda petik

const question = '"What do you think of JavaScript?" I asked';
console.log(question);

/*Jika kode seperti ini 
const answer = '"I think it's awesome!" he answered confidently';
maka akan error.
Dapat diperbaiki dengan backslash (/) 
*/
const answer = '"I think it\'s awesome!" he answered confidently';
console.log(answer);

//backslash juga dapat digunakan untuk mengabaikan simbol lain yang menimbulkan ambigu dalam string seperti ini
console.log('Windows path: C:\\Program Files\\MyProject');

//pada string kita dapat menggabungkan 2 teks terpisah dengan operator +

let sapa = 'Hello';
let sapalagi = sapa + sapa;
console.log(sapalagi);

//string interpolation - kita bisa memasukkan variable ke dalam sebuah string template

const myName = 'Darth';
console.log(`Hello, my name is ${myName}.`);

//boolean
let c = true;
let d = false;

console.log(typeof c);
console.log(typeof d);

const ab = 10;
const ac = 12;

let isGreater = ab > ac;
let isLess = ab < ac;

console.log(isGreater);
console.log(isLess);

//null
let someLaterData = null;
console.log(someLaterData);

//symbol - identifier unik, meskipun membuat dua variable symbol dengan nama / deskripsi sama, kedua nilainya tetap dianggap berbeda
const id1 = Symbol('id');
const id2 = Symbol('id');

console.log(id1 == id2);

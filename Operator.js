/*operator data number
+ penjumlahan
- pengurangan
/ pembagian
* perkalian
% sisa hasil bagi 
** perpangakatan
*/

//Assignment Operator - Operator ini digunakan untuk memberikan nilai pada variable
//contoh

let x = 10;
let y = 5;

x += y;
// x += y adalah shortcut dari x = x + y

console.log(x);

/*Comparison Operator - logika dasar dalam membandingkan nilai pada JavaScript
== - Membandingkan kedua nilai apakah sama (tidak identik)
!= - Membandingkan kedua nilai apakah tidak sama (tidak identik)
=== - Membandingkan kedua nilai apakah identik
!== - Membandingkan kedua nilai apakah tidak identik
> - Membandingkan dua nilai apakah nilai pertama lebi dari nilai kedua
>= Membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua
< - Membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua
<= - Membandingkan dua nilai apakah nilai pertama kurang atau sama dengan nilai kedua.
*/

let a = 10;
let b = 12;

console.log(a < b);
console.log(a > b);

// Perbedaan antara == dan ===
// Jika ingin membandingkan hanya dari kesamaan nilainya bisa gunakan ==
// Jika ingin membandingkan dengan memperhatikan tipe datanya gunakan ===

const aString = '10';
const aNumber = 10;

console.log(aString == aNumber); // true, karena nilainya sama-sama 10
console.log(aString === aNumber); // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

/*Logical Operator - Menggunakan kombinasi dari dua nilai boolean atau bahkan lebih dalam menetapkan logika
&& - Operator dan(and). Logika akan menghasilkan nilai true apabila semua kondisi terpenuhi
|| - Operator atau(or). Logika akan menghasilkan nilai true apabila ada salah satu kondisi terpenuhi
! - Operator tidak(not). Digunakan membalikan suatu kondisi
*/

let q = 10;
let w = 12;

//AND operator
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false
//OR operator
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

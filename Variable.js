/* Pada Jscript ada 3 cara mendeklarasikan sebuah variable yaitu menggunakan
keyword var, let, dan const. Pada versi ECMAScript 2015 (ES6) dikenalkan 
deklarasi variable dengan let dan const untuk menggantikan 
var yang dinilai kontroversial dan rawan menimbulkan bug.
*/

let lastName;
lastName = 'Vader';

console.log(lastName);

// bisa juga seperti ini

let namaBelakang = 'Vader';

console.log(lastName);

//Harus dimulai dengan huruf atau underscore (_)
//Dapat terdiri dari huruf, angka, dan underscore (_) dengan berbagai kombinasi
//Tidak boleh mengandung spasi (whitespace). Jika penamaan variabel lebih dari dua kata, tuliskan secara camelCase. Contoh firstName, lastName, catName, dll.
//Tidak boleh mengandung karakter spesial (! . , / \ + * = dll.)

const z = 100;
console.log(z);

// jika nilai dari const diubah" maka akan error
/* contoh
z = 200;
console.log(z);
*/

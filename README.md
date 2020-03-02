## Rangkuman Materi Belajar Javascript & ES-6
* **Ecma-Script**
EcmaScript adalah sebuah standarisasi scripting javascript yang dibuat oleh **European Computer Manufacture Association/(ECMA)**
ES6 diluncurkan pada tahun 2015, jadi ES6 sama dengan ES 2015. 

**1.variable :**
ada 2 penambahan variable didalam ecmascript yaitu let dan const dimana let bersifat mutable/dapat dirubah dan const bersifat imutable/tidak dapat dirubah

**2.Arrow function :**
penyederhanaan penulisan function pada javascript adapun contohnya sebagai berikut:
const b = (x,y) => x+y;

const c = (x,y,z) =>{
       return x+y*z;
 }
 
**3.for of dan for in:**
for of digunakan untuk membantu perulangan pada array,string,set,map contohnya sebagai berikut
//penggunaan for of pada array
let array = ['rendi',28,'jakarta]
for(const m of array){
      console.log(m);
 }
 for in digunakan didalam membantu perulangan property pada object
 //penggunaan for in untuk
 const mhs = {
        nama: "wali",
         umur: 29
    };

      for (a in mhs) {
        console.log(a);
}

4.**Array.fill**

5.**Array.find**

6.**dan masih banyak lagi [link ke kode es6](http://es6-features.org/)**

* **Javascript**

-**Array**
Spread operator adalah operator yang digunakan menyebarkan array baik ke dalam function ataupun ke dalam object atau array.

-**Object**

-**function**

-**Asynchronous**


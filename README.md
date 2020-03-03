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
spread berfungsi untuk mengabungkan 2 array atau lebih dan juga untuk mengcopy array
example:
let arr=["walie","songo","rendy","ronaldo"]
let arr1=["mentari","ronaldinho","rivaldo"]

          //spread
          let allArr=[...arr,...arr1]; //expected:[wali,songo.rendy,ronaldo,mentari,ronaldinho,rivaldo]
         //concat
         let allArr = arr.concat(arr1);  //expected:[wali,songo.rendy,ronaldo,mentari,ronaldinho,rivaldo]              

         //mengopy array
          let arr1 = [...arr]; 
           arr1[0]="rudy";  
           console.log(arr1);  //expected arr: [mentari,ronaldinho,rivaldo]
           console.log(arr);    //expexted arr1: [rudy,ronaldinho,rivaldo] 
-**Object*

-**function**
Function merupakan sebuah code block yang digunakan untuk melakukan tugas tertentu, pada JavaScript mendeklarasikan function bisa dengan menggunakan keyword ‘function’, parentheses ‘( )’ dan curly bracket ‘{ do magic here }’
function ada 2 : 
1. function expression :function dapat didefinisikan dengan menggunakan expression yang dapat disimpan dalam sebuah variabel.
  contoh :
  let fun = function(){
     console.log('heloo world')
 } 
 fun() //expected heloo world
2. function declaration : function yang dideklarasikan tanpa menggunakan variable
contoh:
function(){
     console.log('heloo world')
 } 
 fun() //expected heloo world

-**Asynchronous**


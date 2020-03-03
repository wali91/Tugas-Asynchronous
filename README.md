## Rangkuman Materi Belajar Javascript & ES-6

* **Ecma-Script**

  EcmaScript adalah sebuah standarisasi scripting javascript yang dibuat oleh **European Computer Manufacture Association/(ECMA)**
ES6 diluncurkan pada tahun 2015, jadi ES6 sama dengan ES 2015. 

**1. variable :**

  ada 2 penambahan variable didalam ecmascript yaitu let dan const dimana let bersifat mutable/dapat dirubah dan const bersifat imutable/tidak dapat dirubah

**2. Arrow function :**

  penyederhanaan penulisan function pada javascript adapun contohnya sebagai berikut:
  
  const b = (x,y) => x+y;
  
  const c = (x,y,z) =>
  {
  return x+y*z;
  }
 
**3. for of dan for in:**

  for of digunakan untuk membantu perulangan pada array,string,set,map contohnya sebagai berikut
  
  //penggunaan for of pada array
  
     let array = ['rendi',28,'jakarta]
       for(const m of array)
       {
      console.log(m) 
      }
      
  for in digunakan didalam membantu perulangan property pada object
  
   //penggunaan for in untuk object
   
   const mhs = { nama: "wali",umur: 29 };
   
   for (a in mhs) { 
   
   console.log(a)
   
   }

4. **Array.fill**

  fill : pengisian value pada array

example :

const array1 = [1,2,3,4]

console.log(array1.fill(0,2,4)) //expect array1 = [1,2,0,0] 

//mengisi angka 0 dimulai pada index 2 dan berakhir pada index 4

5. **Array.find**

  find : mengembalikan nilai dari elemen pertama yang ditemukan pada suatu Array

example :

const array = [5, 12, 8, 130, 44]

const found = array.find(it => it > 10) 			//`Elemen 12`

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
           
-**Object**

  spread operator pada object : spread operator juga bisa diterapkan di object
contoh:
//diterapkan pada destructor object
let dest = {nama:"wali",alamat:"jakarta",umur:28};

let {nama,...bio}=dest;
console.log(bio); //expected {alamat:jakarta,umur:28} 

-**function**

  Function merupakan sebuah code block yang digunakan untuk melakukan tugas tertentu, pada JavaScript mendeklarasikan function bisa dengan menggunakan keyword ‘function’, parentheses ‘( )’ dan curly bracket ‘{ do magic here }’
function ada 2 : 
1. function expression :function dapat didefinisikan dengan menggunakan expression yang dapat disimpan dalam sebuah variabel.

  example :
  
  let fun = function(){
     console.log('heloo world')
 } 
 fun() //expected heloo world
 
2. function declaration : function yang dideklarasikan tanpa menggunakan variable

example:

function(){
     console.log('heloo world')
 } 
 fun() //expected heloo world
 

-**Asynchronous**

  Proses eksekusi kode pada program yang berjalan tidak berurutan tanpa harus menunggu perintah kode sebelumnya selesai.

example :

const a = Math.floor(Math.random() * 1000) + 1;  //

console.log("hello");                            // ini akan tampil pertama

setTimeout(() => console.log(`world ${a}`), a);  // dan ini ke-3

console.log("reborn");                          // ini ke-2


-**callback**

  sebuah function yang memanggil parameter function tersebut dan menjalankannya kembali kedalam function yang berbeda

example:

function callbck(callback)
{

            let nama = prompt("masukan nama:");
            callback(nama);
        }
        //panngil calback
        callbck(nama => alert(`nama saya ${nama}`));


-**Promise**

  Sebuah object yang mempresentasikan sebuah penyelesaian perintah (atau bahkan sebuah error pada proses asynchronous) dan me-return value-nya atau bisa dibilang kejadian yang akn terjadi dimasa yang akan datang bisa sucees ataupun reject.

example :

//promise

      //state : fullfill,reject,pending
      //callback : resolved,rejected,finally(bisa diingkari juga bisa ditepati)
      //aksi : then = resolved , catch = reject
      //contoh promise :
      // let ditepati = false;

      // let janji1 = new Promise((resolve,reject) =>{
      //     if(ditepati){
      //         resolve('janji ditepati');
      //     }
      //     else{
      //         reject('janji diingkari');
      //     }
      // });

      // janji1
      //     .then(response => console.log('Ok : '+ response))
      //     .catch(response => console.log('Not Ok : '+ response));


-**Async-await**

 Async function merupakan function yang mengandung ekspresi `await` untuk menunggu hasil dari sebuah promise diselesaikan terlebih dahulu (synchronous).
 
 example :
 
 const a = async () => {return new Promise(resolve => {
 
    setTimeout(() => {
      resolve(`It's over`);
    }, 1000);});};
    (async () => {
    try {
    console.log(await a());
    } catch (error) 
    {
    console.log(error);
    } 
    })();


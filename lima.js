
//console.log(nama.join("*"));

//Index / Urutan
// console.log(nama[3]);
// console.log(nama.length);

//var panjangArr =  namaStorage.length;
//console.log(panjangArr);

// for (var i =0; i < panjangArr; i++){
//     console.log(namaStorage[i]);
// }

// console.log(namaStorage.reverse());
// console.log(namaStorage.indexOf('Bibi'));

// Menghilangkan Elemen Terakhir
//namaStorage.pop();

// Nambahin Elemen di paling akhir
// namaStorage.push('Baso');
// console.log(namaStorage);

//Menghilangkan index paling depan
// Shift
// namaStorage.shift();
// console.log(namaStorage);

//Unshift
// Nambahin elemen di paling depan
// namaStorage.unshift('Sasa')
// console.log(namaStorage);



//Splice
// namaStorage.splice(1,1,'Joko','Agus'); // Hapus 1 item index dan menambahkan data diposisi tersebut
// namaStorage.splice(1,1); // Hapus data saja 
// console.log(namaStorage);

// var nama= 'Bubu'
// var namaStorage = [
//     nama,
//     'Bambang',
//     'Kaka',
//     nama,
//     'Bambang',
//     'Kaka',
//     nama,
//     'Bambang',
//     'Kaka',
//     nama,
//     'Bambang',
//     'Kaka'
// ];


// namaStorage.splice(1,1);
// namaStorage.splice(3,1);
// namaStorage.splice(5,1);
// namaStorage.splice(7,1);

// for ( var i = 1 ; i <= namaStorage.length ; i+=2){
// namaStorage.splice(i,1);
// }
// console.log(namaStorage)

//Slice
// Ambil sebagian Arrat
// Dari angka pertama sama angka tertentu
// var namaStorage = ['Rere','Nono','Susu','Hehe','Qoqo'];
// console.log(namaStorage.slice(3,4));


//Adding new elements
//Push
//Unshift
//Manual


// buah.push('Duren');
// buah.unshift('Rambutan');
// buah[0]='Pepaya';
// console.log(buah);

var buah1 = ['Apel', 'Mangga', 'Jeruk'];
var buah2 = ['Duren', 'Kiwi', 'Rambutan'];

// var buahGabung = buah1.concat(buah2);
// var buah3 = [buah1, buah2];
// console.log(buahGabung);

var buah3 = [
    ['Apel', 'Mangga', 'Jeruk'],
    ['Duren', 'Kiwi', 'Rambutan'],
];
console.log(buah3[0][2]);
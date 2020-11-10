// function namaFunction(){
//     console.log('Hello');
// }

// namaFunction();

// function contoh (name){
//     console.log('Hallo ' + name);
// }

// function tambah(bebas){
//     bebas = bebas * 2;
//     bebas = bebas + 2
//     console.log(bebas*2);
// }


// contoh('Reza');
// contoh('Bubu');
// tambah(4);
// var kurang = function (angkaLagi){
//     console.log(angkaLagi-5)
// }
//kurang(10);
// var kurang = function (angkaLagi, satuLagi){
//     console.log(angkaLagi-satuLagi)
// }
//kurang(15, 7);
//DEFAULT VALUE
// var kurang = function (angkaLagi, satuLagi = 5){
//     console.log(angkaLagi-satuLagi)
// }
//kurang(15);

// function tambah(bebas){
//     bebas = bebas * 2;
//     bebas = bebas + 2
//     return bebas;
// }
// function tambahLagi(bebas){
//     return bebas + 2
// }
// console.log(5 + tambah(5) + tambahLagi(1));

// function tambah(bebas){
//     if (bebas % 2 === 0){ 
//     console.log('Genap')}
//     else
//     console.log('Ganjil');
// }

// tambah(112)

// function tambah (bebas){

// var output = "";
// for(var j = 0; j<bebas; j++){
//     for(var i = 0; i<bebas;i++){
//         output =output + "*";
//     }
//     output +='\n'
// }
// return output
  
// }
// console.log(tambah(10));

// function tambah(num1, num2){
//     var hasil = num1 + num2;
//     return hasil;
// }
// console.log(tambah(10,2) + tambah(3,6))

function pangkat(x,y){
    if (y == 1){
        return x;
    } else {
        return(x = x * pangkat(x, y - 1));
    }
}
//console.log(pangkat(3, 3));

function tambah(x){
    return x + tiga();
}
function tiga(){
    return 3;
}
//console.log(tambah(5));

function sayHello(){
    console.log('Hello');
}
// setTimeout(sayHello, 3000);
// setInterval(sayHello, 1000);

function tambah(x, y ) {
    return x + kaliDua(y);
}
function kaliDua(x){
    return x * 2
}
// console.log(tambah(5, 3));

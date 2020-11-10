//var angka = 0
// var loop = true;

//CEK KONDISI DIAWAL
// while(angka < 10){
//     console.log(angka);
//     angka++;
// }

//CEK KONDISI DIAKHIR, PASTI JALAN SEKALI
// do {
//     console.log(angka , 'do while');
//     angka++
// } while(angka<10);

//For
// for(var i = 0; i < 10; i++){
//     console.log(i);
// } console.log(i,'diluar loop')

// for(var i = 0; i < 10; i=i+2){
//     console.log(i);
// } console.log(i,'diluar loop')

// for(var i = 0; i < 10; i++){
//     if(i === 6){
//         console.log('Enam');
//     }
//     console.log(i);
// } 

// Ganjil Genap 
// var angka;
// for(var angka = 0; angka <=10; angka++){
//     if (angka % 2 ===0 ){
//         console.log('Genap','\t', angka);
//     } else{
//         console.log('Ganjil','\t', angka);
//     }
// }

//Bikin Bintang Segitiga
// var output = "";
// for(var i =0; i < 5; i++){
//     output +="*" ;
//    console.log(output)
// }
 
//Square
// var output = "";
// for(var j = 0; j<5; j++){
//     for(var i = 0; i<5;i++){
//         output =output + "*";
//     }
//     output +='\n'
// }
// console.log(output)

var output = "";

for (var i = 0; i < 5; i++){
    for ( var j = 5; j>i; j--){
        output +="*"
    }
    output +="\n"
}
console.log(output);


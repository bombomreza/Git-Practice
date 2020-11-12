// MENCARA HURUF TENGAH
// Cara 1

// function tengah(str){
//     var position;
//     if (str.length % 2 === 1){
//         position = str.length / 2;
//         length = 1;        
//     } else {
//         position = str.length / 2-1;
//         length = 2;
//     }
//     return str.substring(position, position + length)
// }
// console.log(tengah('Baju'));

// Cara 2
// function tengah(str){
//     var pisah = str.split("");
//     console.log(pisah)
//     if (pisah.length % 2 === 0){
//         return pisah[pisah.length / 2 - 1]+ "" + pisah[pisah.length/2];
//     } else {
//         return pisah[(pisah.length - 1) / 2];
//     }
// }
// console.log(tengah('Mobil'))


// // REPEAT PENGULANGAN
// // Cara 1

// function repeat(string, number){
//     var repeat = "";
//     while(number > 0){
//         repeat += string;
//         number--;
//     }
//     return repeat
// }
// console.log(repeat('buba',2))
// // Cara 2
// function repeat(str, num){
//     var output = "";
//     for (let i = 0; i < num; i++) {
//         output += str;        
//     }
//     return output;
// }
// console.log(repeat("Babubi", 2))
// // Cara 3
// function repeat(str, num){
//     var output = str.repeat(num);
//     return output;
// }
// console.log(repeat("Sasu", 3))

// //MENERIMA SATU PARAMETER

// function xo(str){
//     var x = 0;
//     var o = 0;
//     str = str.toLowerCase();
//     console.log(str)
//     var split = str.split("");
//     for (let i = 0; i < split.length; i++) {
//         if (split[i] === "x"){
//             x++;
//         }else if (split[i] === "o"){
//             o++;
//         }
//     }
//     return `X : ${x} | O : ${o}`;
// }
// console.log(xo("XxxOoOPp"))

// HURUF AWAL DAN AKHIR

// function firstLast(str){
//     var pisah = str.split("");
//     return pisah[0] + pisah[pisah.length - 1]
//     // Cara 2
//     // return str[0] + str[str.length - 1]
// }
// console.log(firstLast("susilo"))

// TENGAH NAMA

// function mid(str){
//     var pisah = str.split("");
//     delete pisah[0]
//     delete pisah[pisah.length - 1]
//     return pisah.join("") 
// }
// console.log(mid("bambang"))

// function midd(str){
//     var split = str.split("");
//     split.shift();
//     split.pop();
//     return split.join("");
// }
// console.log(midd("susilo"))

// function questionMark(str){
//     var a = 0
//     var pisah = str.split("");
//     for (let i = 0; i < pisah.length; i++) {
//         if( pisah[i] === "?"){
//             a++
//         }else{
//         }
//     }
//     if(a===0){
//         return "Teu Baleg"
//     }
//     return a
// }
// console.log(questionMark("???asd?"))
// console.log(questionMark("?1?233"))
// console.log(questionMark("asd"))


// CARA PERTAMA
// function berapaTahun(pAwal, perc, pendatang, target){
//     var a = pAwal 

//     var tahun = 0;
//     while ( a < target){
//     var b = (a*(perc/100)) + pendatang
//         tahun++;
//         a +=  b
//     }
//     return tahun +" Tahun"
// }
//  CARA KEDUA

// function berapaTahun(pAwal, perc, pendatang, target){

//     var penduduk =pAwal;
//     var tahun = 0;
//     perc = perc/100
//     for(var i = 0; ;i++){
//         if(penduduk < target){
//             penduduk += Math.floor(penduduk*perc) + pendatang;
//             tahun++;
//         } else if (penduduk > target){
//             break;
//         }
//         console.log(penduduk, i + 1);
//     }
//     return tahun
// }
    
// console.log(berapaTahun(1500000, 2.5, 10000, 2000000))

//  CARA SATU
// function everyArr(arr1, arr2){
//     var a = arr1.join('');
//     var b = arr2.join('');
//     if (a === b){
//         return `true`
//     }else{
//         return `false`
//     }
// }
// console.log(everyArr([1,2,3], [4,5,6]))
// CARA KEDUA
    // function everyArr(arr1, arr2){
    //     var x = arr1.length > arr2.length ? arr1.length : arr2.length;
    //     for (let i = 0; i < x; i++){
    //         if (arr1[i] !== arr2[i]){
    //             return false;
    //         }
    //     }
    //     return true;
    // }
    // console.log(everyArr([1,2,3],[1,2,4]));


// function equal(arr){
//     var output = ""
//     for (let i = 0; i < arr.length; i++) {   
//         for (let j = 0; j < i; j++) {
//             if(arr[i]===arr[j]){
//                 output = 'true'
//             }
//             else{
//                 output = 'false'
//             }
//         }
//     }
//     return output;
// }
// console.log(equal([2,2,2,"2"]))
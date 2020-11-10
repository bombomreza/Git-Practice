//Map
// var arr = [1, 2, 3];
// var newArr = arr.map(function(bebas){
//     return bebas * 2 +' Angka';
    // return ` <tr>
    //         <td>${bebas}</td>
    //         </tr>
    // `
// });
// console.log(newArr); 

//SAMA AJA TAPI LEBIH PANJANG
// var newArr = [];
// for (var i = 0; i < arr.length; i++){
    // newArr.push(arr[i]*2);
// }
// console.log(newArr)
// JOIN buat jadi string
// console.log(arr.join(""))


// FILTER
// Anonymous
// dalam bentuk boolean
// 1<3 2<3 3<3 4>3 5>3 6>3
// var arr = [1, 2, 3, 4, 5, 6];
// var newArr = arr.filter(function(val){
    // return val > 3;
    // return val ===3;
    // return val % 2 ===0;
// });
// console.log(newArr);

// var newArr = [];
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] % 2 ===0){
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

// var arrayNumber = [1,2,3,4,5,6,7,8];
// function filterManual (arr, func){
//     var newArr = [];
//     for(let i = 0; i<arr.length; i++){
//     if(func(arr[i])){
//         newArr.push(arr[i]);
//     }
//     }   
//     return newArr;
// }
// function genapganjil(num){
//     if (num % 2 ===0){
//         return true
//     }else{
//         return false
//     }
// }
// function ganjilkah(num){
//     if(num % 2 !==0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(filterManual(arrayNumber, ganjilkah));


// function contoh(num, num1 , func, func1){
//     return num +num1+ func(2) + func1(3);
// }

// function kaliDua(num){
//     return num *2;
// }
// function kaliTiga(num){
//     return num * 3;
// }
// console.log(contoh(5, 10,  kaliDua, kaliTiga));

//Arrow Function
// let pi = () => 3.14 
// console.log(pi());

// let x = (nama) => {
//     return `nama Saya ${nama}`;
// }
// console.log(x('Baba'));


// var newArr = arr.map(function(val){
    //     return val *2
    // })
    
// var arr = [1,2,3];
// var newArr = arr.map((val) => {
//     return val *2
// });
// console.log(newArr)

// function mapManual (arr, func){
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++){
//         newArr.push(func(arr[i]));
//     }
//     return newArr
// }
// function kaliDua (num){
//     return num *2    
// }
// console.log(mapManual(arr, kaliDua))

//Spread operator



// var arr = [1, 2, 3];
// var arr2 = [...arr ,4, 5, 6];
// console.log(arr2);

// var obje = {
//     nama: 'bambang',
//     usia: 45,
// };
// console.log({ pekerjaan:"PNS", ...obje})

// console.log(arr.reduce())

// var obj = { id: 15945893849, category: 'Fast Food', name: "Noodle", price: 5000, stock: 9 };
// console.log({obj, qty:1})

// var arr = [1,2,3,4,5,6,7,8,9]
// var newArr = arr.map((val, index) =>{
//     if (index === 5 ){
//         return val * 3;
//     }else {
//         return val *2
//     }
// });
// console.log(newArr)

var arr = [1,2,3,4,5,6,7,8,9]
var newArr = arr.map((val, index) =>{
    console.log(index,val , "ini angka index")
})
console.log(newArr)

//commit
//example
//example 2

//var nama ='reza'

//console.log(nama.length == 4);
// NOT! 
//console.log(!(5==5));
//console.log(nama.length == !4)

// AND &&
//console.log(5 =='5' && nama.length==4)

// OR ||
//console.log(5=="5" || 4 >5)

// IF ELSE IF ELSE 
// var nilai = 30;
// if(nilai >70) {
//   console.log('Wow');
// } else if (nilai <70 && nilai > 40){
//   console.log('noo')
// } else {
//   console.log('Noob')
// }

// var pass = 'asd123'
// if (pass.length > 8){
//     console.log ('strong ' + pass.length)
// } else if (pass.length >4 && pass.length <= 8 ) {
//     console.log ('medium ' + pass.length)
// } else{
//     console.log('weak ' + pass.length)
// }

//Switch Case

// var job = 'asd';
// switch (job){
//     case 'dokter':
//         console.log('rumah sakit');
//         break;
//     case 'polisi':
//         console.log('duar');
//         break;
//     case 'guru':
//         console.log('sekolah');
//         break;
//     default:
//         console.log('gawe setan');
// }

// var date = new Date();
// var month = date.getMonth();
// console.log(month);

// switch(month){
//     case 0:
//         console.log('Januari')
//         break
//     case 1:
//         console.log('Feb')
//         break
//     case 2:
//         console.log('March')
//         break
//     case 3:
//         console.log('Apr')
//         break
//     case 4:
//         console.log('Mei')
//         break
//     case 5:
//         console.log('Jun')
//         break
//     case 6:
//         console.log('Jul')
//         break
//     case 7:
//         console.log('Aug')
//         break
//     case 8:
//         console.log('Sep')
//         break
//     case 9:
//         console.log('Oct')
//         break
//     case 10:
//         console.log('Nov')
//         break
//     default :
//         console.log('Dec')
// }

var massa = 90
var tinggi = 1.76
var a = Math.pow(tinggi,2)
var b = massa/a

if (b < 18.5) {
    console.log('berat badan kurang')
} else if (b >18.5 && b<24.9) {
    console.log('berat badan ideal')
} else if (b >25 && b<29.9) {
    console.log('berat badan berlebih')
} else if (b >30 && b<39.9) {
    console.log('berat badan Sangat berlebih')
} else {
    console.log('Obesitas')
}
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

function repeat(string, number){
    var repeat = "";
    while(number > 0){
        repeat += string;
        number--;
    }
    return repeat
}
console.log(repeat('buba',2))
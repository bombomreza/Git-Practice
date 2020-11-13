var arr = [1,2,3]
var output = "";
var data = arr.find((val) =>{
    return val === 2
})
if (data){
    output = true
}else{
    output =false
}
var datafilter = arr.filter((val) =>{
    return val > 1;
})
console.log(datafilter)
// console.log(data)

var arrProduct = [
        { id: 15945893849, category: 'Fast Food', name: "Noodle", price: 5000, stock: 9 },
        { id: 15945893843, category: 'Electronic', name: "Headphone", price: 500000, stock: 10 },
        { id: 15945893844, category: 'Clothing', name: "Hoodie", price: 300000, stock: 7 },
        { id: 15945893845, category: 'Fruit', name: "Apple", price: 10000, stock: 8 },
    ];

var data = arrProduct.find((val) =>{
    return val.name === 'Hoodie'
})
var data1 = arrProduct.findIndex((val) => {
    return val.name === 'Hoodie'
})
var data2 = arrProduct.filter((val) =>{
    return val.stock > 8
})
console.log(arrProduct[data1].stock - 3)
console.log(data)
console.log(data1)
console.log(data2)
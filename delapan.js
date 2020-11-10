class Biodata{
    constructor(a,b,c){
        this.nama = a;
        this.usia = b;
        this.pekerjaan = c;
    }
}

class Alamat extends Biodata{
    constructor(a,b,c){
        super (a,b,c);
        this.alamat = 'BSD';
    }
}

var john = new Alamat ('John', 50, 'Coder')
// console.log(john);

class Baru{
    constructor(bebas){
        this.contoh = bebas;
        this.bool = true;
    }
}
 
class LebihBaru extends Baru{
    constructor(satu, dua){
    super(dua);
    this.newData = 'Lebihbaru'  
    }
}

// var data = new LebihBaru('Contoh', 'BARU')
// console.log(data)

class Products{
    constructor(_name, _price, _stock){
        this.name = _name
        this.price = _price
        this.stock = _stock

    }
}

class FastFood extends Products{
    constructor(_name, _price, _stock, _warranty){
        super(_name, _price, _stock)
        this.category = 1
        this.warranty = _warranty
    }
}
var makanan = new FastFood ('Noodle', 200, 10,20)
console.log(makanan)
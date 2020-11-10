//var toko = {
//     barisanBuah: ['Apel', 'Mangga',[{nama:'Monthong', harga: 4500}, {nama:'musanking', harga:500000}

// ]],
//     barisanDaging:['ayam', 'sapi', 'kambing'],
//     barisanSnack:['taro', 'cheetos', 'chitato']
// };
// console.log(toko.barisanBuah[2][1].harga)

var random = {
    nama: "Bubu",
    namaBelakang: 'Baba',
    pass: 'bubu123',
    noTelefon: ['081212121212', '09321321321'],
    laptop: {
        manufactur:'Asus',
        type: 'zenbook',
        ram: ['4gb', '6gb']
    },
    namaFull: function(){
        return this.nama + '' + this.namaBelakang
    }
};

random.alamat = ['BSD', 'Bekasi'];
delete random.pass;
random.noTelefon.push('111111');
random.noTelefon[0] = '123';
console.log(random);

// HARUS MAKE () BUAT MANGGIL
// console.log(random.namaFull());


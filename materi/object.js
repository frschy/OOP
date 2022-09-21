let Pemilik={
    nama:'',
    alamat: '',
    no_telp:'',
    getProfil: function(){
        return `${this.nama} - ${this.alamat} - ${this.no_telp}`
    }
}


let Mobill = {
    type:'',
    warna:'',
    tahun_pembuatan: '',
    history_service:[],
    __proto__: Pemilik,
    service: function(tanggal) {
        this.history_service.push(tanggal)
    }
}

let ferrari = Object.create(Mobill);
ferrari.type='EV';
ferrari.nama = 'Budi'
ferrari.service('01-01-2022');
console.log(ferrari.getProfil());


let honda = Object.create(Mobill);
honda.type='jazz';
honda.service('02-01-2022');
console.log(honda.history_service);
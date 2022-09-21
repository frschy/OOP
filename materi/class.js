
const classPemilik = require('./classPemilik');

class Mobil extends classPemilik{
    static nama = 'budi';
    #history_service;

    //dokumentasi constructor
      /** 
      * @constructor
      * @param {string} nama untuk nama pemilik mobil
      * @param {string} type untuk type mobil
      * @param {tahun_pembuatan} tahun_pembuatan tahun pembuatan mobil
     */
    constructor(type,warna='hijau',tahun_pembuatan, nama,alamat,telp){
        //validasi
        if(p3 < '2010'){
            throw new Error('maaf tahun tidak boleh dibawah 2010')
        }
        
        super(p4,p5,p6);
        this.type = p1;
        this.warna= p2;
        this.tahun_pembuatan =p3;
        
        this.#history_service =[];
    }

    service(tanggal){
        this.#history_service.push(tanggal);
        return this
    }

    get history(){
        return this.#history_service;
    }

    static hitung(a, b){
       let ferrari = new Mobil('EV', 'Merah','2009');
        ferrari.service('01-02-2022');
        console.log(ferrari.history);

        console.log(Mobil.nama);
        return a * b;
    }
}
////////////////////////////////////////////////
let ferrari = new Mobil('EV', 'Merah','2022', 'Eko', 'Semarang', '087777');
console.log(ferrari.service('01-02-2022').getProfil());

console.log(ferrari.history);
console.log(ferrari.getProfil());

// console.log(Mobil.hitung(1,2)); 
// console.log(Mobil.nama);

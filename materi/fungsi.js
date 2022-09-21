//mobil
// - type
// - warna
// - tahun_pembuatan
// method service

function Mobil(p1,p2,p3) {
    this.type = p1;
    this.warna= p2;
    this.tahun_pembuatan=p3;
    this.history_service =[];

    this.service = function (tanggal) {
        this.history_service.push(tanggal)
    }
}

let ferrari = new Mobil('EV', 'Merah', '2022');

ferrari.service('01-01-2022');
ferrari.service('02-01-2022');

console.log(ferrari.history_service);


let jazz = new Mobil('Jazz', 'Merah', '2021');

jazz.service('01-01-2022');
jazz.service('02-01-2022');

console.log(jazz.history_service);
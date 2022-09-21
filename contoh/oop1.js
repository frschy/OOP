function Mobil(p1,p2,p3) {
    this.merk=p1;
    this.type=p2;
    this.tahun=p3;
}

function Adik(p1){
    this.nama = p1;
}

function Manusia(p1) {
    this.nama = p1;
    this.mobil = [];
    this.adik1 = new Adik();//aggregation
    this.adik2 = new Adik();//aggregation
    this.tambahMobil= function(merk, type, tahun) {
        this.mobil.push(new Mobil(merk, type, tahun));//aggregation
        return this
    }
}

Manusia.prototype.NIK = '';//inheritance
Manusia.prototype.alamat = '';//inheritance
Manusia.prototype.getAdikPertama = function() {
    return `adik pertama dari ${this.nama} adalah ${this.adik1.nama}`
}//inheritance

/////////////////////////////////////////////////////////////////

let bhagas = new Manusia('bhagas')
bhagas.adik1.nama = 'lia';
bhagas.adik2.nama = 'tia';
console.log(bhagas.getAdikPertama());

let budi = new Manusia('budi')
budi.adik1.nama = 'lia';
budi.adik2.nama = 'tia';
console.log(budi.getAdikPertama());
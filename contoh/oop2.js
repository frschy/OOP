let mobil={
    merk:'',
    tipe:'',
    tahun:0
}

let adik={
    nama:''
}

let ProfilLengkap={
    alamat:'',
    NIK:'',
    getAdikPertama : function() {
        return `adik pertama ${this.nama} adalah ${this.adik1.nama}`
}
}
let dataUmur={
    umur:20
}
let manusia = {
    nama:'',
    mobil:[],
    adik1: Object.create(adik),//aggregation
    adik2: Object.create(adik),//aggregation
    __proto__: ProfilLengkap,//inheritance
    tambahMobil: function(merk, type, tahun) {
        let mobilTemp = Object.create(mobil);
        mobilTemp.merk = merk;
        mobilTemp.type = type;
        mobilTemp.tahun = tahun;
        this.mobil.push(mobilTemp);//aggregation
        return this
    }
}

/////////////////////////////////////////////////

let bhagas = Object.create(manusia);
bhagas.nama='Bhagas'
bhagas.adik1.nama = 'Budi';
bhagas.adik2.nama = 'Eko';
console.log(bhagas.getAdikPertama());


let adit = Object.create(manusia);
adit.nama='Adit'
adit.adik1.nama = 'Ria';
console.log(adit.getAdikPertama());
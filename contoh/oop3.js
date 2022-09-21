class Adik{
    constructor(p1){
        this.nama = p1;
    }
}

class ProfilLengkap{
    constructor(alamat, nik){
        this.alamat = alamat;
        this.nik = nik;
    }

    getAdikPertama(){
        return `adik pertama ${this.nama} adalah ${this.adik1.nama}`
    }
    
}


class Manusia extends ProfilLengkap{
    constructor(p1, p2, p3){
        super(p2,p3);
        this.nama=p1;
        this.mobil=[];
        this.adik1 = new Adik();//aggregation
        this.adik2 = new Adik();//aggregation
    }

    tambahMobil(merk, type, tahun) {
        this.mobil.push(new Mobil(merk, type, tahun));//aggregation
        return this
    }
}

/////////////////////////////////////////////////////////

let bhagas = new Manusia('Bhagas', 'semarang', '00000001');
bhagas.adik1.nama = 'lia';
bhagas.adik2.nama = 'tia';
console.log(bhagas.getAdikPertama());


let budi = new Manusia('Budi', 'tengaran', '00000002');
budi.adik1.nama = 'dio';
budi.adik2.nama = 'adi';
console.log(budi.getAdikPertama());
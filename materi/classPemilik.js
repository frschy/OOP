let Pemilik = class{
    constructor(p1,p2,p3){
        this.nama=p1;
        this.alamat=p2;
        this.telp=p3;
    }
    getProfil(){
        return `${this.nama} - ${this.alamat} - ${this.telp}`
    }
}

module.exports = Pemilik;
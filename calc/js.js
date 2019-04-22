var no1;
var no2;
var operator;
var opr_seleksi = false;

function ambil(angka) {
    tes = document.getElementById('layar').textContent;
    if (tes === '0') {
        document.getElementById('layar').textContent = angka
    }else{
        document.getElementById('layar').textContent += angka
    }
}

function hapus() {
    document.getElementById('layar').textContent = "";
}
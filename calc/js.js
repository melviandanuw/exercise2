var nilai1;
var nilai2;
var hasil;
var opr;
var opr_seleksi = false;

function ambil(data){
    oldData = document.getElementById('display').textContent;
    if(oldData === '0'){
        document.getElementById('display').textContent = data;
    }else{
        document.getElementById('display').textContent += data;
    }
}

function hapus(){
    document.getElementById('display').textContent = 0;
}

function operator(data){
    opr_seleksi = true;
    nilai1 = parseFloat(document.getElementById('display').textContent);
    opr = data;
    document.getElementById('display').textContent = 0;
}

function koma(){
    oldData = document.getElementById('display').textContent;
    if(oldData.substr(oldData.length - 1) !== '.'){
        oldData += ".";
    }
    document.getElementById('display').textContent = oldData;
}

function hitung(){
    if(opr_seleksi === true){
        nilai2 = parseFloat(document.getElementById('display').textContent);
        switch(opr){
            case '/' :
                hasil = nilai1 / nilai2;
                document.getElementById('display').textContent = hasil;
                break
            case '*' :
                hasil = nilai1 * nilai2;
                document.getElementById('display').textContent = hasil;
                break
            case '+' :
                hasil = nilai1 + nilai2;
                document.getElementById('display').textContent = hasil;
                break
            case '-' :
                hasil = nilai1 - nilai2;
                document.getElementById('display').textContent = hasil;
                break
        }
        opr_seleksi = false;
        hasil = 0;
        nilai1 = 0;
        nilai2 = 0;
    }
}
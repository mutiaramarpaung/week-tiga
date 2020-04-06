var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]; 

//["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"] 

var arrInput;
var tanggalLahir;
var bulan;
var tanggalSort;
var tanggalan;
var namaMax;

function dataHandling2(arrInput) {
    arrInput.splice(1,1, 'Roman Alamsyah Elsharawy');
    arrInput.splice(2, 1, 'Provinsi Bandar Lampung');
    arrInput.splice(4,1);
    arrInput.splice(4, 2, 'Pria', 'SMA Internasional Metro');
    console.log(input);
    
    tanggalLahir = arrInput[3].split('/');
    console.log(gantiBulan(tanggalLahir));
    var tanggalSort = tanggalLahir;
    console.log(sortTanggal(tanggalSort));
    console.log(tanggalLahir.join('-'));
    
    namaMax = arrInput[1];
    console.log(namaMax.slice(0,15));
}

function gantiBulan(bulan) {
  switch(bulan[1]) {
    case 01 : {
            console.log('Januari');
          break; }
        case 02: {
            console.log('Februari');
          break;}
        case 03: {
            console.log('Maret');
          break;}
        case 04 :{
            console.log('April');
            break;}
        case 05:{
            console.log('Mei');
            break;}
        case 06:{
            console.log('Juni');
            break;}
        case 07 :{
            console.log('Juli');
            break;}
        case 08:{
            console.log('Agustus');
            break;}
        case 09:{
            console.log('September');
            break;}
        case 10 :{
            console.log('Oktober');
            break;}
        case 11:{
            console.log('November');
            break;}
        case 12:{
            console.log('Desember');
            break;}
        default:{
          console.log('tidak ada bulan, masukan format yang sesuai!');}
      }
  console.log(bulan[1]);
}

function sortTanggal(tanggalan) {
    var result = tanggalan.sort(function(value1, value2) { return Number(value1)<Number(value2)});
    return result;
}

dataHandling2(input);

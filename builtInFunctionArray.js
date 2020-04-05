/** built in function exercise 4 */
function dataHandling2(parameter) {
    parameter.splice(1,2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung" );
    parameter.splice(4,2,"Pria", "SMA Internasional Metro");
    console.log(parameter);
    var tahun = parameter.slice(3,4);
    var tahun_pisah= tahun.toString();
    var tahunPisah = tahun_pisah.split("/");
    var tahunn= tahunPisah.splice(0,3,"1989", "21", "05");
    tahunPisah.splice(2,1,"5");
    var bulan=parseInt(tahunPisah[2])
    switch(bulan){
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
      console.log(tahunn);
      console.log(tahunPisah.join("-"));
      return parameter[1];
}

var parameter = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca",];
console.log(dataHandling2(parameter));


// //contoh output
// ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
// ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
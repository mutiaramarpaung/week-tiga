/** Logic Challenge - menghitung jumlah kata */
function hitungJumlahKata(kalimat) {
    kalimat.split(" ");
    var jumlahKata = console.log(kalimat.length) ;
    return kalimat;
  }
  
  /** cobain ah */
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5
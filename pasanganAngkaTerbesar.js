/** Logic Challenge - pasangan angka terbesar */
function pasanganTerbesar(num) {
    var arr = num.toString().split('');
    var hasil = [];
    for (var i = 0; i < arr.length - 1; i++) {
      hasil[i] = Number(arr[i] + arr[i + 1]);
    }
    var terbesarSementara= hasil[0];
    for (var j = 1; j < hasil.length; j++){
      if(hasil[j] > terbesarSementara){
        terbesarSementara = hasil[j];
      }
    }
    return terbesarSementara;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
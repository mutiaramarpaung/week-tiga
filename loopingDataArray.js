var dataHobby = [ 
                  ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'], 
                  ['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'], 
                  ['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'], 
                  ['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun']
                ];

for (var i = 0; i < dataHobby.length; i++) { 
       for (var j = 0; j< dataHobby[i].length-dataHobby.length; j++) 
       {
          var ID = console.log('Nomor ID: ' + dataHobby[i][0]);
          var Name = console.log('Nama Lengkap: '+dataHobby[i][1]);
          var TTL= console.log('TTL: '+ dataHobby[i][2] + ' ' + dataHobby [i][3]);
          var Hobi = console.log('Hobi: ' + dataHobby[i][4]);
        }
         
       }
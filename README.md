# week-tiga

# HOME
# Hacktiv8 Phase 0 Week 3: Arrays and Logics

Selamat sudah melalui kegiatan pekan kedua! Pekan ketiga ini kita akan melatih pemahaman tentang logika dan implementasinya ke berbagai kasus. Pastikan kalian telah memahami dengan baik materi di minggu sebelum nya.

Karena sudah menginjak pekan ke 3, ada baiknya kamu menyelesaikan tugasnya dari hari ke hari secara rutin. Semaksimal mungkin tugas-tugas yang ada tidak ditumpuk di kemudian hari atau bahkan di akhir minggu, karena mulai pekan 3 ini setiap hari nya ada challenge coding yang menentukan kelanjutan ke phase 1 emoji-bowtie , dan semua challenge yang bertanda emoji-anchor ini wajib diselesaikan.

# Senin
Live Coding

Instruksi diberikan di channel kelas.

# Selasa
# Mengenal Tipe Data Array

Sebelumnya, kita telah belajar berbagai macam tipe data yang kita tampung di variabel JavaScript dan kita bermain operasi dengannya, menggunakan conditional, bahkan hingga looping. Sekarang, saatnya kita berkenalan dengan Array, tipe data yang sangat berguna untukmu dalam membuat penampungan data yang terstruktur.

# Materi & Referensi :

#    emoji-notebook_with_decorative_cover Mempelajari tipe data Array
# JavaScript Data Types - Array
# Objectives

Tipe data ataupun struktur data adalah konsep penting dalam mengkategorisasikan beberapa hal/jenis berbeda pada unit, pengukuran, juga memungkinkan kita untuk beroperasi pada variabel.
Learnings

#    Array

#    Array Built-in functions
        push()
        pop()
        unshift()
        shift()
        sort()
        slice()
        splice()
        split()
 #   Multidimensional Array

# Array

Array adalah kumpulan dari berbagai data. Kita bisa tulis dengan kurung kotak (square brackets) dan butir-butirnya dipisah dengan koma. Indeks array berbasis-nol yang berarti urutan awalnya merupakan [0], keduanya [1], dan seterusnya. Kita juga bisa memasukkan (insert), memperbarui/mengubah (update/change), atau bahkan meniadakan (undefine) nilai yang ada di dalam array. Spesifik di JS, kita bisa gunakan beberapa tipe data berbeda di dalam suatu array. Bahkan memasukkan array ke dalam array!

# CONTOH CODE
> var animals = ["Lion", "Tiger", "Puma"]
> animals
> animals[0]
> animals[3] = "Jaguar"
> animals[8] = "Leopard"
> animals[1] = undefined
> animals
> animals[5]
> animals[0] = 100
> animals[1] = true
> animals
> animals[3] = ["Zero", 1, "Two"]
> animals[3][3] = "Three"

Array seperti tumpukan data. Bayangkan sebuah botol atau toples yang berisi beberapa lapis biskuit di dalamnya. Kita bisa mendorong (push) seperti memasukkan yang baru, mengeluarkan (pop) yang paling terakhir atau teratas, atau bahkan mengambil beberapa lapis data.

# CONTOH CODE
> animals.push("Dragon")
> animals.pop()
> animals.slice(0, 2)

# Array Built-in functions

push: menambah 1 nilai ke array ke index paling belakang
pop: menghapus 1 nilai dari array index paling belakang
unshift: menambah 1 nilai ke array index paling depan (index 0)
shift: menghapus 1 nilai dari array index paling depan (index 0)
join: menggabungkan seluruh element array menjadi sebuah string dan mengambil parameter sebagai simbol penyambung antar elemen
sort: mengurutkan elemen di dalam array sesuai alphabet
slice: mengambil beberapa lapis data
splice: mengubah nilai array dengan menghapus dan/atau menambah nilai baru ke array
split: memecah string dan mengembalikan array sesuai dengan separator / pemisah yang didefinisikan

# Penggunaan Built-in Function Array secara singkat

# CONTOH CODE
var animalsArray = ["lion", "horse"];
animalsArray.push("duck"); // menambahkan 1 nilai ke array bagian paling belakang
console.log(animalsArray); // ["lion", "horse", "duck"]
animalsArray.pop(); // menghapus 1 nilai array terbelakang
console.log(animalsArray); // ["lion", "horse"]
animalsArray.unshift("dog");
console.log(animalsArray); // ["dog", "lion", "horse"]
animalsArray.shift();
console.log(animalsArray);  // ["lion", "horse"]
animalsArray.sort();
console.log(animalsArray);  // ["horse", "lion"]
console.log(animalsArray.join(" and ")); // "horse and lion"

Beberapa fungsi dari array ada yang mengubah nilai dari array itu sendiri (sort, splice, push, pop, shift, unshift) atau mengembalikan array / nilai baru (). Jika kamu bertanya kenapa berbeda, akan dijelaskan di Week 5 tentang prinsip mutability dan immutability.

# push()

Push adalah fungsi array yang akan menambahkan nilai di belakang nilai terakhir di array. Layaknya sebuah antrian, push adalah orang yang mengantri selanjutnya, akan berada di posisi paling belakang. Fungsi push akan menerima satu parameter, berupa nilai yang akan ditambahkan.

# CONTOH CODE
var arr = [0, 1, 2, 3];
arr.push(4);
console.log(arr); // 0, 1, 2, 3, 4

# pop()

Pop adalah fungsi array yang akan menghapus nilai paling belakang / terakhir dari array. Bayangkan dalam sebuah antrian, orang yang mengantri di paling belakang tidak jadi mengantri dan pulang. Fungsi pop tidak menerima parameter apapun.

# CONTOH CODE
var arr = [0, 1, 2, 3];
arr.pop();
console.log(arr); // 0, 1, 2

# unshift()

Unshift adalah fungsi array yang akan menambah nilai ke depan array (ke index 0), dan menggeser seluruh isi array kebelakang. Fungsi unshift menerima satu parameter, berupa nilai yang akan ditambahkan ke dalam array.

# CONTOH CODE
var arr = [0, 1, 2];
arr.unshift(3);
console.log(arr); // 3, 0, 1, 2

# shift()

Shift adalah fungsi array yang akan menghapus nilai paling depan dari array. Fungsi shift tidak menerima parameter apapun.

# CONTOH CODE
var arr = [3, 0, 1, 2];
arr.shift();
console.log(arr); // 0, 1, 2

# sort()

Sort adalah fungsi array yang akan mengurutkan nilai dari array. Perlu diperhatikan, sort mengurutkan otomatis secara ascending dan diurutkan berdasarkan unicode dari karakter. Kamu akan menemukan masalah ini saat mengurutkan angka.

# CONTOH CODE
var arr = [3, 5, 7, 1, 2];
arr.sort();
console.log(arr); // 1, 2, 3, 5, 7

var arrChar = ['Tono', 'Budi', 'Charlie', 'Ahmad'];
arrChar.sort();
console.log(arrChar); // 'Ahmad', 'Budi', 'Charlie', 'Tono'

Contoh masalah sort() pada angka:

var arr = [1, 2, 15];
arr.sort();
console.log(arr); // 1, 15, 2

Hasil dari sort di atas tidak sesuai dengan ekspektasi kita! Seharusnya 1, 2, 15 namun yang terjadi adalah 1, 15, 2. Hal ini karena JavaScript melakukan sort secara unicode atau sebagai karakter, dan karena 15 diawali dengan karakter '1', maka akan dianggap lebih awal daripada karakter '2'. Untuk menyelesaikan masalah ini, kamu perlu menambahkan satu parameter berupa fungsi pembanding. Mungkin kamu akan sedikit bingung dengan code dibawah ini, namun intinya adalah kita membuat satu fungsi yang menilai apakah nilai pertama lebih kecil dari nilai kedua.

# CONTOH CODE
var arr = [1, 2, 15];
arr.sort(function(value1, value2) { return value1 > value2 });
console.log(arr); // 1, 2, 15

dengan fungsi di dalam ini, kita juga bisa membuat fungsi sort yang descending:

# CONTOH CODE
var arr = [1, 2, 15];
arr.sort(function(value1, value2) { return value1 < value2 });
console.log(arr); // 15, 2, 1

# slice()

Slice adalah fungsi array yang akan mengambil irisan atau porsi dari sebuah array. Fungsi slice menerima satu atau dua parameter. Parameter pertama adalah index irisan diambil, dan parameter kedua adalah index irisan terakhir diambil. Jika parameter kedua tidak didefinisikan, irisan akan diambil hingga akhir dari array.

# CONTOH CODE
var arr = [0, 1, 2, 3, 4];
var irisan1 = arr.slice(1,3); // mengambil irisan array mulai dari index 1 hingga index 2 (sebelum index 3). Index 3 tidak ikut diambil.
console.log(irisan1); // [1, 2]
var irisan2 = arr.slice(1);
console.log(irisan2); // [1, 2, 3, 4]
var irisan3 = arr.slice(2, 3);
console.log(irisan3); // [2]
var irisan4 = arr.slice(2, 2);
console.log(irisan4); // [] KOSONG!

# splice()

Splice adalah fungsi array yang menghapus dan/atau menambah nilai ke dalam array. Fungsi splice menerima satu, dua, atau lebih parameter.

Strukturnya adalah sebagai berikut:

array.splice([IndexMulai], [JumlahNilaiYangDihapus], [NilaiYangDitambahkan1], [NilaiYangDitambahkan2], ...);

IndexMulai = index array yang akan dimodifikasi. JumlahNilaiYangDihapus = jumlah nilai yang dihapus, dimulai dari IndexMulai. Misal, IndexMulai nya 0, dan JumlahNilaiYangDihapus adalah 2. Maka kita akan menghapus dua nilai mulai dari index 0, yaitu nilai di index 0 dan index 1. NilaiYangDitambahkan1, NilaiYangDitambahkan2, ... = nilai-nilai yang akan ditambahkan setelah IndexMulai.

# Gambarannya dicontohkan sebagai berikut:

var arr = ["buku", "laptop", "komputer"];
arr.splice(2, 0, "televisi"); // Menghapus 0 nilai dari index 2, dan menambah 1 nilai yaitu "televisi" pada index 2.
console.log(arr); // ["buku", "laptop", "televisi", "komputer"]

arr.splice(0, 2); // Menghapus 2 nilai dari index 0
console.log(arr); // ["televisi", "komputer"]

arr.splice(0, 1, "majalah", "koran"); // Menghapus 1 nilai dari index 0, dan menambah 2 nilai yaitu "majalah" dan "koran"
console.log(arr); // [majalah", "koran", "komputer"]

# split()

Split adalah fungsi yang memecah string dan mengembalikan nilai berupa array sesuai dengan separator atau pemisah tertentu yang didefinisikan. Fungsi split menerima satu parameter, yaitu karakter apa yang akan menjadi pemisah/separator.

# CONTOH CODE
var kalimat = "saya adalah full-stack javascript programmer!";
var kata = kalimat.split(" "); // kalimat dipecah dengan separator berupa spasi.
console.log(kata); // ["saya", "adalah", "full-stack", "javascript", "programmer!"]

# Multidimensional Array

Multidimensional array (array multidimensi) adalah sebuah array yang berisikan array lagi didalamnya. Konsepnya penggunaannya sama dengan array biasa (satu dimensi), hanya saja jumlah indeks yang digunakan saat mengakses nilai didalam array adalah sebanyak dimensi dari array tersebut.

Contoh array multidimensi antara lain diagram kartesius dan matriks. Diagram kartesius dan matriks adalah array multidimensi yang sama-sama membutuhkan koordinat untuk mengakses nilai didalamnya.

(y)
4 |       *
3 |     *
2 |   *
1 | *
  + - - - - (x)
0   1 2 3 4

Diagram kartesius adalah contoh array 2 dimensi. Setiap titik pada diagram di atas memiliki koordinat (x,y) tertentu yaitu (1,1), (2,2), (3,3), dan (4,4).

# berikut contoh array 2 dimensi pada JavaScript dan cara penggunaannya

// cara deklarasi array 2 dimensi kosong
var arr2D = [[]];

// contoh array 2 dimensi
var arr2D = [ [1,2], [3,4], [5,6] ];
var murid = [ ['Budi', 'SD 1 Cicayur'], ['Suci', 'SD 23 Beji'] ];

// cara mengakses nilai didalam array 2 dimensi
console.log(arr2D[0]);    // [1,2]
console.log(arr2D[0][1]); // 2
console.log(murid[1]);    // ['Suci', 'SD 23 Beji']
console.log(murid[1][1]); // 'SD 23 Beji''

// array 2 dimensi dengan built-in functions
arr2D.push([7,8]);        // arr2D = [ [1,2], [3,4], [5,6], [7,8] ]
arr2D[1].push(0);         // arr2D = [ [1,2], [3,4,0], [5,6], [7,8] ]
arr2D[0].pop();           // arr2D = [ [1], [3,4,0], [5,6], [7,8] ]
arr2D[2].pop();           // arr2D = [ [1], [3,4,0], [5], [7,8] ]

#    emoji-notebook_with_decorative_cover Memahami Tipe Data String pada JavaScript
# String pada JavaScript
# Objectives

    Memahami Tipe Data String pada JavaScript
    Mengetahui Property dan Method yang Dimiliki String
    Mengetahui Cara Menggunakan Property dan Method yang Dimiliki String
    Mengetahui Konversi Tipe Data Lain ke String dan Sebaliknya

# Learnings

    More About String
    String Properties
    String Methods
    Typecasting To and From String

# More About String

String adalah tipe data yang yang berisikan karakter-karakter alfanumerik yang dibungkus dengan karakter kutip (' dan "). karakter-karakter pada string dapat diakses menggunakan indeks atau posisi, dimana dimulai dari angka 0.

# CONTOH CODE
var title = 'Your Name';

// mengambil huruf pertama dari string
console.log(title[0]); // 'Y'

// mengambil huruf terakhir dari string. Apa itu length? Penjelasan .length di section selanjutnya :)
console.log(title[title.length - 1]); // 'e'

// "memaksa" perubahan nilai di posisi 0
title[0] = 'T';
// tidak akan ada perubahan
console.log(title); // 'Your Name'

title = 'My name';
// ada perubahan, karena assign keseluruhan string
console.log(title); // 'My name'

// menambahkan string dengan simbol '+'
title = title + ' is Bento';

console.log(title); // 'My name is Bento'

Pada JavaScript, tipe data primitif seperti String diperlakukan seperti objek. Oleh karena itu, String memiliki property dan method. Apabila kamu belum mendengar tentang Objek pada JavaScript (dan memang seharusnya belum), kamu tidak perlu pusing dengan kedua istilah tersebut. Secara sederhana, property dan method adalah kemampuan milik String yang dapat digunakan untuk mempermudah kita dalam melakukan pemrograman. Kamu cukup menggunakan apa yang dimanakan dengan method. Method, akan lebih dalam dibahas di materi JavaScript Function.
# String Properties
# .length

Mengembalikan panjang dari suatu string; perhitungan dimulai dari 1.

var name = 'Uvuvwevwevwe Onyetenyevwe Ugwemubwem Ossas';
console.log(name.length); // 42

# String Methods
# .charAt([indeks])

Mengembalikan karakter pada indeks yang diinginkan

console.log('i am a string'.charAt(3)); // 'm'

# .concat([string])

Menggabungkan beberapa string dan mengembalikannya menjadi string baru.

var string1 = 'good';
var string2 = 'luck';
console.log(string1.concat(string2)); // goodluck

# .indexOf([string/karakter])

Mengembalikan indeks dari string/karakter yang dicari, yang pertama kali ditemukan, atau -1 apabila tidak ditemukan.

var text = 'dung dung ces!';
console.log(text.indexOf('dung'));  // 0
console.log(text.indexOf('u'));     // 1
console.log(text.indexOf('jreng')); // -1

# .substring([indeks awal], [indeks akhir (optional)])

Mengembalikan potongan string mulai dari indeks pada parameter pertama sampai dengan indeks pada parameter kedua. Bila parameter kedua tidak ditentukan, maka secara otomatis berakhir pada karakter terakhir. Karakter pada indeks yang ditentukan pada parameter kedua tidak diikutkan sebagai output.

var car1 = 'Lykan Hypersport';
var car2 = car1.substr(6);
console.log(car2); // Hypersport

# .substr([indeks awal], [jumlah karakter yang diambil (optional)])

Mendapatkan potongan string mulai dari indeks pada parameter pertama dengan jumlah indeks pada parameter kedua. Bila parameter kedua tidak ditentukan, maka secara otomatis berakhir pada karakter terakhir. Karakter pada indeks yang ditentukan pada parameter kedua tidak diikutkan sebagai output.

var motor1 = 'zelda motor';
var motor2 = car1.substr(2, 2);
console.log(motor2); // ld

# .toUpperCase()

Mengembalikan string baru dengan semua karakter yang diubah menjadi huruf kapital.

var letter = 'This Letter Is For You';
var upper  = letter.toUpperCase();
console.log(upper); // THIS LETTER IS FOR YOU

# .toLowerCase()

Mengembalikan string baru dengan semua karakter yang diubah menjadi huruf kecil

var letter = 'This Letter Is For You';
var lower  = letter.toLowerCase();
console.log(upper); // this letter is for you

# .trim()

Mengembalikan string baru yang sudah dihapus karakter whitespace pada awal dan akhir string tersebut.

var username    = ' administrator ';
var newUsername = username.trim(); // 'newUsername = 'administrator'

# Typecasting To and From String

Typecasting berarti mengubah data dari suatu tipe data ke tipe data yang lain. Pada JavaScript, typecasting sering dilakukan pada string, baik dari suatu tipe data menjadi string atau sebaliknya. Berikut beberapa cara yang bisa dilakukan untuk melakukan typecasting terhadap string.
String([angka/array])

Fungsi global String() dapat dipanggil kapan saja pada program JavaScript dan akan mengembalikan String dari parameter yang diberikan.

var int  = 12;
var real = 3.45;
var arr  = [6, 7, 8];

var strInt  = String(int);
var strReal = String(real);
var strArr  = String(arr);

console.log(strInt);  // '12'
console.log(strReal); // '3.45'
console.log(strArr);  // '6,7,8'

# .toString()

Mengonversi tipe data lain menjadi string. Bila data tersebut adalah array, setiap nilai akan dituliskan dan dipisah dengan karakter koma.

var number = 21;
console.log(number.toString()); // '21'
var array = [1,2];
console.log(array.toString());  // '1,2'

# Number([String])

Fungsi global Number() mengonversi tipe data string menjadi angka. Data yang diberikan pada parameter harus berupa karakter angka saja, dengan titik bila angka adalah bilangan desimal. Bila parameter berisi karakter selain angka dan/atau titik, Number() akan mengembalikan NaN (Not a Number).

var number1 = Number("90");   // number1 = 90
var number2 = Number("1.23"); // number2 = 1.23
var number3 = Number("4 5");  // number3 = NaN

parseInt([String]) dan parseFloat([String])

Fungsi global parseInt([String]) dan parseFloat([String]) mengembalikan angka dari string. Bila angka adalah bilangan desimal maka gunakan parseFloat(), bila tidak bilangan dibelakang koma akan diabaikan.

var int  = '89';
var real = '56.7';

var strInt_1 = parseInt(int);  // strInt_1 = 89
var strInt_2 = parseInt(real); // strInt_2 = 56

var strReal_1 = parseFloat(int); // strReal_1 = 89
var strReal_2 = parseFloat(int); // strReal_2 = 56.7

# Additional References

    String by Mozilla Developer Network
    JavaScript String Reference by W3School
    JavaScript Type Conversion



# Tugas :

#    emoji-anchor [Exercises 1] JavaScript Building Blocks: Codecademy JavaScript Course (Unit 4 - Arrays)
#    emoji-anchor [Exercises 2] Tantangan Array 1 (Mengakses Nilai dalam Array)
# Mengakses Nilai Dalam Array

Tahukah kamu jika string adalah sebuah array? Kamu dapat mengakses karakter-karakter pada sebuah string layaknya mengakses nilai pada sebuah array. Untuk membuktikannya, kerjakanlah tantangan ini!
Objectives

    Mengetahui properties Pada Array
    Mengerti Cara Mengakses Nilai Dalam Array

# Directions

Buatlah sebuah fungsi dengan nama balikString. Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.
Example

//input "hello world!"
//output
"!dlrow olleh"

# Hints

Untuk membantumu mengerjakan tantangan ini, gunakanlah properti length pada sebuah array yang akan memberikan panjang dari array-nya. Ingat, indeks sebuah array pada JavaScript dimulai dari 0. Untuk tugas ini, kamu wajib menggunakan looping dan dilarang menggunakan sintaks .reverse!
  
#    emoji-anchor [Exercises 3] Tantangan Array 2 (Melooping menggunakan Array)
# Melakukan Looping Data Array

Sering kali data yang diterima dari database adalah array yang multidimensi (array di dalam array). Sebagai developer, tugas kita adalah mengolah data tersebut agar dapat menampilkan informasi yang diinginkan.
# Objectives

    Mengenal Array Multidimensi
    Mengerti Cara Mengakses Nilai Array Multidimensi

# Directions

Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n. Contoh input dapat dilihat dibawah:

# //contoh input
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
#    emoji-anchor [Exercises 4] Tantangan Array 3 (Array Join, Split, Slice, Splice, Sort)
# Menggunakan Built-in Function pada Array

Array pada JavaScript memiliki sekumpulan built-in function yang digunakan untuk mempermudah developer untuk mengolah data di dalamnya. Beberapa fungsi yang sering digunakan antara lain join, split, slice, splice, dan sort. Kerjakanlah tantangan ini untuk memperkuat pengertian kamu tentang built-in function tersebut.
# Objectives

    Mengerti Kegunaan dari Built-in Function yang dimiliki Array
    Mampu Menggunakan Built-in Function yang dimiliki Array

# Directions

# //contoh output
["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

    Buatlah sebuah function dengan nama dataHandling2 yang akan menerima input array seperti di atas.

    Gunakan fungsi splice untuk memodifikasi variabel tersebut agar menjadi seperti array dibawah. Lalu console.log array yang baru seperti di bawah.

["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]

    Berdasarkan elemen yang berisikan tanggal/bulan/tahun (elemen ke-4), ambil angka bulan dan console.log nama bulan sesuai dengan angka tersebut.
        Gunakan split untuk memisahkan antara tanggal, bulan, dan tahun.
        Format tanggal pada data adalah dd-mm-YYYY
        Misal angka bulan 01, tuliskan "Januari"
        Gunakan switch case untuk menuliskan bulan di atas.

    Pada array hasil split dari tanggal/bulan/tahun, lakukan sorting secara descending dan console.log array yang sudah di-sort.

    Masih pada array hasil split dari elemen tanggal/bulan/tahun, gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.

    Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. Gunakan slice untuk menghapus kelebihan karakter dan console.log nama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice.

# Test-case

Untuk memastikan program kamu sudah bekerja dengan benar, gunakan test-case dibawah.

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */

# Rabu
# Logic Challenges Refresh

Gunakan waktu sejenak untuk berkenalan dengan Node Js, sebuah platform yang memungkinkan kamu untuk menjalankan script JavaScript di server. Jadi, kamu bisa dengan mudah membuat kode JavaScript yang dapat berjalan di terminal kamu. Hari ini juga, kamu akan mencoba langsung mengimplementasi kodemu melalui node Js!

Materi & Referensi :

#    emoji-notebook_with_decorative_cover Mengenal Node JS
# Node JS
# Objectives

    ▢ Mengenal node.js
    ▢ Meninstall node.js di komputer
    ▢ Memanfaatkan node.js untuk menjalankan JavaScript melalui server-side

# Learnings
Mengenal Node.js

# Node.js Logo

Pada dasarnya merupakan implementasi JavaScript sebagai platform di backend atau server. Secara teknis, adalah sebuah runtime JavaScript yang berjalan dengan Chrome V8 JavaScript engine. Fitur utamanya adalah model event-driven dan non-blocking Input/Output (I/O) yang ringan dan efisient. Node.js memiliki pengatur paket atau modul aplikasi yang disebut npm, yang juga merupakan ekosistem library open source.

Mayoritas tools yang akan temukan ke depan, bahkan dari berbagai pedoman di sini, sebenarnya membutuhkan instalasi Node.js. Tapi untuk sementara waktu, gunakan Node.js jika sudah siap saja. Beberapa hal yang kita kenalkan saja tanpa harus digunakan segera.
# Instalasi Node.js

Kamu bisa menginstall Node.js melalui website resmi node.js dan mendownload node.js ke komputer kamu sesuai dengan sistem operasi yang kamu miliki. Ikuti langkah-langkah yang ditunjukkan pada installer dan dalam waktu yang tidak lama, kamu sukses memiliki node.js berjalan di komputermu!

Untuk mengetest apakah node.jsmu sudah berjalan dengan benar, masuk ke Terminal atau Command Prompt di komputermu dan jalankan:

> node --version

Apabila versi node.js mu keluar, berarti kamu telah menginstall node.js dengan benar! Dengan menginstall node.js, kamu juga secara otomatis telah menginstall Node Package Manager, sebuah tools yang digunakan untuk memaintain semua package yang akan berjalan di atas node.js. Kamu bisa abaikan soal NPM untuk sementara, namun ini akan menjadi senjata utama kita di materi HACKTIV8 yang akan mendatang!
# REPL Node.js

REPL adalah sebuah fitur pada node.js yang memiliki kepanjangan adalah Read Eval Print Loop. Kamu bisa menjalankan berbagai operasi javascript pada Node.js melalui REPL. Untuk mencobanya, kamu hanya perlu menjalankan node, dan memasukkan berbagai instruksi operasi yang mau kamu jalankan.

> node
> 1 + 2
3
> 'hello HACKTIV8'
'hello HACKTIV8'
> 'node js is ' + 'cool!'
'node js is cool!'

Menjalankan file JavaScript melalui Terminal dengan Node.js

Dengan node.js, kamu bisa menjalankan file JavaScript tanpa harus melalui client-side (browser), namun dengan server-side (menggunakan terminal atau command prompt). Untuk menjalankan, kamu tinggal menggunakan node nama file javascript yang mau kamu jalankan.

# contoh

test-javascript.js:

var message = 'hello! I\'m calling JavaScript using node! W00t!'
console.log(message)

CONSOLE:

> node test-javascript.js
'hello! I\'m calling JavaScript using node! W00t!'

#    emoji-notebook_with_decorative_cover Membuat code JavaScript-mu dengan Baik
# Learn JavaScript Code Style dan Guide
# Objectives

Seperti yang tertera pada bagian referensi pekan ini, ada beberapa hal yang perlu kita perhatikan agar praktik code dan hasil kerja kita baik dan berkualitas.
# Learnings
1. Memahami cara penulisan JavaScript yang baik

    ▢ Pahami berbagai aturan penulisan JavaScript di sini:

    ▢ Cek berbagai pedoman penulisan code berikut:
        Airbnb JavaScript Style Guide
        Google JavaScript Style Guide
        Code Conventions for the JavaScript, by Douglas Crockford
        The Zen Approach: JavaScript Styleguide

2. Menggunakan tiap bahasa sesuai fungsi utamanya

Ini saran klasik yang sudah seharusnya diketahui semua developer. Tiap bahasa yang sudah kita ketahui saja misalnya:

    HTML dibuat untuk menstrukturkan halaman web
    CSS dibuat untuk styling halaman
    JavaScript untuk memberi interaksi dan fungsi halaman

Maka dari itu misalnya jangan paksakan JavaScript untuk mengubah style halaman web dengan fungsi yang mirip dan sebenarnya CSS sudah bisa lakukan. Ketahuilah kehandalan masing-masing bahasa agar tujuan kita bisa tercapai dengan tepat.
3. Membuat kode program yang mudah dibaca

Kode yang baik sederhananya adalah kode yang mudah dibaca oleh manusia. Termasuk penamaan variable maupun function yang mudah dibaca dan digunakan.

Contoh kurang baik atau buruk:

var coba = "andi";
var cobacoba = "ruben";
cobaSesuatu = function(a, b) {
  console.log(a + b)
}
cobaSesuatu(coba, cobacoba)

Contoh baik:

// Initiate name variables
var firstName, lastName, fullName;

/*
 * Concatinate first name and last name
 * to create full name
 *
 * @param firstName String
 * @param lastName String
 */
var concateFullName = function(firstName, inputLastName) {
  return `${firstName} ${lastName}`;
}

inputFirstName = "Andi";
inputLastName = "Ruben";

// Do concatination
fullName = concateFullName(inputFirstName, inputLastName);

// Log/print full name to the console
console.log(fullName);

Kode kedua memang lebih panjang, namun lebih jelas dan terbaca dengan nyaman. Bahkan orang lain pun dapat mengerti maksud kode tersebut. Tentu saja dalam menulis code pun, tak ada yang hitam putih, namun abu-abu. Seiring pengalaman, kamu akan mengetehui mana saja pertimbangan yang harus diambil dalam mendesain dan menulis code.
4. Mengenal Style Checking dan Hinting/Linting

Dalam penulisan code apalagi JavaScript, akan ada sangat banyak variasi cara dan gaya penyusunannya. Maka dari itu, kode kita bisa saja rentan berantakan dan tidak sesuai dengan good/best practice yang sudah kita pelajari. Manusia tak luput dari kesalahan, salah ketik (type), dan lainnya. Maka dari itu kita bisa andalkan alat pengecek code style bahkan potensi error/masalah, aksesoris bernama hinter atau linter. Hinter atau linter ini akan melakukan proses hinting and linting, menganalisis code kita tanpa menjalankannya.

Berikut beberapa hinter/linter yang paling populer:

    JSLint: The JavaScript Code Quality Tool
    JSHint: A JavaScript Code Quality Tool
    JSCS: Code style linter and formatter for your style guide
    ESLint: Pluggable JavaScript linter


# Tugas :
#    emoji-anchor [Exercises 5 (Auto)] Palindrome
# Logic Challenge - Palindrome
# Problem

Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
# Code

function palindrome(kata) {
  // you can only write your code here!
}

# // TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

#   emoji-anchor [Exercises 6 (Auto)] Palindrome Angka
# Logic Challenge - Number Palindrome
# Problem

Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.
# Code

function angkaPalindrome(num) {
  // you can only write your code here!
}

# // TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

#   emoji-anchor [Exercises 7 (Auto)] Hitung Jumlah Kata
# Logic Challenge - Menghitung Jumlah Kata
# Problem

Diberikan sebuah function hitungJumlahKata(kalimat) yang menerima parameter berupa string yang merupakan sebuah kalimat. Function akan mengembalikan jumlah kata dari kalimat tersebut. Contoh, "I have a dream" akan menghasilkan nilai 4, karena memiliki 4 kata.
# Code

function hitungJumlahKata(kalimat) {
  // you can only write your code here!
}

# // TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5

#   emoji-anchor [Exercises 8 (Auto)] Pasangan Angka Terbesar
# Logic Challenge - Pasangan Angka Terbesar
# Problem

Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.
# Code

function pasanganTerbesar(num) {
  // you can only write your code here!
}

# // TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

# Kamis
# More Logic Challenges

Hari baru, tantangan baru. Setelah belajar tentang array and solve berbagai problem dengan arrays, saatnya perbanyak latihan dengan soal yang terus melatih logika!

# Tugas :

#    emoji-anchor [Exercises 9 (Auto)] Cari Mean
# Logic Challenge - Mencari Mean
# Problem

Diberikan sebuah function cariMean(arr) yang menerima sebuah array angka. Function akan me-return mean dari array atau deret angka tersebut. Mean adalah angka rata-rata dari deret bilangan tersebut. Contoh, mean atau rata-rata dari [1, 2, 3, 4, 5] adalah 3. Kita perlu kemudian melakukan pembulatan angka dari hasil mean yang didapatkan (pembulatan ke atas).
# Code

function cariMean(arr) {
  // you can only write your code here!
}

# // TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7

#    emoji-anchor [Exercises 10 (Auto)] Perkalian Unik
# Logic Challenge - Perkalian Unik
# Problem

Diberikan sebuah function perkalianUnik(arr) yang menerima satu parameter berupa array yang berisikan angka. Function akan me-return array baru yang mengandung angka yang setiap nilainya merupakan hasil kali angka lain yang bukan angka itu sendiri. Contoh, jika arr adalah [1, 2, 3, 4, 5], maka function akan mereturn [120, 60, 40, 30, 24], karena 120 adalah 2 * 3 * 4 * 5, 60 adalah 1 * 3 * 4 * 5, 40 adalah 1 * 2 * 4 * 5, dan seterusnya.
# Code

function perkalianUnik(arr) {
  // you can only write your code here!
}

# // TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]

#    emoji-anchor [Exercises 11 (Auto)] Deret Aritmatika
# Logic Challenge - Tentukan Deret Aritmatika
# Problem

Diberikan sebuah function tentukanDeretAritmatika(arr) yang menerima satu parameter berupa array yang terdiri dari angka. Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret aritmatika. Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten. Contoh, [2, 4, 6, 8] adalah deret aritmatika dengan pertambahan nilai sebesar 2, dan [2, 4, 6, 9] bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten.
# Code

function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
}

# // TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

#    emoji-anchor [Exercises 12 (Auto)] Deret Geometri
# Logic Challenge - Tentukan Deret Geometri
# Problem

Diberikan sebuah function tentukanDeretGeometri(arr) yang menerima satu parameter berupa array yang terdiri dari angka. Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret geometri. Deret geometri adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten secara perkalian. Contoh, [1, 3, 9, 27, 81] adalah deret aritmatika dengan pertambahan nilai sebesar pengalian 3, dan [1, 3, 9, 27, 48] bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten secara perkalian (27 * 3 bukanlah 48!).
# Code

function tentukanDeretGeometri(arr) {
  // you can only write your code here!
}

# // TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false


# Jumat
More Arrays + Multidimensional Array

Kamu telah mencoba berbagai macam soal, menggunakan array maupun tidak. Tentunya di saat ini kamu telah bisa menilai cara mana yang lebih baik menggunakan array, dan yang tidak perlu, bukan?

Hari ini, kamu akan bermain dengan array dan bentuk selanjutnya, yaitu array multidimensi. Tenang saja, array multidimensi konsep nya sama persis dengan array satu dimensi!

#    emoji-anchor [Exercises 13 (Auto)] Target Terdekat
# Logic Challenge - Target Terdekat
# Problem

Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
# Code

function targetTerdekat(arr) {
  // you can only write your code here!
}

# // TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

#    emoji-anchor [Exercises 14] Mengelompokkan Angka
# Logic Challenge - Mengelompokkan Angka
# Problem

Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka. Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:

    kelompok pertama (baris pertama) merupakan angka-angka genap
    kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
    kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3

Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
# Code

function mengelompokkanAngka(arr) {
  // you can only write your code here!
}

# // TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

#    emoji-anchor [Exercises 15] Mengelompokkan Hewan
# Logic Challenge - Mengelompokkan Hewan
# Problem

Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

Urutan hewan dalam array setiap pengelompokan huruf tidak penting.
# Code

function groupAnimals(animals) {
  // you can only write your code here!
}

# // TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

# Sabtu dan Minggu

    Refleksi kegiatan pekan ini
    Blogging teknikal terkait skill pekan ini

Jika ada hal yang perlu ditanyakan, langsung saja berdiskusi di grup ya.

Salam,

Tim Hacktiv8

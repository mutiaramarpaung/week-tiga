/** Logic Challenge - Palindrome */
function palindrome(kata) {
    let n = kata.length;
    let balikKata = '';
    for (let i = n - 1; i >= 0; i--) {
        balikKata += kata[i]; 
            if (kata === balikKata){
                true
            }
            else{

            }
    }
    
    return kata === balikKata;
    
}

/** cobain ah */
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
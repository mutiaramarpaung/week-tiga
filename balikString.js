// balik string exercise 1
function balikString(string) {
    let n=string.length;
    string_balik=''
    for (let i=n-1; i>=0;i--){
        string_balik += string[i];
    }
    return string_balik;
}
console.log(balikString('hello world!'));

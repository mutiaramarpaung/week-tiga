/** Logic Challenge - target terdekat */
var a = ['x', '', '', '', 'x', 'x', '', 'o'];
function targetTerdekat(arr) {
  return arr.indexOf('x') - arr.indexOf('o') > 0? arr.indexOf('x') - arr.indexOf('o') : (arr.length-1) + (arr.indexOf('x') - arr.indexOf('o'));
}
console.log(a.length-1);
console.log(a.indexOf(a[5]));
console.log(a.indexOf('o'));
/** cobain ah */
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', '', 'o'])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
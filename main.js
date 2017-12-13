function lcm_two_numbers(x, y) {
   if ((typeof x !== 'number') || (typeof y !== 'number'))
    return false;
  return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}

function gcd_two_numbers(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

function NWW(arr) {
   if(arr.length > 2) {
     var first = arr.shift();
     var result = NWW(arr);
     return lcm_two_numbers(first, result);
   }
   return lcm_two_numbers(arr[0], arr[1]);
}

console.log("example:");
arr = [65,10,5];
console.log("arr= ");
console.log(arr);
console.log("NWW= ");
console.log(NWW(arr));





















//

var plusOne = function(digits) {
   let res = "";

   for(let i = 0 ; i < digits.length ; i++){
    res = res + digits[i]
   }

   let data = Number(res) + 1;
   let result = String(data).split("");
   return ([...result]);

};


let digits = [9, 9, 9];
console.log (plusOne(digits))
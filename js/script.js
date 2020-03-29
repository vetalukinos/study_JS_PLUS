
let num = 266219;

let str = num.toString().split('');

let multiplication = 1;
for (let i = 0; i < str.length; i++) {
    multiplication *= str[i];
}
console.log(multiplication);

let degreeOf = multiplication ** 3;

console.log(degreeOf.toString().slice(0,2));



















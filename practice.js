arr = [3, 4, 5, 6, 7];

function avg(a, b, c) {
    return a + b + c / 3;
}

let a = avg(...arr);
console.log(a);
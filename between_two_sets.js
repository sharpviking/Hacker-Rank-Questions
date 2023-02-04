function getTotalX(a, b) {
    let count = 0;
    for (let i = a[a.length - 1]; i <= b[0]; i++) {
        if (a.every(num => i % num === 0) && b.every(num => num % i === 0)) {
            count++;
        }
    }
    return count;
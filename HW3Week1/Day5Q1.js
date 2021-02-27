function isPrime(num) {
    for(let i = 2; i < value; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return value > 1;
}
console.log(isPrime(28));
function isautomorphic(number) {
    const lastdigitofNumber = number % 10
    const lastdigitofSqr = ( lastdigitofNumber * lastdigitofNumber ) % 10
    return lastdigitofSqr === lastdigitofNumber;
}

console.log(isautomorphic(35));
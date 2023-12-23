function expo(a, x, cb) {return cb(exponent(a, x))}

function exponent (a, x) {
    if (x === 0) {
        return 1
    } else if (x === 1) {
        return a
    } else {
        const result = a * exponent(a, x-1)
        return result
    }
}

expo(5, 3, res => console.log(res));
 
  
// exf function
function exf(s, n) {
    if(n <= 0 || n == NaN || !Number.isInteger(n)) {
        console.log("Error: n must be a positive integer");
        return;
    }
    for (var i = 0; i < n; i++) {
        console.log(s);
    }
}

exports.exf = exf;

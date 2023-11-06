// exf function
function exf(s, n) {
    if(n <= 0 || n == NaN) {
        console.log("Error: n must be a positive integer");
        return;
    }
    for (var i = 0; i < n; i++) {
        console.log(s);
    }
}

exf("echo", 5) ;
exf("JS from server", 10) ;

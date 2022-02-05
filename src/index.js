module.exports = function reverse (n) {
  
    if(n < 0){
        n = -n;
    }

    let x = n.toString().split("").reverse().join("");

    return +x;
}



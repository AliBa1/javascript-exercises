const fibonacci = function(num) {
    if (num<0) {
        return "OOPS";
    }
    let i=2;
    let sum = [1, 1];
    while (i<num) {
        sum[i] = sum[i-1] + sum[i-2];
        i++;
    }

    return sum[num-1];
};

// Do not edit below this line
module.exports = fibonacci;

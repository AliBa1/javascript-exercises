const sumAll = function(num1, num2) {
    let sum = 0;
    // args.forEach(num => {
    //     sum += num;
    // });
    // return sum

    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }

    if (num1 < num2) {
        for (let i = num1; i<num2+1; i++) {
            sum += i;
        }

        return sum;
    } else {
        for (let i = num2; i<num1+1; i++) {
            sum += i;
        }

        return sum;
    }
    
};

// Do not edit below this line
module.exports = sumAll;

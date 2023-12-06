const reverseString = function(string) {
    let reversed = new Array();
    let j = 0;
    for (let i = string.length-1; i>-1; i--) {
        reversed[j] = string[i];
        j++;
    }

    // Make reversed a string without commas
    return reversed.join("");
};

// Do not edit below this line
module.exports = reverseString;

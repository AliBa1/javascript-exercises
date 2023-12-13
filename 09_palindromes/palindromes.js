const palindromes = function (string) {
    /*
    function isLetter(char) {
        return /^[a-zA-Z]$/.test(char);
    }

    let reversedWord = '';
    let symbols = '';
    // string.toLowerCase(); 
    for (let i=string.length-1; i>-1; i--) {
        if (isLetter(string[i])){
            reversedWord += string[i];
        } else {
            symbols += string[i];
        }
    }

    reversedWord += symbols;
    */

    let reversedWord = string.split('').reverse().filter(char => /^[a-zA-Z0-9]$/.test(char)).join('');
    string = string.split('').filter(char => /^[a-zA-Z0-9]$/.test(char)).join('');

    if (reversedWord.toLowerCase() == string.toLowerCase()) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

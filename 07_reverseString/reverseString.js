const reverseString = function(str) {
    //Declare new Array, will recieve string characters
    let strArr = [];
    //Add string characters to array
    for (const i in str) {
        strArr[i] = str[i]
    }
    //Declare Array for reversed characters
    let revArr = [];
    //Populate Array with characters reversed
    for (let i = 1; i <= strArr.length; i++) {
            revArr[i] = strArr[strArr.length-i];
    }
    //Eliminate first, empty element
    revArr.shift();
    
    //Create new strin joining elements in reversed array
    const Nstr = revArr.join('');
    return Nstr;
};

// Do not edit below this line
module.exports = reverseString;

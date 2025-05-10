const repeatString = function(str,times) {
    if (times < 0) {
        return "ERROR";
    }else{
        var Nstr = '';
        for (let i = 0; i < times; i++) {
            Nstr = Nstr + str;
        }
        return Nstr;
    } 
};

// Do not edit below this line
module.exports = repeatString;

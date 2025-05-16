const sumAll = function(n1,n2) {

    if (typeof(n1)!='number' || typeof(n2)!= 'number') {
        return 'ERROR';
    }
    if (Number.isInteger(n1) != true || Number.isInteger(n2) != true)
    {
        return "ERROR"
    }
    if (n1 < 0 || n2 <0) {
        return "ERROR"
    } 
    // If the first number is larger than the second
    if (n1 < n2) {
        var res = 0
        for (let i = n1 ; i <= n2; i++){
            //console.log(i);
            res = res + (i)
            //console.log("res "+res), console.log("n1 "+i);
        }
    } else {
        var res = 0
        for (let i = n2 ; i <= n1; i++){
            //console.log(i);
            res = res + (i)
            //console.log("res "+res), console.log("n1 "+i);
        }

    }
    return res
};
const attemptn = sumAll(1,2);
//console.log = attemptn;
//console.log(sumAll(2,4));
// Do not edit below this line
module.exports = sumAll;

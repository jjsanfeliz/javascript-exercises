const leapYears = function(year) {
    var lyear = false;
    if (year % 4 === 0) {
      lyear = true;  
    }
        if (year % 4 === 0 && year % 100 === 0) {
        lyear = false;
    }
    if (year % 4 === 0 && year % 400 === 0) {
        lyear = true;
    }
    return lyear;
};

// Do not edit below this line
module.exports = leapYears;

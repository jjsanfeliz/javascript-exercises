const removeFromArray = function(arr,...args) {
    //First if checks that an array is given in the first argument.
    if (Array.isArray(arr) != true ||  typeof(arr) != "object" ) {
        return "Insert an Array";

        //If an array is entered, we continue
    }else{
       const remArr = args;
       var Narr = [];

        //The first loop cycles through the original array
        for (let i = 0; i < arr.length; i++) {

            //The second loop cycles through the remove arguments array
            for (let j = 0; j < remArr.length; j++) {
                //If the argument[i] is equal to any arguments from the removal array, splice it!
                if (arr[i] === remArr[j]) {
                    arr.splice(i,1) //Removes the element from the array
                    i-=1; //Goes back an index due to the removal of an item, otherwise, it jumps an item
                }
            }
        }
        return arr;
    }
};

// Do not edit below this line
module.exports = removeFromArray;

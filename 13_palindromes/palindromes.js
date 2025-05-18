const palindromes = function (word) {
    const NPSword = removePunctuationAndSpaces(word);
    const NPSLword = NPSword.toLowerCase();
    const Rword = reverseString(NPSLword);
    if (Rword === NPSLword) {
        return true;
    }else{
        return false;
    }

};
const reverseString = function (string) {
    
  return string.split("").reverse().join("");
};

function removePunctuationAndSpaces(str) {
  return str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
}
// Do not edit below this line
module.exports = palindromes;

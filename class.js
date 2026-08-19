var subTotal = 200;

function calculateDC(deliveryCharges) {
    return subTotal + deliveryCharges;
}

function calculateTax() {
    var taxPrice = 200;
    return taxPrice + calculateDC(200);
}

console.log(calculateDC());

var base = +prompt('Enter base');
var perpendicular = +prompt('Enter perpendicular');

function calculateSquare(num) {
    return num * num;
};

function calculateHypotenuse() {
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);

    return baseSquare + perpendicular
};

console.log(calculateHypotenuse());



function checkPalindrome(word) {
    var reverseWord = word.split('').reverse().join('');
    return word === reverseWord
}

console.log(checkPalindrome('madam'))

function checkPalindrome(word) {
    for (var i = 0; i < word.length - 1 / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(checkPalindrome("dad"));

function checkLongestWord(sentence) {
    var result;
    var length = 0;
    var sentenceArray = sentence.split(" ");
    for (var i = 0; i < sentenceArray.length; i++) {
       if(sentenceArray[i].length > longestlength) {
        longestlength = sentenceArray[i].length;
        result = sentenceArray[i];
       }
    };

    return result;
}

console.log(checkLongestWord('Web Development Course'))

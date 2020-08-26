// https://www.codewars.com/kata/59128363e5bc24091a00006f/train/javascript

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
function theJanitor(word) {
    res = alphabet.map( (x,i) => word.indexOf(x) !== -1 ? word.lastIndexOf(x) - word.indexOf(x) + 1 : 0)
return res
}

console.log(theJanitor("abacaba"),[7, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
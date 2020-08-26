//https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

function anagrams(word, words) {
    const sortedWord = word.split('').sort().join('')
    return words.filter( item =>  item.split('').sort().join('') === sortedWord )
}


console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa'])

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer'])

console.log(anagrams('laser', ['lazing', 'lazy', 'lacer']), [])
//https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
  return str.match(/(?:[^aeiou])+/gi).join('')
}

function disemvowel(str) {
  return str.match(/(?:[^aeiou])+/gi).join('')
}

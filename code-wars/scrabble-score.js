function scrabbleScore(str) {
    return str.split('').map(x => x.trim() === '' ? 0 : $dict[x.toUpperCase()]).reduce((a, b) => a + b, 0)
}
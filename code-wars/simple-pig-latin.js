//codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str) {
    return str.split(' ').map(x => x.substr(1, x.length - 1) + x[0] + (/[A-Za-z]/g.test(x[0]) ? 'ay' : '')).join(' ')
}

console.log(pigIt('Pig latin is cool') === 'igPay atinlay siay oolcay')
console.log(pigIt('This is my string') === 'hisTay siay ymay tringsay')

//https://www.codewars.com/kata/52ab60b122e82a6375000bad/train/javascript

function sortReindeer(reindeerNames){
    return swapNames(swapNames(reindeerNames).sort())
}

function swapNames(array){
    return array.map( x=> x.split(' ').reverse().join(' '))
}

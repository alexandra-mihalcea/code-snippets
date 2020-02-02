//https://www.codewars.com/kata/5550d638a99ddb113e0000a2/train/javascript

function josephus(items, k) {
    let newList = []
    let pos = (k - 1) % items.length
    while (items.length > 0) {
        newList.push(items[pos])
        items.splice(pos, 1)
        pos = (pos + k - 1) % items.length
    }
    return newList
}

console.log('-----')
console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2), [2, 4, 6, 8, 10, 3, 7, 1, 9, 5])
console.log(josephus(["C", "o", "d", "e", "W", "a", "r", "s"], 4), ['e', 's', 'W', 'o', 'C', 'd', 'r', 'a'])
console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3), [3, 6, 2, 7, 5, 1, 4])
console.log(josephus([], 3), [])
console.log(josephus([1, 2, 3, 4, 5, 6], 15), [3, 2, 6, 5, 1, 4])
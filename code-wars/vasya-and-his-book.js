//https://www.codewars.com/kata/vasya-and-book/train/javascript

function bookIsDay(pages, days) {
    let count = 0;
    while (pages > 0) {
        pages = pages - days[count % 7]
        count++
    }
    count = count % 7
    return count === 0 ? 7 : count
}

console.log(bookIsDay(100, [15, 20, 20, 15, 10, 30, 45]), 6)
console.log(bookIsDay(100, [10, 10, 10, 10, 10, 10, 10]), 3, "More than 1 week to read the book")


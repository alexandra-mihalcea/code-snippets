//https://www.codewars.com/kata/the-supermarket-queue/train/javascript

function queueTime(customers, n) {
    let res = customers.splice(0, n)
    while (customers.length > 0) {
        let target = res.indexOf(Math.min(...res))
        res[target] += customers.shift()
    }
    return res.length === 0 ? 0 : Math.max(...res)
}


console.log(queueTime([], 1), 0);
console.log(queueTime([1, 2, 3, 4], 1), 10);
console.log(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
console.log(queueTime([1, 2, 3, 4], 1), 10);
console.log(queueTime([1, 2, 3, 4, 5], 100), 5);
console.log(queueTime([26, 6, 42, 29, 27, 11, 37, 26, 28, 45, 23, 15, 3, 43, 47, 41, 5, 21, 28, 24, 5], 3), 182);

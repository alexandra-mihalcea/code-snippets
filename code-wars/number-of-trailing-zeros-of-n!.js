//https://www.codewars.com/kata/number-of-trailing-zeros-of-n/train/javascript

function zeros(n) {
    let count = 0
    let div = 5
    while ((n / div) > 0) {
        count += Math.floor(n / div)
        div = div * 5
    }
    return count
}

console.log(zeros(0), 0, "Testing with n = 0")
console.log(zeros(5), 1, "Testing with n = 5")
console.log(zeros(6), 1, "Testing with n = 6")
console.log(zeros(30), 7, "Testing with n = 30")
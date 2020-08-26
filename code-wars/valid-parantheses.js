//https://www.codewars.com/kata/52774a314c2333f0a7000688

function validParentheses(str) {
    let leftCount = 0
    let rightCount = 0
    for (let pos = 0; pos < str.length; pos++) {
        if (str.charAt(pos) === '(') {
            rightCount++
        } else if (str.charAt(pos) === ')') {
            leftCount++
        }
        if (rightCount < leftCount) {
            return false
        }
    }
    return rightCount === leftCount
}

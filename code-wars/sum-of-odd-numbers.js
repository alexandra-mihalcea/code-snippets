// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064

//             1
//          3     5
//       7     9    11
//    13    15    17    19
// 21    23    25    27    29

//             1
//          2     3
//       4     5     6
//    7    8      9    10
// 11   12    13    14    15

function rowSumOddNumbers(n) {
    let res = 0
    let lastNum = n * (n + 1) / 2
    while (n > 0) {
        res += lastNum * 2 - 1
        lastNum--
        n--
    }
    return res
}

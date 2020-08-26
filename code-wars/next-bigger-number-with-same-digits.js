//https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript

function nextBigger(n) {
    let res = []
    let digits = (n).toString().split('').reverse()
    digits.map(Number)
    let posa = 0;
    let posb = 0;
    while (res <= n) {
        console.log(res, posa, posb, n)
        posb = digits.indexOf(digits.find(x => x < digits[posa]  && digits.indexOf(x) > posb))
        if (posb > -1 && posa !== posb) {
             [digits[posa], digits[posb]] = [digits[posb], digits[posa]]
             res = parseInt(digits.reverse().join(''))
        }
        posa++
        //posa = posb +1
        if(posb>=digits.length-1){
            posb = 0
            posa = 1
        }
    }
    return res
}

function nextBiggerr(n){
    let res = []
    let digits = (n).toString().split('').reverse()
    let pos = 0;
    while(res < n ){
        if(digits[pos] > digits[pos+1]) {
            [digits[pos], digits[pos + 1]] = [digits[pos+1], digits[pos]]
            res = parseInt(digits.reverse().join(''))
        }
        pos++
    }
    return res
}



console.log(nextBigger(12), 21)
console.log(nextBigger(513), 531)
console.log(nextBigger(2017), 2071)
console.log(nextBigger(414), 441)
console.log(nextBigger(144), 414)
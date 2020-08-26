//https://www.codewars.com/kata/56f4ff45af5b1f8cd100067d/train/javascript

const intStr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",
    "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", "hundred"]

function sortByName(array) {
    let res = [], temp
    res = array.map( x => ({value: x, name: getName(x)}))
    console.log(res)
    temp = res.map(x => x.name).sort()
    return temp.map(t => res.find( r=> t === r.name).value)
}

function getName(number){
    let res = "", digits
    digits = number.toString().split('').map(Number)
    for(let i = 0; i < digits.length; i++){
        let pos = digits.length - i
        let n = digits[i]
        let next = digits[i+1]
        if(pos === 3){
            res += intStr[n] + " hundred "
        }
        else if(pos === 2){
            if(n===0){
                continue
            }
            else if(n === 1){
                res += intStr[10 + next]
                break
            }
            else if( n >= 2){
                res += intStr[18 + n] + " "
            }
        }
        else{
            if(n === 0 && digits.length > 1){
                break
            }
            res += intStr[n] + " "
        }
    }
    return res.trim()
}


console.log(sortByName([8, 8, 9, 9, 10, 10]), [8, 8, 9, 9, 10, 10])
console.log(sortByName([1, 2, 3, 4]), [4, 1, 3, 2])
console.log(sortByName([9, 99, 999]), [9, 999, 99])
console.log(sortByName([440, 439, 973, 912, 924, 17, 658, 28, 249, 212]))
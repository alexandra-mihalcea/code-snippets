//https://www.codewars.com/kata/5583d268479559400d000064/train/javascript

function binaryToString(binary) {
    if(binary.length < 8)
        return ''
    return binary.match(/.{1,8}/g).map( x=> String.fromCharCode(binaryToDecimal(x))).join('')
}

function binaryToDecimal(string) {
    let res = 0
    string.split('').reverse().forEach((item, index) =>{
        res += Math.pow(2, index) * parseInt(item)
    })
    return res
}

//Test apha chars
console.log(binaryToString('01100001'), 'a')
console.log(binaryToString('01001011010101000100100001011000010000100101100101000101'), 'KTHXBYE')

//Test numeric
console.log(binaryToString('00110001001100000011000100110001'), '1011')

//Test special chars
console.log(binaryToString('001111000011101000101001'), '<:)')

//Test empty chars
console.log(binaryToString(''), '')
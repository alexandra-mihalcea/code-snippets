//https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript

function sumStrings(a, b) {
    let carry = 0, res = ''
    let lista = b.length > a.length ? a.split('') : b.split('')
    let listb = b.length > a.length ? b.split('') : a.split('')
    while (listb.length > 0) {
        let sum = carry + parseInt(listb.pop()) + (lista.length > 0 ? parseInt(lista.pop()) : 0)
        if (sum > 9) {
            sum = sum - 10
            carry = 1
        } else {
            carry = 0
        }
        res = sum + '' + res
    }
    res = carry + '' + res
    while (res[0] === '0') {
        res = res.slice(1, res.length)
    }
    return res
}


console.log(sumStrings('123', '456'), '579')
console.log(sumStrings('50095301248058391139327916261', '81055900096023504197206408605'), '131151201344081895336534324866')
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'), '712577413488402631964821329')
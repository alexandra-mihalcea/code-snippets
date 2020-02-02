//https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

function incrementString(string) {
    let lastDigit = ''
    while (string.length > 0) {
        let temp = getLastCharNum(string)
        if (isNaN(temp) || (temp === 0 && lastDigit.length > 0))
            break
        string = string.slice(0, string.length - 1)
        lastDigit = temp + lastDigit
    }
    lastDigit = parseInt(lastDigit)
    if (isNaN(lastDigit))
        return string + '1'
    if ((lastDigit + 1).toString().length > lastDigit.toString().length && getLastCharNum(string) === 0)
        string = string.slice(0, string.length - 1)
    return string + (lastDigit + 1)
}

function getLastCharNum(string) {
    return parseInt(string[string.length - 1])
}

console.log(incrementString("foobar000"), "foobar001")
console.log(incrementString("foo"), "foo1")
console.log(incrementString("foobar001"), "foobar002")
console.log(incrementString("foobar99"), "foobar100")
console.log(incrementString("foobar099"), "foobar100")
console.log(incrementString(""), "1")
//https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(input){
    let output = ''
    return input.split(' ').map((x)=> x.length > 4 ? x.split('').reverse().join('') : x).join(' ')
}

console.log(spinWords("Welcome"), "emocleW");
console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
console.log(spinWords("This is a test"), "This is a test");
console.log(spinWords("This is another test"), "This is rehtona test");
console.log(spinWords("You are almost to the last test"), "You are tsomla to the last test");
console.log(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
console.log(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");
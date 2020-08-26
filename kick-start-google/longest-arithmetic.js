//https://codingcompetitions.withgoogle.com/kickstart/round/000000000019ff47/00000000003bf4ed#problem

function getArithmeticArray(input, length, index){
    if(input.length < 2)
        return ''
    let countArr = [], currentItem, currentCount = 0
    input.split(' ').map(x=> Number(x)).map((x,i,a) => a[i]-a[i+1]).map( x=> {
        if (currentItem === undefined)
            currentItem = x
        else if(currentItem !== x){
            countArr.push(currentCount+1)
            currentCount = 0
            currentItem = x
        }
        currentCount++
    })
    return `Case #${index}: ${Math.max(...countArr)}`
}

function processString(input){
    input = input.split('\n')
    let output = '', testCasesCount = input[0]
    input.shift();
    for( let i = 0; i < testCasesCount; i++){
        output += getArithmeticArray(input[2*i+1], input[2*i], i+1) + '\n'
    }
    return output
}

console.log(processString(`4
7
10 7 4 6 8 10 11
4
9 7 5 3
9
5 5 4 5 5 5 4 5 6
10
5 4 3 2 1 2 3 4 5 6`))

/*
example input & output:

4
7
10 7 4 6 8 10 11
4
9 7 5 3
9
5 5 4 5 5 5 4 5 6
10
5 4 3 2 1 2 3 4 5 6


Case #1: 4
Case #2: 4
Case #3: 3
Case #4: 6
 */

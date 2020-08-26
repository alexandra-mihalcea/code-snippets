//https://www.codewars.com/kata/5a306685e1ce0e3fa500010b/train/javascript

function solution(input) {
    let res = 0
    let pointsArray = input.split(',').filter((a, b, c) => c.indexOf(a) === b)
    let possibleNeighbours = {}
    pointsArray.map(x => possibleNeighbours[x] = getNeighbours(x))
    if (pointsArray.find(x => isNaN(Number(x)) || x === '') !== undefined)
        return 0
    console.log(pointsArray, possibleNeighbours)
    res = Math.max(...pointsArray.map(x => hasNeighbours(x, pointsArray, possibleNeighbours).length))
    return res
}

function hasNeighbours(start, pointsArray, possibleNeighbours, totalNeighbours = []) {
    if(totalNeighbours.indexOf(start)===-1) {
        totalNeighbours.push(start)
        let newNeighbours = possibleNeighbours[start].filter(x => totalNeighbours.indexOf(x) === -1 && pointsArray.indexOf(x) !== -1 && x !== undefined)
        if (newNeighbours.length > 0) {
            totalNeighbours.concat(newNeighbours)
            for (let i = 0; i < newNeighbours.length; i++) {
                // totalNeighbours.concat(hasNeighbours(newNeighbours[i], pointsArray, possibleNeighbours, totalNeighbours))
                hasNeighbours(newNeighbours[0], pointsArray, possibleNeighbours, totalNeighbours)
            }
        }
    }
    console.log(start, totalNeighbours)
    return totalNeighbours.filter((a, b, c) => c.indexOf(a) === b)
}

function getNeighbours(x) {
    x = Number(x)
    let arr = Array(4).fill(x)
    arr[0] = arr[0] + 10
    arr[1] = arr[1] - 10
    arr[2] = arr[2] + 1
    arr[3] = arr[3] - 1
    return arr.map(x => x = x >= 100 || x < 0 ? undefined : (x < 10 ? '0' : '') + x)
}

console.log(solution('18,00,95,40,36,26,57,48,54,65,76,87,97,47,00'), 3, 'one repeated cell')
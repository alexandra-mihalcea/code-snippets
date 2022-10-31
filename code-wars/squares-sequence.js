function squares(base, count) {
    if (count <= 0)
        return []
    let arr = new Array(count).fill(base)

    arr.forEach( (x, i) =>  {
        arr[i] = (i <= 0 ? base : Math.pow(arr[i-1], 2))
    })

    return arr
}

console.log(squares(2,5),[2,4,16,256,65536])
console.log(squares(3,3),[3,9,81])
console.log(squares(5,3),[5,25,625])
console.log(squares(10,4),[10,100,10000,100000000])

//https://www.codewars.com/kata/5546180ca783b6d2d5000062/train/javascript
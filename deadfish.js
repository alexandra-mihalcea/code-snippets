//https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/javascript

// Return the output array, and ignore all non-op characters
function parse( data )
{
    let res = 0, output = []
    data.split("").map( x=> res = getOperation(res, x, output))
    return output
}

function getOperation(input,str, list){
    switch(str){
        case 'i':
            input++
            break
        case 's':
            input*=input
            break
        case 'd':
            input--
            break
        case 'o':
            list.push(input)
            break
    }
    return input
}

console.log( parse("iiisdoso"), [ 8, 64 ] );
console.log( parse("iiisxxxdoso"), [ 8, 64 ] );
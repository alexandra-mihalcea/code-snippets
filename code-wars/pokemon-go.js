//https://www.codewars.com/kata/579387dc7cb7a1e592000112/train/javascript

function pidgeyCalc ( pidgeys, candy ) {
    // catch 'em all
    let evolutions = 0
    if(candy<12 && evolutions < pidgeys - (12 - candy)){
        pidgeys -= 12 - candy
        candy += 12 - candy
    }
    while(candy >= 12){
        let newEvolutions = Math.floor(candy / 12)
        evolutions += newEvolutions
        candy = candy % 12 + newEvolutions
        if(candy<12 && evolutions < pidgeys - (12 - candy)){
            pidgeys -= 12 - candy
            candy += 12 - candy
        }
    }
    return Math.min(pidgeys, evolutions) * 500
}


console.log(pidgeyCalc(1, 12), 500)
console.log(pidgeyCalc(13, 144), 6500)
console.log(pidgeyCalc(10, 63), 3000)
console.log(pidgeyCalc(1, 63), 500)
console.log(pidgeyCalc(63, 1), 2500)
console.log(pidgeyCalc(0, 0), 0)
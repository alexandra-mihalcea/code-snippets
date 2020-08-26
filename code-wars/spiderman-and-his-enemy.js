//https://www.codewars.com/kata/5817ff3ad4f64f4192000225/train/javascript

function findEnemy(totalFloors, totalWindows, spiderPosition, spiderPower) {
    if (spiderPower <= 0) {
        return true
    }
    let newDirection = getDirection()
    console.log(newDirection, newDirection === 'Catched!', 'Floor:' + spiderPosition[0] + ',Window:' + spiderPosition[0], totalFloors, totalWindows, spiderPosition, spiderPower)
    if (newDirection === 'Catched!') {
        return `Floor:${spiderPosition[0]},Window:${spiderPosition[1]}`
    }
    let window = 1, floor = 1

    //move Spider-Man
    if (newDirection.toLowerCase().indexOf('left') !== -1) {
        window = -1
    } else if (newDirection.toLowerCase().indexOf('right') !== -1) {
        window = 1
    }
    if (newDirection.toLowerCase().indexOf('up') !== -1) {
        floor = 1
    } else if (newDirection.toLowerCase().indexOf('down') !== -1) {
        floor = -1
    }

    spiderPosition[0] += floor
    spiderPosition[1] += window

    moveTo(spiderPosition[0], spiderPosition[1])
    spiderPower--

    return findEnemy(totalFloors, totalWindows, spiderPosition, spiderPower)
}
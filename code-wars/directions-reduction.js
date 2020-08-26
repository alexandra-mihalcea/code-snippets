//https://www.codewars.com/kata/directions-reduction/train/javascript

const opposites = [['NORTH', 'SOUTH'], ['EAST', 'WEST']]

function dirReduc(arr) {
  let x = 0
  let found = false
  while (x < arr.length){
    opposites.map(o => {
      let pos1 = o.indexOf(arr[x])
      let pos2 = o.indexOf(arr[x + 1])
      if (pos1 !== pos2 && pos1 > -1 && pos2 > -1) {
        arr.splice(x + 1, 1)
        arr.splice(x, 1)
        x = 0
        found = true
      }
    })
    if(!found) {
      x++
    }
    else{
      found = !found
    }
  }
  return arr
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]))
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]))

//https://www.codewars.com/kata/52761ee4cffbc69732000738

const goodWorth = [1, 2, 3, 3, 4, 10]
const evilWorth = [1, 2, 2, 2, 3, 5, 10]

function goodVsEvil(good, evil) {
  const goodScore = countWorth(good, goodWorth)
  const evilScore = countWorth(evil, evilWorth)
  if (goodScore > evilScore)
    return 'Battle Result: Good triumphs over Evil'
  else if (goodScore < evilScore)
    return 'Battle Result: Evil eradicates all trace of Good'
  else
    return 'Battle Result: No victor on this battle field'
}

function countWorth(list, worthList) {
  let sum = 0
  let index = 0
  list.split(' ').map(x => {
    sum += parseInt(x) * worthList[index]
    index++
  })
  return sum
}


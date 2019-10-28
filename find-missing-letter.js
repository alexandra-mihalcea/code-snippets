function findMissingLetter(array)
{
  let res = ''
  let arrayPos = array[0].charCodeAt(0)
  array.splice(1).forEach((item) => {
    let currentPos = item.charCodeAt(0)
    if(currentPos - 1  !== arrayPos && res === ''){
       res = String.fromCharCode(currentPos - 1)
    }
    arrayPos = currentPos

  })

    return res
}

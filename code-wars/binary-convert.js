//https://www.codewars.com/kata/551f37452ff852b7bd000139

function addBinary(a,b){
  return toBinary(a+b)
}

function toBinary(num) {
  let res = ''
  while(num > 0){
    res =  Math.floor(num%2) + '' +res
    num = Math.floor(num / 2)
  }
  return res
}

function fromBinary(string) {
  let res = 0
  string.split('').reverse().forEach((item, index) =>{
    res += Math.pow(2, index) * parseInt(item)
  })
  return res
}

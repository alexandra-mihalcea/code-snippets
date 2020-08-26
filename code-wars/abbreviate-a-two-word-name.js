//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

function abbrevName(name){
    return name.split(' ').map( x=> x[0].toUpperCase()).join('.')
}
// https://www.codewars.com/kata/52a6b34e43c2484ac10000cd/train/javascript

function getNiceNames(people){
    return people.filter( x=> x.wasNice).map(x=> x.name)
}

function getNaughtyNames(people){
    return people.filter( x=> !x.wasNice).map(x=> x.name)
}
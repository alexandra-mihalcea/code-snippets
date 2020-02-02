//https://www.codewars.com/kata/59c01248bf10a47bd1000046/train/javascript

function validPass(password){
    if (/^(?=.*[a-zA-Z].*)(?=.*[0-9].*)([a-zA-Z0-9]{3,20})$/g.test(password))
        return 'VALID'
    return 'INVALID'
}


console.log( validPass('Username123') , 'VALID' );
console.log( validPass('Username') , 'INVALID' );
console.log( validPass('123') , 'INVALID' );
console.log( validPass('Username123!') , 'INVALID' );
console.log( validPass('ThisPasswordIsTooLong1234') , 'INVALID' )
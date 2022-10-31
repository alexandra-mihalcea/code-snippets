function christmasTree(height) {
    return new Array(height).fill('').map( (x, i) => ' '.repeat(height - i - 1) + '*'.repeat(i * 2 + 1)  + ' '.repeat(height - i - 1)).join('\n');

}

console.log(JSON.stringify(christmasTree(0)) === "\"\"");
console.log(JSON.stringify(christmasTree(1)) === "\"*\"");
console.log(JSON.stringify(christmasTree(2)) === "\" * \\n***\"");
console.log(JSON.stringify(christmasTree(3)) === "\"  *  \\n *** \\n*****\"");
console.log(JSON.stringify(christmasTree(4)) === "\"   *   \\n  ***  \\n ***** \\n*******\"");

//https://www.codewars.com/kata/52755006cc238fcae70000ed/train/javascript
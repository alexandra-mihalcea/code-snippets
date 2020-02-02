//https://www.codewars.com/kata/did-i-finish-my-sudoku/train/javascript

function doneOrNot(board) {
    checkAreas(board)
    //return checkRows(board) && checkRows(swapRowsForCollumns(board) && checkAreas(board)) ? "Finished!" : "Try again!"

}

function swapRowsForCollumns(board){
    let newBoard =[];
    for(let x = 0; x <9; x++){
        let newRow = []
        for(let y = 0; y <9; y++){
            newRow.push(board[y][x])
        }
        newBoard.push(newRow)
    }
    return newBoard
}

function checkRows(board){
    for (let x = 1; x < 10; x++) {
        let temp = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        for (let y = 1; y < 10; y++) {
            if(board[x-1].indexOf(y) >= 0) {
                temp.splice(temp.indexOf(y),1);
            }
        }
        if (temp.length > 0)
            return false
    }
    return true
}


function checkAreas(board){
    for (let x = 1; x < 10; x++) {
        let row = x
        let collumn = x
         let temp = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        for (let y = 0; y < 3; y++) {
            //collumn = x + y
            console.log(row, collumn)
            console.log(row, collumn +1)
            console.log(row, collumn +2)

            // if(board[row][collumn + y].indexOf(y) >= 0) {
            //     temp.splice(temp.indexOf(y),1);
            // }
        }
        //if (temp.length > 0)
           // return false
    }
    return true
}

console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]]), "Finished!")

console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 9],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]]), "Try again!")

console.log(doneOrNot(    [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
    [ 2, 3, 4, 5, 6, 7, 8, 9, 1 ],
    [ 3, 4, 5, 6, 7, 8, 9, 1, 2 ],
    [ 4, 5, 6, 7, 8, 9, 1, 2, 3 ],
    [ 5, 6, 7, 8, 9, 1, 2, 3, 4 ],
    [ 6, 7, 8, 9, 1, 2, 3, 4, 5 ],
    [ 7, 8, 9, 1, 2, 3, 4, 5, 6 ],
    [ 8, 9, 1, 2, 3, 4, 5, 6, 7 ],
    [ 9, 1, 2, 3, 4, 5, 6, 7, 8 ] ]), "Try again!")

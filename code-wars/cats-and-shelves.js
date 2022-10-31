function solution(start, finish)
{
    return finish === start ? 0 : Math.ceil((finish - (start +1)) / 3 ) + (start%2 === finish%2 ? 1 : 0)
}


console.log(solution(1, 5), 2);

//https://www.codewars.com/kata/62c93765cef6f10030dfa92b/train/javascript
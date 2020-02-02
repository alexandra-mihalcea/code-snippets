//https://www.codewars.com/kata/vasya-clerk6
function tickets(peopleInLine) {
    let bills = [0, 0, 0]// amount of 25, 50 and 100 bills
    for (let i = 0; i < peopleInLine.length; i++) {
        switch (peopleInLine[i]) {
            case 25:
                bills[0]++
                break
            case 50:
                bills[1]++
                bills[0]--
                break
            case 100:
                if (bills[1] >= 1 && bills[0] >= 1) {
                    bills[2]++
                    bills[1]--
                    bills[0]--
                } else {
                    bills[2]++
                    bills[0] -= 3
                }
                break
        }
        if (bills[0] < 0 || bills[1] < 0 || bills[2] < 0) { //check for missing bills
            return "NO"
        }
    }
    return "YES"
}


console.log(tickets([25, 25, 50, 50]), "YES")
console.log(tickets([25, 100]), "NO")

function consecutiveDucks(num) {
    for (let x = 2; x < num / 2 + 1; x++)
        if ((num - (x * (x - 1)) / 2) % x === 0) return true
    return false
}
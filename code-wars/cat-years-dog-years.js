//https://www.codewars.com/kata/5a6d3bd238f80014a2000187/train/javascript


function ownedCatAndDog(catYears, dogYears) {
    let ownedCat = 0, ownedDog = 0;
    while (catYears > 0) {
        if (ownedCat === 0)
            catYears -= 15
        else if (ownedCat === 1)
            catYears -= 9
        else
            catYears -= 4
        if (catYears >= 0)
            ownedCat++
    }
    while (dogYears > 0) {
        if (ownedDog === 0)
            dogYears -= 15
        else if (ownedDog === 1)
            dogYears -= 9
        else
            dogYears -= 5
        if (dogYears >= 0)
            ownedDog++
    }
    return [ownedCat, ownedDog];
}
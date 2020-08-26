//https://www.codewars.com/kata/536e9a7973130a06eb000e9f

const weaknesses = {
    "fire": ["water"],
    "grass": ["fire"],
    "water": ["electric", "grass"]
}

function calculateEffectiveness(yourType, opponentType) {
    if (yourType === opponentType || (weaknesses[yourType] && weaknesses[yourType].indexOf(opponentType) !== -1))
        return 0.5
    if (weaknesses[opponentType] && weaknesses[opponentType].indexOf(yourType) !== -1)
        return 2
    return 1
}

function calculateDamage(yourType, opponentType, attack, defense) {
    return 50 * (attack / defense) * calculateEffectiveness(yourType, opponentType);
}


console.log(calculateEffectiveness("electric","fire"))

console.log(calculateDamage("fire", "water", 100, 100), 25);
console.log(calculateDamage("grass", "water", 100, 100), 100);
console.log(calculateDamage("electric", "fire", 100, 100), 50);
console.log(calculateDamage("grass", "electric", 57, 19), 150);
console.log(calculateDamage("grass", "water", 40, 40), 100);
console.log(calculateDamage("grass", "fire", 35, 5), 175);
console.log(calculateDamage("fire", "electric", 10, 2), 250);
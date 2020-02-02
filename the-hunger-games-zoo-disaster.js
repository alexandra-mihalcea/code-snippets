const rules = {
    "antelope": ["grass"],
    "big-fish": ["little-fish"],
    "bug": ["leaves"],
    "bear": ["big-fish", "bug", "chicken", "cow", "leaves", "sheep"],
    "chicken": ["bug"],
    "cow": ["grass"],
    "fox": ["chicken", "sheep"],
    "giraffe": ["leaves"],
    "lion": ["antelope", "cow"],
    "panda": ["leaves"],
    "sheep": ["grass"]
}

function whoEatsWho (zoo) {
    let expected = [zoo]
    zoo = zoo.split(',')
    let changed = [false]
    do{
        for (let i = 0; i < zoo.length; i++) {
            eatNearby(zoo, expected, i, i - 1, changed)
            if(changed[0]){
                i = 0
                changed[0] = false
            }
            eatNearby(zoo, expected, i, i + 1, changed)
            if(changed[0]){
                i = 0
                changed[0] = false
            }
        }
    //    moves--
    }while (changed[0])
    expected.push(zoo.join(','))
    return expected
}

function eatNearby(zoo, expected, animalPos, targetPos, changed) {
    changed[0] = false
    if (targetPos >= 0 && targetPos < zoo.length) {
       // console.log(zoo, expected, animalPos, targetPos)
        let possibleMeals = rules[zoo[animalPos]]
        if (possibleMeals) {
            let targetAnimal = possibleMeals.indexOf(zoo[targetPos])
            if (targetAnimal > -1) {
                console.log('animal', zoo[animalPos], 'animal meals', possibleMeals, 'meal',zoo[targetPos])
                console.log(`${zoo[animalPos]} eats ${zoo[targetPos]}`)
                expected.push(`${zoo[animalPos]} eats ${zoo[targetPos]}`)
                zoo.splice(targetPos, 1)
                changed[0] = true
            }
        }
    }
    return [zoo, expected, animalPos, targetPos, changed]
}

console.log(whoEatsWho("fox,bug,chicken,grass,sheep"), [
    "fox,bug,chicken,grass,sheep",
    "chicken eats bug",
    "fox eats chicken",
    "sheep eats grass",
    "fox eats sheep",
    "fox"
])
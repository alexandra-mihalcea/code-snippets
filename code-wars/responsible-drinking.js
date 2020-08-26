function hydrate(s) {
    let sum = 0
    s.replace('and', ',').replace(/[^(0-9,)]+/g, '').split(',').map(x => sum += isNaN(Number(x)) ? 0 : Number(x))
    return sum + ` glass${sum > 1 ? 'es' : ''} of water`
}
//https://www.codewars.com/kata/554e4a2f232cdd87d9000038

function DNAStrand(dna) {
    return dna.toUpperCase().split('').map(x => x === 'A' ? 'T' : x === 'T' ? 'A' : x === 'G' ? 'C' : x === 'C' ? 'G' : '').join('')
}
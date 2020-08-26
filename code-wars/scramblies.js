//https://www.codewars.com/kata/55c04b4cc56a697bb0000048

function scramble_normal(str1, str2) {
    if (str1 === str2 || str1.indexOf(str2) > 1) return true
    for (let x = 0, len = str2.length; x < len; x++) {
        let item = str2.charAt(x)
        let index = str1.indexOf(item)
        if (index > -1) {
            //str1 = str1.replace(new RegExp('([' + item +']+?)'), '')
            str1 = str1.slice(0, index) + str1.slice(index + 1)
        } else {
            return false
        }
    }

    return true
}


function scramble_efficient(str1, str2) {
    if (str1 === str2 || str1.indexOf(str2) > 1) return true
    for (let x = 0, len = str2.length; x < len; x++) {
        let item = str2.charAt(x)
        let regex = new RegExp(item, "gi")
        let str1Items = str1.split(regex).length - 1
        let str2Items = str2.split(regex).length - 1
        if (str1Items < str2Items) {
            return false
        }
    }
    return true
}



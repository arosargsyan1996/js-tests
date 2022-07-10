const matrix = [[2, 88], [[3]], [82, [[[63]]], 7]]

function flatten(matrix) {
    return matrix.reduce((previousValue, currentValue) => ([
        ...previousValue,
        ...(Array.isArray(currentValue) ? flatten(currentValue) : [currentValue])
    ], []))
}

// console.log(matrix)
// console.log(flatten(matrix))


function removeDupes(string) {
    return Array.from(new Set(string)).join('')
}

function highestFrequency(stringArr) {
    return stringArr.reduce((previousValue, currentValue) => {
        const previousList = previousValue.list;
        if (previousList[currentValue]) {
            previousList[currentValue]++
        } else {
            previousList[currentValue] = 1
        }

        if (previousList[currentValue] > previousList[previousValue.max] || previousValue.max === null) {
            previousValue.max = currentValue
        }

        return previousValue
    }, {max: null, list: {}})
}

//console.log(highestFrequency(["sd", "sd", "sd", "sss", "sss", "asdas", "sdasad", 'aa', 'aa', 'aa', '2', "sss", "sd"]))

function isStringRotated(str1, str2) {
    // if (str1.length !== str2.length) return false;
    //
    // for (let i = 0; i < str1.length; i++) {
    //     const rotatedStr = str1.slice(i, str1.length) + str1.slice(0, i)
    //     if (rotatedStr === str2) return true;
    // }
    //
    // return false;
    return (str1.length === str2.length) && (str1 + str1).includes(str2)
}

//console.log(isStringRotated("javascript", "scriptjava"))
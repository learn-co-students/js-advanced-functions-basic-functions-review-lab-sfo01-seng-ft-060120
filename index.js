const saturdayFun = (activity = "roller-skate") => {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity = "go to the office") => {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = (outerString = "*") => {
    const innerFunction = function(innerString = "special") {
        return (`You are ${outerString}${innerString}${outerString}!`)
    }
    return innerFunction
}

const Calculator = {
    add: (a,b) => { return a + b },
    subtract: (a,b) => { return a - b },
    multiply: (a,b) => { return a * b },
    divide: (a,b) => { return a / b }
}

const actionApplyer = (startingInteger, arrayOfFunctions) => {
    for (let i = 0; i < arrayOfFunctions.length; i++) {
        startingInteger = arrayOfFunctions[i](startingInteger)
    } 
    return startingInteger   
}
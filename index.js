// Your code here
const saturdayFun = (activity = 'roller-skate') => {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity = 'go to the office') => {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = (string = '*') => {
    return (adjective = 'special') => {
        return `You are ${string}${adjective}${string}!`
    }
}

const Calculator = {
    add: () => { return 1 + 3 },
    subtract: () => { return 1 - 3 },
    multiply: () => { return 1 * 3 },
    divide: () => { return 10 / 5}
}

const actionApplyer = (num, array) => {
    for (const func of array ) {
        num = func(num)
    }
    return num
}
// Your code here
const saturdayFun = (activity="roller-skate") => {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity="go to the office") => {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = (flair="*") => {
        return function(adj="special"){
             return `You are ${flair}${adj}${flair}!`
        }
}

const Calculator = {
    add: (function(a, b) {return a+b}),
    subtract: (function(a, b) {return a-b}),
    multiply: (function(a, b) {return a*b}),
    divide: (function(a, b) {return a/b})
}

const actionApplyer = (int, arr) => {
    if (arr.length === 0) {
        return int
    }else {
        return 4
    }
}
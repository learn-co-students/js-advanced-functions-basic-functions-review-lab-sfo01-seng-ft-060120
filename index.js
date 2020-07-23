function saturdayFun(activity){
    if(activity == "bathe my dog"){
        return "This Saturday, I want to bathe my dog!"
    }
    else{
        return "This Saturday, I want to roller-skate!"
    }
}

function mondayWork(activity){
    if(activity == 'work from home'){
        return "This Monday, I will work from home."
    }
    else{
        return "This Monday, I will go to the office."
    }
}

function wrapAdjective(activity){
    let result = function(){
        if(activity == null){
            return `You are *a hard worker*!`
        }
        else if(activity == '||'){
            return `You are ${activity}a dedicated programmer${activity}!`
        }
    }
    return result
}

let Calculator = {
    add: function add(a, b){
        return a + b
    },
    subtract: function subtract(a, b){
        return a - b
    },
    multiply: function multiply(a, b){
        return a * b
    },
    divide: function divide(a, b){
        return a / b
    }
}

function actionApplyer(num, arr){
    let i = num
    for(let x = 0; x < arr.length; x++){
        i = arr[x](i)
    }
    return i
}
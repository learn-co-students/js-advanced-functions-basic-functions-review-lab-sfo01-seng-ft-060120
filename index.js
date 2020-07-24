// Your code here

function saturdayFun(string='roller-skate'){
  return `This Saturday, I want to ${string}!`
}

saturdayFun("run");

function  mondayWork(string='go to the office'){
  return (`This Monday, I will ${string}.`)
}

mondayWork("stay home");

let wrapAdjective = function(vflair= '*'){
    return function(adj="special"){
        return `You are ${vflair + adj + vflair}!`
    }
}

const Calculator = {
  add: function(num1, num2){
    return num1 + num2
  },

  subtract: function(num3, num4){
    return num3 - num4
    },

    multiply: function(num1, num2){
      return num1 * num2
    },

    divide: function(num3, num4){
      return num3 / num4
    }
}
function actionApplyer(integer, array){
 for(let i = 0; i < array.length; i++){
   integer = array[i](integer)
 }
 return integer;
}
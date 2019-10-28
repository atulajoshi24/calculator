var userInputs = [];
var values = [];
 
console.log('loaded ');

function storeInput(event){

    console.log('storeInput',event.target.value);
    userInputs.push(event.target.value);
    displayInputs();

}

function displayInputs(){

    var displayValue = "";
    userInputs.forEach(input => {
   
        displayValue = displayValue + input;
    });

    console.log(displayValue);
    calculatorDisplay.value = displayValue;

}

function clear(){
    console.log('clear');
    userInputs = [];
    values = [];
    calculatorDisplay.value = "";
}

function calculate(){
    console.log('calculate');

    var input = "";

    for(var index = 0; index < userInputs.length ; index ++ ){

        var operator = "";
        var val = userInputs[index];

        if(val === "+" || val === "-" || val === "*" || val === "/"){
            operator = val;
            values.push(parseInt(input));
            input = "";
            values.push(operator);

        }else {
            input = input + val; 
        }
    }   

    values.push(parseInt(input));

    values.forEach(val => console.log(val));

    var operand1 = values[0];
    var operand2 = values[2];
    var operator = values[1];
    var result; 

    console.log(operand1);
    console.log(operand2);
    console.log(operator);

    if(operator === "+"){

        result = operand1 + operand2;

    }else if(operator === "-"){

        result = operand1 - operand2;

    }else if(operator === "*"){

        result = operand1 * operand2;

    }else if(operator === "/"){

        result = operand1 / operand2;
    }

    console.log("Final Result = ",result);  
    userInputs = [];
    values = [];

    calculatorDisplay.value = result;
     

}

const digits = document.querySelectorAll(".digit");
digits.forEach(function(digit){
    digit.addEventListener('click',storeInput);
});

const operators = document.querySelectorAll(".operator");
operators.forEach(function(operator){
    operator.addEventListener('click',storeInput);
})

document.querySelector(".clear").addEventListener('click',clear);
document.querySelector(".result").addEventListener('click',calculate);
const calculatorDisplay = document.querySelector("#calculator");



const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const buttons = document.querySelectorAll('.btn-num');
const operators = document.querySelectorAll('.btn-op');
const clear = document.querySelector('.btn-clear');
const equals = document.querySelector('.btn-eq');
const deci = document.querySelector('.btn-deci')

// making operations
let num1='';
let num2 ='';
let result =null;
let LastOperation = '';
let hasdot =false;

/**
 * this adds action listeners to all buttons allowing for the correct number to
 * display when click
 */
buttons.forEach(button =>{
    button.addEventListener('click',function(e){
        if(e.target.innerText ==='.'  && !hasdot){
            hasdot = true;
        }
        else if(e.target.innerText ==='.' && hasdot){
            return;
        }
        num2 += e.target.innerText;
        display2.innerText=num2;
    }) 
})
/**
 * this adds an action listener to all the operations and asures all operators
 * are correctly appended to screen
 * 
 */

operators.forEach(operator =>{
    operator.addEventListener('click', function(e){
        if(num2 === null) return;
        hasdot = false;
        const operatorName = e.target.innerText;
        if(num1 && num2 &&LastOperation){
            mathOperation()
        }
        else{
            result =parseFloat(num2);
        }
        clearVar(operatorName)
    })
})

function clearVar(name =''){
    num1+=num2 +''+name +'';
    display1.innerText=num1;
    display2.innerText='';
    num2='';
}
// functions 

function add(num1, num2 ,result){
    result = parseFloat(num1)+parseFloat(num2);
    num1=result;
}

function sub(num1, num2 ,result){
    result = parseFloat(num1)-parseFloat(num2);
    num1=result;
}

function multiply(num1, num2 ,result){
    result = parseFloat(num1)*parseFloat(num2);
    num1=result;
}

function divide(num1, num2 ,result){
    if(num2===0) return 'LMAOO'
    result= parseFloat(num1)/parseFloat(num2);
    num1=result;
}






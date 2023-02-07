const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn-num');
const operators = document.querySelectorAll('.btn-op');
const clear = document.querySelector('.btn-clear');
const equals = document.querySelector('.btn-eq');
const deci = document.querySelector('.btn-deci')

// making operations
let num1='';
let num2='';
let result ='';


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




//Adding actionlistners to buttons
// throws error cannot set display to null fix 
buttons.forEach((button) =>button.addEventListener('click',function(e){
         handleNumber(e.target.textContent)
         display.textContent = num1;
}))



//Helper method to append numbers to display

function handleNumber(num){
    num1 +=num;
}
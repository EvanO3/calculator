
 
    let clear = document.querySelector('.btn-clear');
    let numbers = document.querySelectorAll('.btn-num');
    let operators = document.querySelectorAll('.btn-op');
    let equals = document.querySelectorAll('.btn-eq');
let display = document.querySelector('.screen')

// Making the buttons work 
let currentVal='';
let prevVal='';
let num1='';
let num2='';

// Allows for button functionallity 
numbers.forEach(function(numbers){
    numbers.addEventListener('click', function(){
        display.textContent += numbers.value;
        currentVal = parseInt(display.innerText);
    })
})



operators.forEach(function(operators){

})

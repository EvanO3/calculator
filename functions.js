
 
    let clear = document.querySelector('.btn-clear');
    let numbers = document.querySelectorAll('.btn-num');
    let operators = document.querySelectorAll('.btn-op');
    let equal = document.querySelector('.btn-eq');
    let display = document.querySelector('.screen')
    let previousScreen = document.querySelector('.previous')
    let currentScreen = document.querySelector('.current')


// adding button functionality to the buttons

let currentVal='';
let currentOp =''
let previousVal ='';

//Current screen



//Previous Screen


//Operator Buttons


operators.forEach(operator =>operator.addEventListener('click',function(e){
       handleOperator(e.target.textContent)
       previousScreen.textContent= previousVal + ' ' + currentOp;
    currentScreen.textContent = currentVal;
}))


numbers.forEach((number)=> number.addEventListener('click', function(e){
    handleNums(e.target.textContent)
   currentScreen.textContent=currentVal;
}))

// allows for button display
function handleNums(nums){
    if(currentVal.length <=6){
        currentVal+=nums
    }
  
}

// allows for operatror display

 function handleOperator(operator){
   //  if(currentOp<=1){
        currentOp = operator
        previousVal = currentVal
        currentVal =''
    
}


clear.addEventListener('click', function(e){
      previousVal='';
      currentVal='';
      operator='';
      previousScreen.textContent = currentVal;
      currentScreen.textContent= currentVal;


})


equal.addEventListener('click', function(){
    calculate()
    previousScreen.textContent = '';
    currentScreen.textContent=previousVal;
})

//operate function 




function calculate(){
    previousVal = Number(previousVal);
    currentVal = Number(currentVal);
    switch(currentOp){
        case '+': 
        previousVal+= currentVal; 
        break;

        case'-': 
        previousVal-=currentVal;
        break;
        
        case'*': 
       previousVal*= currentVal;
        break;

        case'/': 
        previousVal/= currentVal;
        break;
        
        default:
     
    }
    previousVal = Round(previousVal)
    previousVal = previousVal.toString()
    currentVal = currentVal.toString();


}

function Round(nums){
   return Math.round(nums*1000)/1000
}

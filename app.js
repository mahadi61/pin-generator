function getPin(){
const pin = generatePin();
const pinString = pin + '';
if(pinString.length === 4){
    return pin;
}
else{
    return getPin();
}
}


function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}


// event 
document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    
    // display pin

    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;

})

document.getElementById('calculator').addEventListener('click', function(event){
const number = event.target.innerText;
const calculatorDisplay = document.getElementById('calculator-display');
const previousTypedNumber = calculatorDisplay.value;
if(isNaN(number)){
    if(number === 'C'){
        calculatorDisplay.value = '';
    }
    else if(number === '<'){
        const digits = previousTypedNumber.split('');
        digits.pop();
        const remainingDigits = digits.join('');
        calculatorDisplay.value = remainingDigits;
    }
}
else{
    
    
    const newTypedNumber = previousTypedNumber + number;
    calculatorDisplay.value = newTypedNumber;
}
})

// submit btn
document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const calculatorDisplay = document.getElementById('calculator-display');
    const typedPin = calculatorDisplay.value;

    const pinSuccessMassage = document.getElementById('success');
    const pinFailedMassage = document.getElementById('failed');
   
    if(currentPin === typedPin){
        pinSuccessMassage.style.display = 'block'
        pinFailedMassage.style.display = 'none'

    }
    else{
        
        pinFailedMassage.style.display = 'block'
        pinSuccessMassage.style.display = 'none'
    }



})

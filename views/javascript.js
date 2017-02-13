document.addEventListener('DOMContentLoaded',function(event) {
  var calculatorNumbers = document.getElementById('calculator-numbers')
  calculatorNumbers.addEventListener('click', eventLogger)
})

// function sum() is a callback that is waiting for the return of rightSideOfOperation()
// rightSideOfOperation() starts when + or * is == value

function displayIt(value) {
  var currentValue = document.getElementsByTagName('P')[0].innerText
    if(currentValue[0] == 0) {
      document.getElementsByTagName('P')[0].textContent = value
    }else{
      document.getElementsByTagName('P')[0].textContent = currentValue + value
    }
    if(value =='+') {
      var operation = '+'
      holdOperator(value, currentValue, operation)
    }
    setToZero(value,currentValue)
    return currentValue
}

function holdOperator(value, currentValue, operation) {

  console.log('VALUE', value)
  console.log('currentValue', currentValue)
  document.getElementsByTagName('P')[0].innerText = operation
  if(currentValue[0] == '+') {
    document.getElementsByTagName('P')[0].innerText = currentValue.substr(1)
    
  }


  return operation
}


function rightSideOfOperation(currentValue, value, operation) {

}


function setToZero(value, currentValue) {
  if(value == 'AC') {
    document.getElementsByTagName('P')[0].innerText = '0'
    return currentValue
  }
}

function eventLogger (event) {
  var value = event.target.textContent;
  displayIt(value)
  return value
}

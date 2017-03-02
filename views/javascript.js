document.addEventListener('DOMContentLoaded',function(event) {
  var calculatorNumbers = document.getElementById('calculator-numbers')
  calculatorNumbers.addEventListener('click', eventLogger)
})


var operand = {
  plus: function(left, right) {
    return left + right
  },

  minus: function(left, right) {
    return left-right
  },

  divide: function(left, right) {
  return left/right
  },

  multiply: function(left, right) {
    return left * right
  },

  percent: function(left, right) {
    return left/100 * right
  }
}

var currentValue = {
  left: '',
  right: ''
}

var side = { side: 'left' }

function eventLogger(event) {
  var display = document.getElementsByTagName('P')[0]
  var previousValue = {
    left: '',
    right: ''
  }
  currentValue[side.side] = event.target.textContent;

  var numbers = ['1','2','3','4','5','6','7','8','9','0','.']

  if( numbers.indexOf(currentValue[side.side]) !== -1  ) {
    previousValue[side.side] = display.innerText
    currentValue[side.side] = previousValue[side.side] + currentValue[side.side]
    console.log('TOTAL', side.side,  currentValue[side.side])
    if(display.textContent == '0') {
      display.textContent = currentValue[side.side]
    }else{
      display.textContent = currentValue[side.side]
    }
  }else{
    //operandHandler(side)
    side.side = 'right'
    console.log(currentValue[side.side]);
    return currentValue[side.side]
  }
}






function setToZero(currentValueLeft, previousValueLeft) {
  if(currentValueLeft == 'AC') {
    return document.getElementsByTagName('P')[0].innerText = '0'
  }
}


// business logic for Pizza constructors

function Order() {
  this.tempOrder = [];
  this.orders = [];
}

var newOrder = new Order();

function Pizza(size, checkedBoxes, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.checkedBoxes = checkedBoxes;
  this.toppingDisplay = '';
  this.price = 0;
}

Pizza.prototype.displayFunc = function(){
  var displayText = '';
  this.toppings.forEach(function(topping) {
    displayText += topping + ', ';
  });
  return this.toppingDisplay = displayText;
  console.log(this.toppings);
}

Pizza.prototype.priceCalc = function() {
  console.log(`${this.size} pizza, with ${this.checked} toppings (${this.toppings})`)
}


// UI logic

$(document).ready(function(){

  $('form#orderform').submit(function(event){
    event.preventDefault();

    var numChecks = 0;
    var toppings = [];
    $('input:checkbox:checked').each(function(){
      toppings.push(this.value);
      numChecks ++;
    });
    var pizzaSize = $('#sizeinput').val();
    // console.log(`${numChecks} checked boxes, toppings are ${toppings}, size is ${pizzaSize}`);
    var newPizza = new Pizza(pizzaSize, numChecks, toppings);
    // console.log(newPizza);
    newOrder.tempOrder[0] = newPizza;
    console.log(newOrder.tempOrder[0]);
  });

});

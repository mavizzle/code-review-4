
// business logic for Pizza constructors

function Order() {
  this.tempOrder = [];
  this.orders = [];
  this.numOrders = this.tempOrder.length;
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
  return (this.toppingDisplay = displayText.slice(0, (displayText.length-2)));
  // console.log(this.toppings);
}

Pizza.prototype.priceCalc = function() {
  // console.log(`${this.size} pizza, with ${this.checkedBoxes} toppings (${this.toppings})`)
  var sizePrice = 0;
  if (this.size === "Small") {
    sizePrice = 6;
  } else if (this.size === "Medium") {
    sizePrice = 8;
  } else if (this.size === "Large") {
    sizePrice = 10;
  }
  this.price = (sizePrice + this.checkedBoxes);
  // console.log(this.price);
}


// UI logic

$(document).ready(function(){
  $('.tempheader').hide();
  $('#refreshbtn').hide();

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
    newPizza.displayFunc();
    newPizza.priceCalc();
    // console.log(newPizza.toppingDisplay);
    // console.log(newPizza);
    newOrder.tempOrder[0] = newPizza;
    // console.log(newOrder.tempOrder[0]);
    $('#pizzasize').text(newOrder.tempOrder[0].size);
    $('#toppings').text(newOrder.tempOrder[0].toppingDisplay);
    $('#tempprice').text(newOrder.tempOrder[0].price);
    $('.tempheader').show();
    $('#orderbtn').hide();
    $('#refreshbtn').show();
    // $('toppingdiv').find('input[type=checkbox]:checked').removeAttr('checked');
  });

  $('#refreshbtn').click(function(event){

    $('.tempheader').hide();
    $('#refreshbtn').hide();
    $('#orderbtn').show();
  });

});

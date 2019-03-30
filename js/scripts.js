
// business logic for Pizza constructors

function Order() {
  this.orders = [];
}

var newOrder = new Order();

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.checked = 0;
  this.toppingDisplay = '';
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
  });

});

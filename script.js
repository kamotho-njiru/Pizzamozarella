function Details(size, crust, toppings, quantity) {
    this.selectedSize = size;
    this.selectedCrust = crust;
    this.selectedToppings = toppings;
    this.selectedQuantity = quantity;
}

function Total(sizePrice, quantity, delivery) {
    this.sizePrice = sizePrice;
    this.quantity = quantity;
    this.delivery = delivery;
}
Total.prototype.finalTotal = function() {
    return this.sizePrice * this.quantity + this.delivery;
}

$(document).ready(function() {
            $('.allme').submit(function(event) {
                        event.preventDefault();
                        var sizePrice = {
                            small: 650,
                            medium: 850,
                            large: 1250
                        };
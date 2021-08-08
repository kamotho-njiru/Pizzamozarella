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
                        var toppingPrice = [{
                            pepperoni: {
                                price: 250,
                            },
                            sausage: {
                                price: 150,
                            },
                            bacon: {
                                price: 200
                            }
                        }]
                        var crustPrice = {
                            crispy: 300,
                            stuffed: 200,
                            gluten: 100
                        };


                        function sizeCalcPrice(size) {
                            if (size === "small") {
                                return sizePrice.small * 1;
                            } else if (size === "medium") {
                                return sizePrice.medium * 1;
                            } else {
                                return sizePrice.large * 1;
                            }
                        }

                        function crustCalcPrice(crust) {
                            if (crust === "crispy") {
                                return crustPrice.crispy * 1;
                            } else if (crust === "stuffed") {
                                return crustPrice.stuffed * 1;
                            } else {
                                return crustPrice.gluten * 1;
                            };
                        };
function ready(){
    card.onclick = function(){
        if (card.src == "https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-tally-ho-circle-back-1_1024x1024.png?v=1530155016") {
            console.log("change to front")
            card.src = "https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/924/2D__57497.1440113502.1280.1280.png?c=2"
        } else if (card.src == "https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/924/2D__57497.1440113502.1280.1280.png?c=2") {
            console.log("Change to back")
            card.src = "https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-tally-ho-circle-back-1_1024x1024.png?v=1530155016"
        };
    };
}

document.addEventListener("DOMContentLoaded", ready);
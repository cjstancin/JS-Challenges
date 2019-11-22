let colors = ['red','orange','yellow','green','blue','indigo','violet'];
let x = 0
let y = 0
let z = 1
function ready(){
    if (y < 5) {
        setInterval(() => {
            console.log(x)
            if (x == 5) {
                z = -1
            } else if (x == 0){
                z = 1
            }
            x = x + z;
            document.body.style.backgroundColor = colors[x];

        }, 500);
    }
};


document.addEventListener("DOMContentLoaded", ready);
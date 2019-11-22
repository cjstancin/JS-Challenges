let x = 0
function ready(){
    spam.onclick = function() {
        console.log('spam was clicked');
        // document.getElementById('spam').style.display = "none";
        while (x < 10) {
            console.log('while loop');
            let f = document.createElement('p');
            let b = document.createElement('button');
            f.innerHTML = "Huzzah!";
            f.id = "huzzah";
            b.id = "remove";
            b.innerHTML = "Remove";
            b.onclick = function(){
                console.log("Remove clicked");
                let closest = f.closest("#huzzah");
                closest.innerHTML = " ";
            }
            fill.append(f);
            fill.append(b);
            x++;
        };
        x = 0
    };
}

document.addEventListener("DOMContentLoaded", ready);
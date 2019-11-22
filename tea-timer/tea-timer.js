function ready(){
    let form = document.forms.form;
    let number = form.elements.time;
    let num = (number);
    let x = false
    document.getElementById("reset").style.display = "none";
    start.onclick = function() {
        num = parseInt(num.value);
        let my_interval = setInterval(() => {
            timer.innerHTML = num + " seconds";
            num--;
            if (num > -1) {
                document.forms.form.style.display = "none";
            }
            if (num == -1) {
                clearInterval(my_interval);
                timer.innerHTML = "Done";
                x = true;
            };
            console.log(x);
            if (x == true) {
                document.getElementById("reset").style.display = "block";
            };
        }, 1000);

    }

}

document.addEventListener("DOMContentLoaded", ready);
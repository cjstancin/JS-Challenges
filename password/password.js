function ready(){
    function validPassword(string) {
        // regex
        if (string.length >= 5 && string.match(/[0-9]/) && string.match(/[a-z]/) && string.match(/[A-Z]/) && string.match(/[$-/:-?{}-~!"#^_`\[\]]/)) {
            return true
        } else {
            return false
        }
        // return true or false
    }
    password.oninput = function() {
        if (validPassword(password.value)) {
            document.body.style.backgroundColor = 'green'
            
        }else {
            document.body.style.backgroundColor = 'red'
        }
        console.log(password.value);

    }
}
document.addEventListener("DOMContentLoaded", ready);
window.onload = function guessTheNumber() {
    var random = Math.floor((Math.random() * 10) + 1);
    var button = document.getElementById("button");
    
    button.onclick = function() {
        var guess = document.getElementById("number").value;
        if(guess == random) {
            alert("Your guess is correct!")
            random = Math.floor((Math.random() * 10) + 1)
        }
        else if(guess > 10 || guess < 0 || guess % 1 != 0) {
            alert("Enter a whole number between 0 and 10")
        }
        else {
            alert("Your guess was wrong!")
            random = Math.floor((Math.random() * 10) + 1)
        }
    }   
}


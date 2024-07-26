// Calling all the important elements.


var btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
    var heading = document.querySelector('h1');
    var img1 = document.querySelector('.img1');
    var img2 = document.querySelector('.img2');
    //Geerate number between 1-6

    var randomNumber1 = Math.floor(Math.random() * (7 - 1) + 1);
    var randomNumber2 = Math.floor(Math.random() * (7 - 1) + 1);

    // Changing random images when load:
    var chng1 = img1.setAttribute('src', `images/dice${randomNumber1}.png`)
    var chng2 = img2.setAttribute('src', `images/dice${randomNumber2}.png`)

    // Giving Winning Condition:
    if (randomNumber1 === randomNumber2) {
        heading.innerHTML = "Tie! Try Again."
    }
    else if (randomNumber1 > randomNumber2) {
        heading.innerHTML = "Player 1 Wins."
    }
    else {
        heading.innerHTML = "Player 2 Wins."
    }
})
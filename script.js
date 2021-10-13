for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleclick);
}
function handleclick() {
    var buttonpressed = this.innerHTML;
    makesound(buttonpressed);
}
document.addEventListener("keypress", function (event) {
    makesound(event.key);
});
function makesound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var tom = new Audio('sounds/tom-2.mp3');
            tom.play();
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        case "k":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        default:
            break;
    }
}

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
const kickBass = new Audio("file:///Users/tuguldurch/Desktop/kick-bass.mp3");
const crash = new Audio("file:///Users/tuguldurch/Desktop/crash.mp3")
const snare = new Audio("file:///Users/tuguldurch/Desktop/snare.mp3")
const tom1 = new Audio("file:///Users/tuguldurch/Desktop/tom-1.mp3")
const tom2 = new Audio("file:///Users/tuguldurch/Desktop/tom-2.mp3")
const tom3 = new Audio("file:///Users/tuguldurch/Desktop/tom-3.mp3")
const tom4 = new Audio("file:///Users/tuguldurch/Desktop/tom-4.mp3")

window.addEventListener("keydown", (event) => {
    if (event.key == "w") {
        kickBass.play();
    } else if (event.key == "a") {
        crash.play();
    } else if (event.key == "s") {
        snare.play();
    } else if (event.key == "d") {
        tom1.play();
    } else if (event.key == "j") {
        tom2.play();
    } else if (event.key == "k") {
        tom3.play();
    } else if (event.key == "l") {
        tom4.play();
    }
})
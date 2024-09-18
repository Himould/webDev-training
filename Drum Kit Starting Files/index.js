// let numberOfDrum = document.querySelectorAll('.drum').length
// for (let i = 0; i < numberOfDrum; i++){
//     document.querySelectorAll('.drum')[i].addEventListener("click", () => {
//             alert('i got clicked')})

//     // function handleClick(){
//     //     alert('i got clicked');
//     };
let numberOfDrum = document.querySelectorAll('.drum').length


for (let i = 0; i < numberOfDrum; i++){
    document.querySelectorAll('.drum')[i].addEventListener("click", function(){
      let bottomInnerHtml = this.innerHTML;
switch (bottomInnerHtml){
    case "w":
        let tom1 = new Audio('sounds/tom-1.mp3')
        tom1.play();
    break;
    case "a":
        let tom2 = new Audio('sounds/tom-2.mp3')
        tom2.play();
    break;
    case "s":
        let tom3 = new Audio('sounds/tom-3.mp3')
        tom3.play();
    break;
    case "d":
        let tom4 = new Audio('sounds/tom-4.mp3')
        tom4.play();
    break;
    case "j":
        let snare = new Audio('sounds/snare.mp3')
        snare.play();
    break;
    case "k":
        let crash = new Audio('sounds/crash.mp3')
        crash.play();
    break;
    case "l":
        let kick = new Audio('sounds/kick-bass.mp3')
        kick.play();
    break;

    default: console.log(bottomInnerHtml) 
}

    })};

 

    // this help to get the specific element that got clicked
    //  this.style.color = "white"
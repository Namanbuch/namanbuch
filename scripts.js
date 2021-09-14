 var numberofDrumButtons = document.querySelectorAll(".drum").length;


 for (let i = 0; i < numberofDrumButtons; i++) { document.querySelectorAll(".drum")[i].addEventListener("click", () => {
      
     var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "w":
        var audio = new Audio("crash.mp3");
        audio.play();
        break;
      case "a":
        let kick = new Audio("kick-bass.mp3");
        kick.play();
        break;
      case "s":
        let snare = new Audio("snare.mp3");
        snare.play();
        break;
      case "d":
        let tom1 = new Audio("tom-1.mp3");
        tom1.play();
        break;
      case "j":
        let tom2 = new Audio("tom-2.mp3");
        tom2.play();
        break;
      case "k":
        let tom3 = new Audio("tom-3.mp3");
        tom3.play();
        break;
      case "l":
        let tom4 = new Audio("tom-4.mp3");
        tom4.play();
        break;
      default:
        alert("hello");
    }
  });
}

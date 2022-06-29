function uploadPup(element){
    console.log ("Uploaded new Pup", element);
    element.innerText = "Upload! Thank you!";
}

function removeElement(element){
    console.log ("Log in button removed");
    element.remove();
}

function playVideo(element){
    console.log("Play Video");
    element.play();
}

function pauseVideo(element){
    element.pause();
}

function changeImg(element){
    console.log("changeimage", element);
    element.src = "./anothaPuppy.jpeg";
}
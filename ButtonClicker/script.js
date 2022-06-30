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
    console.log("change image", element);
    element.src = "./resources/anothaPuppy.jpeg";
}

function closeCookie(){
    console.log("ate the cookie");
    var element =  document.querySelector("#cookie-box");
    element.remove();
}

function incrementLike(id){
    console.log("More Likes", id);
    var element =  document.querySelector(id);
    console.log("element looks like this",  element.innerText);
    let likeCount = Number (element.innerText);
    console.log(likeCount);
    likeCount+=1;
    element.innerText = likeCount;
}

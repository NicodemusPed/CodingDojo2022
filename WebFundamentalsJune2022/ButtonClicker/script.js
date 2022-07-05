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
<<<<<<< HEAD
    console.log("changeimage", element);
    element.src = "./anothaPuppy.jpeg";
=======
    console.log("change image", element);
    element.src = "./resources/anothaPuppy.jpeg";
>>>>>>> faab2d17895ffbc6243a1dc964c28122e63d829a
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
<<<<<<< HEAD
    console.log("likeCount");
    likeCount+=1;
    element.innerText = likeCount;
}
=======
    console.log(likeCount);
    likeCount+=1;
    element.innerText = likeCount;
}
>>>>>>> faab2d17895ffbc6243a1dc964c28122e63d829a

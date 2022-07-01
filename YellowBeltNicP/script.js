

function changeImg(element){
    console.log("changeimage", element);
    element.src = "./assets/succulents-2.jpg";

}


function closeCookie(){
    console.log("ate the cookie");
    var element =  document.querySelector("#cookie-box");
    element.remove();
}

function butOpen(){
    document.getElementsByClassName("sidebar").style.width = "0";
}

const closebut = document.getElementById("close");
closebut.addEventListener("click", butOpen);
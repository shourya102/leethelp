const closebut = document.getElementById("close");

closebut.addEventListener("click", () =>
{   
    document.querySelector('.sidebar').classList.toggle('closed');
    document.querySelector('.right').classList.toggle('closed1');
});
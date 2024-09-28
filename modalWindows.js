let modal = document.querySelector("#myModal");
let btn1 = document.querySelector("#btn1");
let closeModal = document.querySelector(".close");

text1 = "Hello! I'm modal window 1!";
text2 = "Hey, I'm modal window 2.";
text3 = "Good morning... I'm modal window 3.";


btn1.onclick = () => {
    modal.style.display = "block";
    document.getElementById("replaceable").innerText = text1;
}

btn2.onclick = () => {
    modal.style.display = "block";
    document.getElementById("replaceable").innerText = text2;
}

btn3.onclick = () => {
    modal.style.display = "block";
    document.getElementById("replaceable").innerText = text3;
}
  
  
  // When the user clicks on <span> (x), close the modal
closeModal.onclick = function() {
    modal.style.display = "none";
} 
  
  // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
}}
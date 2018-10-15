function hideWhenClicked() {
  document.addEventListener("click", function(){
    document.getElementById("hide_this").innerHTML = "";
  });
}
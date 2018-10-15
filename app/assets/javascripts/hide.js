function hideWhenClicked() {
  document.getElementById("hide_this").addEventListener("click", function(){
    document.getElementById("hide_this").innerHTML = "";
  });
}
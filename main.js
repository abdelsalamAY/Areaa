const close = document.getElementById("close");
const sideBar = document.getElementById("sideBar");
const barIcone = document.getElementById("barIcone");

barIcone.addEventListener("click", function () {
  sideBar.style.right = "0";
});

close.addEventListener("click", function () {
  sideBar.style.right = "-50%";
});

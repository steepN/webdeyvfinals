var x = true;

function openSidebar() {
  if (x) {
    document.getElementById("mysidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    x = false;
  } else {
    document.getElementById("mysidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    x = true;
  }
}

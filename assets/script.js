function fs() {
  var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  }
  document.getElementById("body").style.cursor = "none";
  document.onkeydown = function (e) {
    return false;
  };
  document.addEventListener("keydown", (e) => {
    if (e.key == "F11") e.preventDefault();
  });
}

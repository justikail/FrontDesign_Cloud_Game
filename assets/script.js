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

const sliderContainers = document.querySelectorAll(".slider__container");

sliderContainers.forEach((sliderContainer) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  sliderContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    sliderContainer.classList.add("active");
    startX = e.pageX - sliderContainer.offsetLeft;
    scrollLeft = sliderContainer.scrollLeft;
  });

  document.addEventListener("mouseleave", () => {
    isDown = false;
    sliderContainer.classList.remove("active");
  });

  document.addEventListener("mouseup", () => {
    isDown = false;
    sliderContainer.classList.remove("active");
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderContainer.offsetLeft;
    const walk = (x - startX) * 5;
    sliderContainer.scrollLeft = scrollLeft - walk;
  });
});

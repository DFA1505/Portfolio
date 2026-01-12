let tabLinks = document.querySelectorAll(".tab-links");
let tabContents = document.querySelectorAll(".tab-contents");

function opentab(tabName) {
  for (let tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (let tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

let sideMenu = document.getElementById("sidemenu");

function openmenu() {
  sideMenu.style.right = "0";
}

function closemenu() {
  sideMenu.style.right = "-200px";
}

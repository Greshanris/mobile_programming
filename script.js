function myFunction(a) {
  let pic;
  if (a == 0) {
    pic = "./images/lightbulb.png";
  } else {
    pic = "./images/lightbulb_on.png";
  }

  let myImage = document.getElementById("myImage");

  myImage.src = pic;

  if (myImage.src === "./images/lightbulb_on.png") {
    myImage.style.color = "green";
  }
}

let span = document.getElementById("span-text");

function scaleText(a) {
  if (a == 0) {
    span.style.fontSize = "23px";
    span.classList.add("hover-enabled");
  } else {
    span.style.fontSize = "16px";
    span.classList.remove("hover-enabled");
  }
}

const divHidden = document.getElementById("div-hidden");

function showFunction(a) {
  if (a == 1) {
    divHidden.style.display = "block";
  } else {
    divHidden.style.display = "none";
    divHidden.style.color = "white";
  }
}

function alertFunction() {
  window.alert("Color will be changed to green");
  divHidden.style.color = "green";
}

const nagivation = document.getElementById("navigation");
function menuFunction() {
  if (nagivation.style.display == "flex") {
    nagivation.style.display = "none";
  } else {
    nagivation.style.display = "flex";
  }
}

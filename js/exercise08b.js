function trueSight() {
  const clouded = document.getElementsByClassName("clouded");
  for (let i = 0; i < clouded.length; i++) {
    clouded[i].classList.toggle("truth");
  }
  const lr = document.getElementsByClassName("lies");
  for (let i = 0; i < lr.length; i++) {
    lr[i].classList.toggle("lieremover");
  }

  var ef = document.getElementById("enemyfig");
  if (ef.style.display === "block") {
    ef.style.display = "none";
  } else {
    ef.style.display = "block";
  }

  var os = document.getElementById("our-savior");
  if (os.style.display === "inline-block") {
    os.style.display = "none";
  } else {
    os.style.display = "inline-block";
  }
}

function setdarkmode() {
  if (localStorage.darkmode) {
    if (localStorage.darkmode == 0) {
	  localStorage.darkmode = 1;
	  var element = document.body;
	  element.classList.toggle("darkmode")
	} else {
	  localStorage.darkmode = 0;
	  var element = document.body;
	  element.classList.toggle("darkmode")
	}
  } else {
    localStorage.darkmode = 1;
	var element = document.body;
	element.classList.toggle("darkmode")
  }
  //test purposes
  if (localStorage.darkmode == 0) {
    document.getElementById("darkmode").innerHTML = "Dark mode disabled";
  } else {
	document.getElementById("darkmode").innerHTML = "Dark mode enabled";
  }
}
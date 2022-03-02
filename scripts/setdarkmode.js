function setDarkMode() {
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
}
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
if (localStorage.darkmode) {
  if (localStorage.darkmode == 1) {
    var element = document.body;
    element.classList.toggle("darkmode");
  }
} else if (userPrefersDark) {
	var element = document.body;
    element.classList.toggle("darkmode");
    localStorage.darkmode = 1;
} else if (userPrefersLight) {
    localStorage.darkmode = 0;
}
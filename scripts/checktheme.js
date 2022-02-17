//run on load of page
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
if (localStorage.darkmode) {
  if (localStorage.darkmode == 1) {
    var element = document.body;
    element.classList.toggle("darkmode");
	console.log("dark mode loaded from Web Storage");
  }
} else if (userPrefersDark) {
	var element = document.body;
    element.classList.toggle("darkmode");
    console.log("dark mode loaded from the user's device preferences");
} else if (userPrefersLight) {
	console.log("user's device prefers light - nothing loaded");
}
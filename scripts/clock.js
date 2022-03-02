function displayClock(){
  time.textContent = new Date().toLocaleTimeString();
  setTimeout(displayClock, 1000); 
}
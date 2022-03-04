function displayClock() {
  time.textContent = new Date().toLocaleTimeString('en-GB');
  setTimeout(displayClock, 1000); 
}

function updateUserTime() {
  if (!localStorage.allUserTime) {
	localStorage.allUserTime = -1;
  }
  localStorage.allUserTime = Number(localStorage.allUserTime) + 1;
  allUserTime.textContent = localStorage.allUserTime;
  setTimeout(updateUserTime, 1000); 
}

function passiveUserTime() {
  if (!localStorage.allUserTime) {
	localStorage.allUserTime = -1;
  }
  localStorage.allUserTime = Number(localStorage.allUserTime) + 1;
  setTimeout(passiveUserTime, 1000); 
}

function passiveSessionTime() {
  if (!localStorage.passiveTime) {
	localStorage.passiveTime = -1;
  }
  localStorage.passiveTime = Number(localStorage.passiveTime) + 1;
  setTimeout(passiveSessionTime, 1000); 
}

function updatePassiveSessionTime() {
  if (!localStorage.passiveTime) {
	localStorage.passiveTime = -1;
  }
  localStorage.passiveTime = Number(localStorage.passiveTime) + 1;
  passiveSession.textContent = localStorage.passiveTime;
  setTimeout(updatePassiveSessionTime, 1000); 
}
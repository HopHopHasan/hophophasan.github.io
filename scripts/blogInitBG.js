function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function checkBG(layer){
  var string = "";
  for (let i = 0; i < layer; i++){
    string = string.concat("../");
  }
  string = string.concat("resources/backgrounds/");
  if (localStorage.blogBG){
    console.log("getting user background");
    if (localStorage.BGHQ == 1){
      document.body.style.backgroundImage = string + ".webp";
      var result = string.concat(localStorage.blogBG, ".png");
    }
    else{
      var result = string.concat(localStorage.blogBG, ".webp");
    }
  }
  else {
    console.log("getting random background");
    var random = getRandomInt(7)+1;
    var savedPhoto = "blogBG" + random;
    if (localStorage.BGHQ == 1){
      document.body.style.backgroundImage = savedPhoto + ".webp";
      var result = string.concat(savedPhoto, ".png");
    }
    else{
      var result = string.concat(savedPhoto, ".webp");
    }
    localStorage.blogBG = savedPhoto;
    console.log(savedPhoto + " BG saved to localStorage");  
  }
  document.getElementById("blogImageBG").src = result;
}

function changeBackground(layer){
  var string = "";
  for (let i = 0; i < layer; i++){
    string = string.concat("../")
  }
  string = string.concat("resources/backgrounds/blogBG")
  var random = getRandomInt(7)+1;
  var savedPhoto = "blogBG" + random;
  if (localStorage.BGHQ == 1){
    var result = string.concat(random, ".png")
  }
  else{
    var result = string.concat(random, ".webp")
  }
  localStorage.blogBG = savedPhoto;
  console.log(savedPhoto + " BG saved to localStorage");
  document.getElementById("blogImageBG").src = result;
}
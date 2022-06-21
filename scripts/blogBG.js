function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function checkBG(layer){
  var string = "url('";
  for (let i = 0; i < layer; i++){
    string = string.concat("../");
  }
  string = string.concat("resources/backgrounds/");
  if (localStorage.blogBG){
    console.log("getting user background");
    if (localStorage.BGHQ == 1){
      var result = string.concat(localStorage.blogBG, ".png')");
    }
    else{
      var result = string.concat(localStorage.blogBG, ".webp')");
    }
  }
  else {
    console.log("getting random background");
    var random = getRandomInt(7)+1;
    var savedPhoto = "blogBG" + random;
    if (localStorage.BGHQ == 1){
      localStorage.blogBG = savedPhoto + ".webp";
      preloadBackgrounds(layer);
      var result = string.concat(savedPhoto, ".png')");
    }
    else{
      var result = string.concat(savedPhoto, ".webp')");
    }
    localStorage.blogBG = savedPhoto;
    console.log(savedPhoto + " BG saved to localStorage");  
  }
  document.body.style.backgroundImage = result;
}

function changeBackground(layer){
  var string = "url('";
  for (let i = 0; i < layer; i++){
    string = string.concat("../")
  }
  string = string.concat("resources/backgrounds/blogBG")
  var random = getRandomInt(7)+1;
  var savedPhoto = "blogBG" + random;
  if (localStorage.BGHQ == 1){
    var result = string.concat(random, ".png')")
  }
  else{
    var result = string.concat(random, ".webp')")
  }
  localStorage.blogBG = savedPhoto;
  console.log(savedPhoto + " BG saved to localStorage");
  document.body.style.backgroundImage = result;
}

function preloadBackgrounds(layer){
  for (let i = 0; i < layer; i++){
    var string = string.concat("../")
  }
  string = string.concat("resources/backgrounds/blogBG")
  if (localStorage.BGHQ == 1){
    var fileType = ".png"
  }
  else{
    var fileType = ".webp"
  }
  var images = new Array()
  function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
      images[i] = new Image()
      images[i].src = preload.arguments[i]
    }
  }
  preload(
    string+"1"+fileType,
    string+"2"+fileType,
    string+"3"+fileType,
    string+"4"+fileType,
    string+"5"+fileType,
    string+"6"+fileType,
    string+"7"+fileType,
  )
console.log("preloading done!");
}
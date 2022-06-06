function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function checkBG(layer){
    if (localStorage.blogBG){
      var index = localStorage.blogBG.lastIndexOf('.');
      var fileType = localStorage.blogBG.slice(index+1).replace(/'/g, '').slice(0,-1);
      console.log("BG filetype: " + fileType);
      var fileName = localStorage.blogBG.slice(0,index);
      if (localStorage.BGHQ == 0 && fileType == "webp" || localStorage.BGHQ == 1 && fileType == "png" || localStorage.BGHQ === undefined){
        console.log("BG preference loaded");
        document.body.style.backgroundImage = localStorage.blogBG;
      }
      else{
        if (localStorage.BGHQ == 1){
          console.log("BG changed to high quality");
          var result = fileName.concat(".png')");
          localStorage.blogBG = result;
          console.log(result + " BG saved to localStorage");
          document.body.style.backgroundImage = result;
        }
        else {
          console.log("BG changed to standard quality");
          var result = fileName.concat(".webp')");
          localStorage.blogBG = result;
          console.log(result + " BG saved to localStorage");
          document.body.style.backgroundImage = result;
        }
      }
    }
    else{
      console.log("New background set");
      changeBackground(layer);
    }
}

function changeBackground(layer){
  var string = "url('";
  for (let i = 0; i < layer; i++){
    string = string.concat("../")
  }
  string = string.concat("resources/backgrounds/blogBG")
  var random = getRandomInt(7)+1;
  if (localStorage.BGHQ == 1){
    var result = string.concat(random, ".png')")
  }
  else{
    var result = string.concat(random, ".webp')")
  }
  localStorage.blogBG = result;
  console.log(result + " BG saved to localStorage");
  document.body.style.backgroundImage = result;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function checkBG(){
    if (localStorage.blogBG){
      document.body.style.backgroundImage = localStorage.blogBG;
    }
    else{
      changeBackground();
    }
}

function changeBackground(){
  var string = "url('/resources/backgrounds/blogBG"
  var random = getRandomInt(7)+1;
  if (localStorage.BGHQ == 1){
    var result = string.concat(random, ".png')")
  }
  else{
    var result = string.concat(random, ".webp')")
  }
  console.log(result);
  localStorage.blogBG = result;
  document.body.style.backgroundImage = result;
}
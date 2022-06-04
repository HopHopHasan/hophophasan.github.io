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
  var random = getRandomInt(4)+1;
  var string = "url('/resources/backgrounds/blogBG"
  var result = string.concat(random, ".jpg')")
  console.log(result);
  localStorage.blogBG = result;
  document.body.style.backgroundImage = result;
}
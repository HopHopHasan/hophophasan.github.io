var devKeys = ['d', '`'];
document.addEventListener("keydown", function(event) {
    if (event.key === 'd') {
        if (devKeys.includes("d")){
            devKeys.splice(0, 1);
        }
    }
    if (event.key === '`') {
        if (devKeys.includes("`")){
            devKeys.splice(1, 1);
        }
    }
    if (devKeys.length == 0){
        console.log("accessing dev page...");
        var pageToGo = "デヴ.html";
        localStorage.goingToDevPage = 1
        window.location.href = pageToGo;
    }
});

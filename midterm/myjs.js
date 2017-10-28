var top = 0;
var left = 0;
var srcStr = "";
var Img = 300;

document.getElementById("menu").addEventListener("click", function(){
    document.getElementById("controls").style.top="475px";
});

document.getElementById("textTitle").addEventListener("keyup", function(ev){
    document.getElementById("title").innerHTML = document.getElementById("textTitle").value; 
});

document.getElementById("textDes").addEventListener("keyup", function(ev){
    document.getElementById("description").innerHTML = document.getElementById("textDes").value; 
});

document.getElementById("color").addEventListener("change", function(){
    document.getElementById("title").style.color = document.getElementById("color").value;
});

document.getElementById("color").addEventListener("change", function(){
    document.getElementById("description").style.color = document.getElementById("color").value;
});

document.addEventListener("keydown", function(ev){
    if (ev.keyCode==37){
        left = left - 10;
        document.getElementById("background").style.left = left+"px";
    }
    
    else if (ev.keyCode==38){
        top = top - 10;
        document.getElementById("background").style.top = top+"px";
    }
    
    else if (ev.keyCode==39){
        left = left + 10;
        document.getElementById("background").style.left = left+"px";
    }
    
    else if (ev.keyCode==40){
        top = top + 10;
        document.getElementById("background").style.top = top+"px";
    }
});

document.addEventListener("keyup", function(ev){
    if (ev.keyCode==189){
        Img = Img - 10;
        document.getElementById("background").style.height=Img+"px";
    }
    
    else if (ev.keyCode==107){ /*keycode for + ???*/
        Img = Img + 10;
        document.getElementById("background").style.height=Img+"px";
    }
    
});

function changeImage(){
    document.getElementById("background").src = srcStr;
}

function transferInput(){
    var val = document.getElementById("BackgroundURL").value;
    
    if(val=="horse"){
        srcStr = "img/bg1.jpg";
    } else if (val=="night"){
        srcStr = "img/bg2.jpg";
    } else if (val=="mountain"){
        srcStr = "img/bg3.jpg";
    } else if (val == "epic"){
        srcStr = "img/bg4.jpg";
    }
}
document.getElementById("BackgroundURL").addEventListener("keyup", function(ev){
    console.log(ev.keyCode);
    if(ev.keyCode==13){
        transferInput();
        changeImage();
    }
});
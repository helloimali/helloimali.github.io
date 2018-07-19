  var boolAll = true;
    var boolHackathon = true;
    var boolSW = true;
    var boolVid = true;
    var boolCurrent = true;

function btnAll(){
    if(boolAll == false){
         buttonOn("btnall");
         buttonOn("btnhackathon");
         buttonOn("btnsocialwork");
         buttonOn("btnvid");
         buttonOn("btncurrent");
    }

}

function btnHack(){
    if (boolHackathon == true){
        boolHackathon = false;
        boolAll = false;
        buttonOff("btnhackathon");
        buttonOff("btnall");
    }
    else{
        boolHackathon = true;
        buttonOn("btnhackathon");
        check();
    }
}

function btnSW(){
    if (boolSW == true){
        boolSW = false;
        boolAll = false;
        buttonOff("btnsocialwork");
        buttonOff("btnall");
    }
    else{
        boolSW = true;
        buttonOn("btnsocialwork");
        check();
    }
}

function btnVid(){
    if (boolVid == true){
        boolVid = false;
        boolAll = false;
        buttonOff("btnvid");
        buttonOff("btnall");
    }
    else{
        boolVid = true;
        buttonOn("btnvid");
        check();
    }
}

function btnCurrent(){
    if (boolCurrent == true){
        boolCurrent = false;
        boolAll = false;
        buttonOff("btncurrent");
        buttonOff("btnall");
    }
    else{
        boolCurrent = true;
        buttonOn("btncurrent");
        check();
    }
}

function check(){
    if(boolHackathon == true && boolSW == true && boolVid == true && boolCurrent == true){
        boolAll = true;
        buttonOn("btnall");
    }
}
function buttonOn(id){
    document.getElementById(id).style.backgroundImage = "linear-gradient(to right, #a1c4fd 0%, #c2e9fb 40%,#c2e9fb 50%, #fff 100%)";
    document.getElementById(id).style.borderStyle = "none";
}

function buttonOff(id){
    document.getElementById(id).style.backgroundImage = "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%,rgba(0,0,0,0) 100%)";
    document.getElementById(id).style.borderStyle = "solid";
    document.getElementById(id).style.borderColor = "#c2e9fb";

}

//2
$('.js-tilt').tilt({
    perspective: 800,
    scale: 1.1,

})

$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.tooltipped').tooltip();
    $('.collapsible').collapsible();
    $('.materialboxed').materialbox();
  });

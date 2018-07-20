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

//3
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



//4

  var duration = anime({
    targets: ' .el',
    duration: 2000,
    direction: 'alternate',
    rotate: 540,
    loop: true
  });

  var rotate = anime({
    targets: ' .rotate360',
    duration: 5000,
    rotate: 360,
    loop: true,
    easing: 'linear'
  });

  var bounce = anime({
    targets: ' .bnce',
    duration: 3000,
    borderRadius: ['2em', '0em'],
    translateX: 250,
    direction: 'alternate',
    loop: true

  });

  var scle = anime({
    targets: '.scale',
    duration: 2000,
    scale: 1.3,
    opacity: 0.3,
    direction: 'alternate',
    loop: true
  })

  var lineDrawing = anime({
     targets: '#lineDrawing .lines path',
     strokeDashoffset: [anime.setDashoffset, 0],
     easing: 'easeInOutSine',
     duration: 1500,
     delay: function(el, i) { return i * 250 },
     direction: 'alternate',
     loop: true
   });

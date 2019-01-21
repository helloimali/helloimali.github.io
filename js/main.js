
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


    var scle = anime({
      targets: '.scale',
      duration: 2000,
      scale: 1.3,
      opacity: 0.3,
      direction: 'alternate',
      loop: true
    });

  var bounce = anime({
    targets: ' .bnce',
    duration: 2000,
    borderRadius: ['2em', '0em'],
    translateY: -250,
    direction: 'alternate',
    loop: true

  });



  var navMove = anime({
    targets: '.midNavCircle',
    translateX: -65,
    backgroundColor: '#0af',
    /*backgroundColor: [
        {value: '#0af'}, // Or #FFFFFF
        {value: '#ff0000',
        {value: '#00ff00'}
      ], */
    opacity: .4,
    easing: 'linear',
    delay: 20,
  });

  var LnavMove = anime({
    targets: '.LNavCircle',
    backgroundColor: '#ff0000',
    opacity: .4,
    translateY: -10,
    translateX: 40,
      easing: 'linear',
    delay: 20,
  });

  var RnavMove = anime({
    targets: '.RNavCircle',
    backgroundColor: '#00ff00',
    opacity: .4,
    translateY: 10,
    translateX: 40,
      easing: 'linear',
    delay: 20,
  });



  var shapeShift = anime.timeline({
    direction: 'alternate',
    loop: true
  });

  shapeShift
    .add({
      targets: '#absoluteOffset .square.navShape',
      easing: 'easeOutExpo',
      borderRadius: ['0em', '2em'],
      offset: 1500 // Starts at 1000ms of the timeline
    })
    .add({
     targets: '#absoluteOffset .circle.navShape',
      easing: 'easeOutExpo',
      borderRadius: ['0em', '2em'],
      offset: 1000 // Starts at 500ms of the timeline
    })
    .add({
      targets: '#absoluteOffset .triangle.navShape',
      borderRadius: ['0em', '2em'],
      easing: 'easeOutExpo',
      offset: 500 // Starts at 0ms of the timeline
    });


    var colorShift = anime.timeline({
      direction: 'alternate',
      loop: true
    });

    colorShift
      .add({
        targets: '#absoluteOffset .colorMix',
        easing: 'easeOutExpo',
        //backgroundColor: '#0af',
        offset: 1500 // Starts at 1000ms of the timeline
      })
      .add({
       targets: '#absoluteOffset .colorMix',
        easing: 'easeOutExpo',
        //backgroundColor: '#ff0000',
        offset: 1000 // Starts at 500ms of the timeline
      })
      .add({
        targets: '#absoluteOffset .colorMix',
        easing: 'easeOutExpo',
        //backgroundColor: '#00ff00',
        offset: 500 // Starts at 0ms of the timeline
      });




  var lineDrawing = anime({
     targets: '#lineDrawing .lines path',
     strokeDashoffset: [anime.setDashoffset, 0],
     easing: 'easeInOutSine',
     duration: 1500,
     delay: function(el, i) { return i * 250 },
     direction: 'alternate',
     loop: true
   });

////////

var rellax = new Rellax('.rellax');

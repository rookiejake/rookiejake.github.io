var vidR = document.getElementById("master-demo"),
  vidG = document.getElementById("client-demo"),
  playbutton = $('#play'),
  pausebutton = $('#pause'),
  fps = 25,
  //currentFrame = 0 - 1 ,
  duration, totalFrames;

function readyVidInterlace() {
  // window.alert("Can start playing video");

  if ((vidR.readyState >= 3) && (vidG.readyState >= 3)) {
    playbutton.fadeIn();
    pausebutton.fadeIn();

    duration = vidR.duration;
    totalFrames = Math.round(duration * fps) - 1;
  }
}

function vidDeviationControl() {

  if ((Math.abs(vidR.currentTime - vidG.currentTime) > 0.05) || (Math.abs(vidR.currentTime - vidB.currentTime) > 0.05)) {
    cancelAnimationFrame(vidDeviationControl);

    vidR.pause();
    vidG.pause();

    // set all 3 before new AnimationFrame is drawn.
    vidG.currentTime = vidR.currentTime;

    vidG.play();
    vidR.play();
  }

  if (vidR.paused || vidR.ended) {
    cancelAnimationFrame(vidDeviationControl);
    return;
  } else {
    requestAnimationFrame(vidDeviationControl);
  }
}

function startVideoInterlace() {
  vidR.play();
  vidG.play();
  vidDeviationControl();
}

function stopVideoInterlace() {
  vidR.pause();
  vidG.pause();
}

$(playbutton).click(function(e) {
  e.preventDefault();
  if (vidR.paused || vidR.ended) {
    startVideoInterlace();
  } 
});

$(pausebutton).click(function(e) {
  e.preventDefault();
  if (!vidR.paused && !vidR.ended) {
    stopVideoInterlace();
  }
});
var vidR = document.getElementById("red-demo"),
  vidG = document.getElementById("blue-demo"),
  playbutton = $('#play1'),
  pausebutton = $('#pause1'),
  fps = 25,
  //currentFrame = 0 - 1 ,
  duration, totalFrames;

function readyVidInterlace1() {
  // window.alert("Can start playing video");

  if ((vidR.readyState >= 3) && (vidG.readyState >= 3)) {
    playbutton.fadeIn();
    pausebutton.fadeIn();

    duration = vidR.duration;
    totalFrames = Math.round(duration * fps) - 1;
  }
}

function vidDeviationControl1() {

  if ((Math.abs(vidR.currentTime - vidG.currentTime) > 0.05) || (Math.abs(vidR.currentTime - vidB.currentTime) > 0.05)) {
    cancelAnimationFrame(vidDeviationControl1);

    vidR.pause();
    vidG.pause();

    // set all 3 before new AnimationFrame is drawn.
    vidG.currentTime = vidR.currentTime;

    vidG.play();
    vidR.play();
  }

  if (vidR.paused || vidR.ended) {
    cancelAnimationFrame(vidDeviationControl1);
    return;
  } else {
    requestAnimationFrame(vidDeviationControl1);
  }
}

function startVideoInterlace1() {
  vidR.play();
  vidG.play();
  vidDeviationControl1();
}

function stopVideoInterlace1() {
  vidR.pause();
  vidG.pause();
}

$(playbutton).click(function(e) {
  e.preventDefault();
  if (vidR.paused || vidR.ended) {
    startVideoInterlace1();
  } 
});

$(pausebutton).click(function(e) {
  e.preventDefault();
  if (!vidR.paused && !vidR.ended) {
    stopVideoInterlace1();
  }
});
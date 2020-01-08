var vidR2 = document.getElementById("master-demo"),
  vidG2 = document.getElementById("client-demo"),
  playbutton2 = $('#play2'),
  pausebutton2 = $('#pause2'),
  fps2 = 25,
  //currentFrame = 0 - 1 ,
  duration, totalFrames;

function readyVidInterlace2() {
  // window.alert("Can start playing video");

  if ((vidR2.readyState >= 3) && (vidG2.readyState >= 3)) {
    playbutton2.fadeIn();
    pausebutton2.fadeIn();

    duration = vidR2.duration;
    totalFrames = Math.round(duration * fps2) - 1;
  }
}

function vidDeviationControl2() {

  if ((Math.abs(vidR2.currentTime - vidG2.currentTime) > 0.05) || (Math.abs(vidR2.currentTime - vidB.currentTime) > 0.05)) {
    cancelAnimationFrame(vidDeviationControl2);

    vidR2.pause();
    vidG2.pause();

    // set all 3 before new AnimationFrame is drawn.
    vidG2.currentTime = vidR2.currentTime;

    vidG2.play();
    vidR2.play();
  }

  if (vidR2.paused || vidR2.ended) {
    cancelAnimationFrame(vidDeviationControl2);
    return;
  } else {
    requestAnimationFrame(vidDeviationControl2);
  }
}

function startVideoInterlace2() {
  vidR2.play();
  vidG2.play();
  vidDeviationControl2();
}

function stopVideoInterlace2() {
  vidR2.pause();
  vidG2.pause();
}

$(playbutton2).click(function(e) {
  e.preventDefault();
  if (vidR2.paused || vidR2.ended) {
    startVideoInterlace2();
  } 
});

$(pausebutton2).click(function(e) {
  e.preventDefault();
  if (!vidR2.paused && !vidR2.ended) {
    stopVideoInterlace2();
  }
});
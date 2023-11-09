var myVideo = document.getElementById ("myVideo");
var playBtn = document.getElementById ("playBtn");
var pauseBtn = document.getElementById ("pauseBtn");
var stopBtn = document.getElementById ("stopBtn");


playBtn.onclick = function () {
 myVideo.play ();
}


pauseBtn.onclick = function () {
 myVideo.pause ();
}


stopBtn.onclick = function () {
 myVideo.pause ();
 myVideo.currentTime = 0;
}
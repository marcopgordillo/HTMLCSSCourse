const audioPlayer = document.getElementById("audio-player");
const audio1 = document.getElementById("audio-1");
const playButton = document.getElementById("play-btn");
const pauseButton = document.getElementById("pause-btn");
const duration = document.getElementById("duration");
const played = document.getElementById("played");

audioPlayer.dataset.state = "paused";

playButton.addEventListener("click", function() {
  if (audioPlayer.dataset.state === "paused") {
    audio1.play();
    audioPlayer.dataset.state = "playing";
  }
});
pauseButton.addEventListener("click", function() {
  if (audioPlayer.dataset.state === "playing") {
    audio1.pause();
    audioPlayer.dataset.state = "paused";
  }
});
audio1.addEventListener("loadedmetadata", function(event) {
  duration.textContent = formatTime(audio1.duration);
});
audio1.addEventListener("timeupdate", function(event) {
  played.textContent = formatTime(audio1.currentTime);
});
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.round(time) % 60;
  return `${
    minutes < 10 ? "0" + minutes : minutes
  }:${
    seconds < 10 ? "0" + seconds : seconds 
  }`;
}

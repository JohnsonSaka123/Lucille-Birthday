const countdownTimerElement = document.getElementById("countdown-timer");

const birthdayMessageElement = document.getElementById("birthday-message");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");


const birthdayDate = new Date("2025-04-06T00:00:00").getTime(); 
function showFinalMessage() {
  document.getElementById("final-message").style.display = "block"; // Show final message
}


function updateCountdownTimer(){
  const currentTime = new Date();

  const timeLeft = birthdayDate - currentTime.getTime();

  if(timeLeft <=0){
    birthdayMessageElement.style.display = "block";
    countdownTimerElement.style.display = "none";

    // Start confetti
    startConfetti();

    const song = document.getElementById("birthday-song");
    song.play();
    videoElement.play();

  }else {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((timeLeft % (1000* 60 * 60)) / (1000*60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    
    daysElement.textContent = days.toString().padStart(2, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');

  }

}

setInterval(updateCountdownTimer,1000);
updateCountdownTimer();

function startConfetti() {
  confetti({
    particleCount: 200,  // Number of confetti pieces
    spread: 120,  // Spread angle
    origin: { y: 0.6 } // Start position
  });

  setTimeout(startConfetti, 1000); // Keeps the confetti going
}

const videoElement = document.getElementById("memory-video");
const videoSource = document.getElementById("video-source");
const videoPlaylist = [
  "videos/video1.mp4",
  "videos/video2.mp4",
  "videos/video3.mp4",
  "videos/video4.mp4"
];
let currentVideoIndex = 0;

// Function to play next video
function playNextVideo() {
  currentVideoIndex++;
  if (currentVideoIndex < videoPlaylist.length) {
    videoSource.src = videoPlaylist[currentVideoIndex];
    videoElement.load(); // Reload video
    videoElement.play();
  } else {
    showFinalMessage(); // Show final message after last video
  }
}

// Event listener: Play next video when one ends
videoElement.addEventListener("ended", playNextVideo);

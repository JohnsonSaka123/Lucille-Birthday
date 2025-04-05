const countdownTimerElement = document.getElementById("countdown-timer");
const birthdayMessageElement = document.getElementById("birthday-message");
const videoContainer = document.getElementById("video-container");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const Header = document.getElementById("header");

const ThankYou = document.getElementById("thank-you-note")

const birthdayDate = new Date("2025-04-06T00:00:00").getTime();
console.log(birthdayDate); 

// Initially hide the content
birthdayMessageElement.style.display = "none";
videoContainer.style.display = "none";
gallery.style.display = "none";
ThankYou.style.display = "none"; // Hide the thank you note initially



countdownTimerElement.style.display = "block"; // Make sure the countdown timer is visible initially

function updateCountdownTimer() {
  const currentTime = new Date();
  const timeLeft = birthdayDate - currentTime.getTime();

  if (timeLeft <= 0) {
    countdownTimerElement.style.display = "none"; // Hide countdown timer after time is up

    // Show the content after the countdown ends
    birthdayMessageElement.style.display = "block";
    videoContainer.style.display = "block";
    gallery.style.display = "block";
    ThankYou.style.display = "block"; // Show the thank you note
    
    

  } else {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    daysElement.textContent = days.toString().padStart(2, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
  }
}

setInterval(updateCountdownTimer, 1000);
updateCountdownTimer(); // Initialize countdown on load

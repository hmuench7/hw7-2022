var video;

// When the page loads:
//      Initialize the video element
//      Turn off autoplay and looping
window.addEventListener("load", function() {
	console.log("Good job opening the window")
    video = document.querySelector("#player1");
    video.autoplay = false;
    video.loop = false;
    console.log("Auto play is set to " + video.autoplay);
    console.log("Loop is set to " + video.loop);
});

// When the play button is clicked:
//      Play the video
//      Update volume information
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play video");
    video.play()
    let volume = document.querySelector("#slider").value;
    video.volume = volume/100;
    document.querySelector("#volume").innerHTML = volume + "%";
});

// When the pause button is clicked:
//      Pause the video
document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause video");
    video.pause();
})

// When the slow down button is clicked:
//      Slow the video speed by 10%
//      Log the new speed to the console
document.querySelector("#slower").addEventListener("click", function() {
    console.log("Slow down video");
    let speed = video.playbackRate;
    speed = speed * 0.9;
    video.playbackRate = speed;
    console.log("Speed is " + speed);
})

// When the speed up button is clicked:
//      Speed the video speed
//      After three slow down clicks and three speed up clicks,
//      the speed should be close to 100%
document.querySelector("#faster").addEventListener("click", function() {
    console.log("Speed up video");
    let speed = video.playbackRate;
    speed = speed / 0.9;
    video.playbackRate = speed;
    console.log("Speed is " + speed);
})

// When the skip ahead button is clicked:
//      Advance the video by 10 seconds
//      If the video length has been exceeded, go back to the start
//      Log the current location of the video
document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip ahead");
    let time = video.currentTime;
    if(time + 10 > video.duration) {
        video.currentTime = 0;
    }
    else {
        video.currentTime = time + 10;
    }
    console.log("Video current time is " + video.currentTime)
})

// When the mute button is clicked:
//      Mute/unmute the video
//      Updated the text on the button
document.querySelector("#mute").addEventListener("click", function() {
    let mute_button = document.querySelector("#mute");
    if(video.muted) {
        console.log("Unmute");
        video.muted = false;
        mute_button.innerHTML = "Mute";
    }
    else {
        console.log("Mute");
        video.muted = true;
        mute_button.innerHTML = "Unmute"
    }
})

// When the volume slider is changed:
//      Change the volume
//      Updated the volume information
document.querySelector("#slider").addEventListener("change", function() {
    console.log("Volume slider was changed");
    let volume = document.querySelector("#slider").value;
    video.volume = volume/100;
    document.querySelector("#volume").innerHTML = volume + "%";
})

// When the old school button is clicked:
//      Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {
    console.log("Use old school");
    video.classList.add("oldSchool")
})

// When the original button is clicked:
//      Remove the oldSchool class from the video
document.querySelector("#orig").addEventListener("click", function() {
    console.log("Use original");
    video.classList.remove("oldSchool");
})

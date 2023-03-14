let playButton=document.getElementById('play-btn')

let video=document.querySelector('.video')

let progressbar=document.querySelector(".progress-bar");

let ProgressRange=document.querySelector('.progress-range')

let isvideoplay=false

// let play or pause the video

function playOrPauseVideo(){
    if(!isvideoplay){
        video.play()
        isvideoplay=true;
        playButton.classList.replace("fa-play","fa-pause")
    }
    else{
        video.pause()
        isvideoplay=false;
        playButton.classList.replace("fa-pause","fa-play")
    }

}

// update progress bar

function updateProgressbar(event){

    console.log(event.target.currentTime,event.target.duration);
    let currentTime=event.target.currentTime;
    let TotalDuration=event.target.duration;

    progressbar.style.cssText=`width: ${(currentTime/TotalDuration)*100
    }% `;


}

function UpdateSeekbar(event){
    let CurrentPoint=event.offsetX;
    let ProgressbarWidth=this.clientWidth;
    let currentRange=(CurrentPoint/ProgressbarWidth)*video.duration;
    video.currentTime=currentRange
}

// add eventlistener

playButton.addEventListener("click",playOrPauseVideo)

video.addEventListener("click",playOrPauseVideo)
video.addEventListener("timeupdate",updateProgressbar)

ProgressRange.addEventListener("click", UpdateSeekbar )
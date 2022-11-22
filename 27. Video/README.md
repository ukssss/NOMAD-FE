# Video

> 동영상을 직접 제작한 버튼들을 통해 재생, 일시정지, 음소거, 볼륨조절을 가능하도록 구현하였다.

### Code

index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Video Player</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <video controls width="700px" src="https://serranoarevalo.github.io/notflix/9bfd1023900e31286103369c803c7ee9.ogv"></video>
    <div id="video-button">
      <button id="play">Play</button>
      <button id="mute">Mute</button>
      <input type="range" step="0.1" min="0" max="1" value="0.5" id="volume" />
    </div>
  </body>
  <script src="./src/index.js"></script>
</html>
```

index.js

```javascript
const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const volumeRange = document.getElementById("volume");

let volumeValue = 0.5;
video.volume = volumeValue;

// Play, Pause
const handlePlayClick = (event) => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  playBtn.innerText = video.paused ? "Play" : "Pause";
};

// Mute, Unmute
const handleMuteClick = (event) => {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
  muteBtn.innerText = video.muted ? "Unmute" : "Mute";
  volumeRange.value = video.muted ? 0 : volumeValue;
};

// Control to Volume
const handleVolumeRange = (event) => {
  const {
    target: { value },
  } = event;

  if (video.muted) {
    video.muted = false;
    muteBtn.innerText = "Mute";
  }

  volumeValue = value;
  video.volume = value;

  muteBtn.innerText = Number(value) === 0 ? "Unmute" : "Mute";
};

playBtn.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMuteClick);
volumeRange.addEventListener("input", handleVolumeRange);
```

### 결과
![Nov-23-2022 04-01-28](https://user-images.githubusercontent.com/86929961/203399402-10f6aa6d-4595-45a9-8923-9d598edc55a0.gif)

# Video II

> 업로드한 동영상을 볼 수 있도록 비디오 플레이어를 직접 제작해보는 실습

### 구현내용

1. 키보드 Space -> Play / Pause
2. 키보드 m -> Mute / Unmute
3. 키보드 f -> Fullscreen / Exit Fullscreen
4. 유튜브, 넷플릭스 처럼 타임라인 생성 (비디오 진행 상태, 클릭 시 점프)
5. 재생 시간 표시

### Code

index.js

```javascript
const formatTime = (seconds) => {
  // 1 시간 이상일 경우 3자리(00:00:00), 아닐 경우 2자리(00:00) 표시
  const startIdx = seconds >= 3600 ? 11 : 14;
  return new Date(seconds * 1000).toISOString().substring(startIdx, 19);
};

const handleTimeUpdate = () => {
  // 시간 삽입, 타임라인 값에 대입
  currentTime.innerText = formatTime(Math.floor(video.currentTime));
  timeline.value = Math.floor(video.currentTime);
};
const handleLoadedMetadata = () => {
  // 최대 시간 삽입, 타임라인 최대치 대입
  duration.innerText = formatTime(Math.floor(video.duration));
  timeline.max = Math.floor(video.duration);
};

const handleTimelineChange = (event) => {
  const {
    target: { value },
  } = event;
  // 타임라인 값을 비디오 시간에 대입
  video.currentTime = value;
};

const handleFullscreenChange = () => {
  const fullscreenStatus = document.fullscreenElement;
  // Fullscreen 으로 사용되고 있는 요소가 있을 경우 적용
  if (fullscreenStatus) {
    document.exitFullscreen();
    fullscreen.innerText = "Enter Full Screen";
  } else {
    videoController.requestFullscreen();
    fullscreen.innerText = "Exit Full Screen";
  }
};

const handleKeyboardDetect = (event) => {
  const keyCode = event.keyCode;

  // 스페이스바를 누를 경우
  if (keyCode === 32) {
    handlePlayAndStop();
  }
  // m 키를 누를 경우
  if (keyCode === 77) {
    handleSound();
  }
  // F 키를 누를 경우
  if (keyCode === 70) {
    handleFullscreenChange();
  }

  // ESC 키를 누를 경우
  if (keyCode === 27) {
    event.preventDefault();
    event.stopPropagation();
    document.exitFullscreen();
    fullscreen.innerText = "Enter Full Screen";
  }
};

const hideController = () => videoController.classList.remove("Merong");

const handleMouseMove = (event) => {
  // 마우스를 떠났는지 감지, 아직 타이머가 작동한다면 이를 제거
  if (controlTimeout) {
    clearTimeout(controlTimeout);
    controlTimeout = null;
  }
  // 마우스가 움직일 경우 타이머가 있는지 확인 후, 아직 타이머가 작동한다면 이를 제거
  if (controlMovementTimeout) {
    clearTimeout(controlMovementTimeout);
    controlMovementTimeout = null;
  }

  videoController.classList.add("Merong");
  // 마우스가 비디오 안에서 가만히 있을 경우 타이머 시작, 클래스 삭제
  controlMovementTimeout = setTimeout(hideController, 3000);
};
const handleMouseLeave = (event) => {
  // 마우스가 비디오 밖을 나갈 경우 타이머 시작, 클래스 삭제
  controlTimeout = setTimeout(hideController, 3000);
};

video.addEventListener("timeupdate", handleTimeUpdate);
video.addEventListener("loadedmetadata", handleLoadedMetadata);
timeline.addEventListener("input", handleTimelineChange);
fullscreen.addEventListener("click", handleFullscreenChange);
window.addEventListener("keydown", handleKeyboardDetect);
video.addEventListener("mousemove", handleMouseMove);
video.addEventListener("mouseleave", handleMouseLeave);
```

### 결과
![Nov-24-2022 02-43-58](https://user-images.githubusercontent.com/86929961/203614145-b879dec7-bb46-4943-b371-1bdea907fb05.gif)


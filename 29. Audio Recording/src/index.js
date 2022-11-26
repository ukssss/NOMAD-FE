// 최대 5초 동안 녹음하세요. O
// 녹음한 것을 웹 사이트에서 들을 수 있도록 사용자에게 녹음 미리 듣기를 제공하세요.(오디오 플레이어 만들기) O
// Start Recording버튼을 만들고, 녹음이 끝나면 Download Recording버튼을 만드세요. O

const startBtn = document.getElementById("startBtn");
const voice = document.getElementById("preview");

let stream;
let recorder;
let voiceFile;

// Download
const handleDownload = () => {
  startBtn.innerText = "Start Recording";
  startBtn.removeEventListener("click", handleDownload);
  startBtn.addEventListener("click", handleStart);
  // 5
  const a = document.createElement("a");
  a.href = voiceFile;
  a.download = "MyRecording.webm";
  document.body.appendChild(a);
  a.click();
};

// 녹음 중지
const handleStop = () => {
  startBtn.innerText = "Download Recording";
  startBtn.removeEventListener("click", handleStop);
  startBtn.addEventListener("click", handleDownload);
  // 3
  recorder.stop();
};

// 녹음 시작
const handleStart = async () => {
  startBtn.innerText = "Stop Recording";
  startBtn.removeEventListener("click", handleStart);
  startBtn.addEventListener("click", handleStop);
  // 1
  stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  voice.srcObject = stream;
  recorder = new MediaRecorder(stream, { mimeType: "video/webm" });
  // 4
  recorder.ondataavailable = (event) => {
    voiceFile = URL.createObjectURL(event.data);
    voice.srcObject = null;
    voice.src = voiceFile;
    voice.play();
  };
  // 2
  recorder.start();
};

startBtn.addEventListener("click", handleStart);

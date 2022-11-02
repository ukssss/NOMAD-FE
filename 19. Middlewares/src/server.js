import express from "express";

const PORT = 4000;
const app = express();

const urlLogger = (req, res, next) => {
  // 방문 중인 URL 을 기록(Log)
  console.log(`PATH: ${req.url}`);
  next();
};

const timeLogger = (req, res, next) => {
  // 요청(request) 하는 시간의 년, 월, 일 출력
  const day = new Date();
  const year = day.getFullYear();
  const month = day.getMonth() + 1;
  const date = day.getDate();

  console.log(`Time: ${year}.${month}.${date}`);
  next();
};

const securityLogger = (req, res, next) => {
  // 프로토콜이 https 이면 Secure, 그렇지 않으면 Insecure 출력
  const protocol = req.protocol;

  if (protocol === "https") {
    console.log("Secure");
  } else {
    console.log("Insecure");
  }
  next();
};

const protectorLogger = (req, res, next) => {
  // /protected 로 이동할 경우 이동하지 못하도록 하는 미들웨어
  const url = req.url;

  if (url === "/protected") {
    return res.status(403).send("<h1>403 forbidden</h1>");
  } else {
    next();
  }
};

const home = (req, res) => {
  return res.send("<h1>Home Page</h1>");
};

const login = (req, res) => {
  return res.send("<h1>Login Page</h1>");
};

const protect = (req, res) => {
  return res.send("<h1>이 페이지가 나오면 실패한겁니다. ㅠㅠㅠ</h1>");
};

app.use(urlLogger);
app.use(timeLogger);
app.use(securityLogger);
app.use(protectorLogger);

app.get("/", home);
app.get("/login", login);
app.get("/protected", protect);

const handleListening = () => {
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);
};

app.listen(PORT, handleListening);

import express from "express";

const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
  return res.send("<h1>Home Page</h1>");
};

const handleAbout = (req, res) => {
  return res.send("<h1>About Page</h1>");
};

const handleContact = (req, res) => {
  return res.send("<h1>Contact Page</h1>");
};

const handleLogin = (req, res) => {
  return res.send("<h1>Login Page</h1>");
};

app.get("/", handleHome);
app.get("/about", handleAbout);
app.get("/contact", handleContact);
app.get("/login", handleLogin);

const handleListening = () => console.log(`✅  Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

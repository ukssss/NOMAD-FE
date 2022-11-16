/*
You DONT have to import the User with your username.
Because it's a default export we can nickname it whatever we want.
So import User from "./models"; will work!
You can do User.find() or whatever you need like normal!
*/
import User from "./models/User";
import bcrypt from "bcrypt";

// Add your magic here!

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  const { username, password, password2, name } = req.body;
  const pageTitle = "Join";
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "오류: 비밀번호가 다릅니다",
    });
  }
  const exists = await User.exists({ username });
  if (exists) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "오류: 이미 가입된 사용자명 입니다",
    });
  }
  try {
    await User.create({
      username,
      password,
      name,
    });
    return res.redirect("/login");
  } catch (error) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: error._message,
    });
  }
};

export const getLogin = (req, res) => res.render("login", { pageTitle: "Login" });
export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const pageTitle = "Login";
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "오류: 존재하지 않는 사용자입니다",
    });
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "오류: 잘못된 비밀번호입니다",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;

  return res.redirect("/");
};

export const home = (req, res) => {
  if (!req.session.loggedIn) {
    return res.redirect("/login");
  }
  return res.render("home", { pageTitle: "Home" });
};

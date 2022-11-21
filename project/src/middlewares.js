export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteTitle = "Ukss-ToyProject";
  res.locals.loggedInUser = req.session.user || {};
  console.log(res.locals);
  next();
};

// Login 상태일 경우 작동
export const protectorMiddleware = (req, res, next) => {
  if (req.session.loggedIn) {
    return next();
  } else {
    return res.redirect("/login");
  }
};

// Non-Login 상태일 경우 작동
export const publicMiddleware = (req, res, next) => {
  if (!req.session.loggedIn) {
    return next();
  } else {
    return res.redirect("/");
  }
};

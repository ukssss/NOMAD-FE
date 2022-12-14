export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.loggedInUser = req.session.user;
  res.locals.siteTitle = "ukss-ToyProject";
  console.log(res.locals);
  next();
};

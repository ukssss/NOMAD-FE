export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteTitle = "Ukss-ToyProject";
  console.log(res.locals);
  next();
};

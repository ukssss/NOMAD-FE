export const handleJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const handleLogin = (req, res) => res.render("login", { pageTitle: "Login" });
export const handleUser = (req, res) => res.render("user", { pageTitle: "User" });
export const handlePerUser = (req, res) => res.render("personal", { pageTitle: `User #${req.params.id}` });
export const handleEditUser = (req, res) => res.render("edituser", { pageTitle: `Edit User` });

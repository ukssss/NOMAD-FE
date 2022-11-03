export const join = (req, res) => res.send("Join Page");
export const login = (req, res) => res.send("Login Page");
export const seeUser = (req, res) => res.send(`See User #${req.params.id}`);
export const logoutUser = (req, res) => res.send(`Logout User #${req.params.id}`);
export const editUser = (req, res) => res.send(`Edit User #${req.params.id}`);
export const deleteUser = (req, res) => res.send(`Delete User #${req.params.id}`);

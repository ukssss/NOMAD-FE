export const handleJoin = (req, res) => res.send("<h1>Join Page</h1>");
export const handleLogin = (req, res) => res.send("<h1>Login Page</h1>");
export const handleUser = (req, res) => res.send("<h1>User Page</h1>");
export const handlePerUser = (req, res) => res.send(`<h1>User #${req.params.id}</h1>`);
export const handleEditUser = (req, res) => res.send("<h1>Edit User</h1>");

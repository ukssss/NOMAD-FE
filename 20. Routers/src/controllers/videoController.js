export const search = (req, res) => res.send("Search Video");
export const uploadVideo = (req, res) => res.send("Upload Video");
export const watchVideo = (req, res) => res.send(`Watch Video #${req.params.id}`);
export const editVideo = (req, res) => res.send(`Edit Video #${req.params.id}`);
export const deleteVideo = (req, res) => res.send(`Delete Video #${req.params.id}`);
export const commentsVideo = (req, res) => res.send(`Comments Video #${req.params.id}`);

export const handleTrend = (req, res) => res.send("<h1>Trending Page</h1>");
export const handleNew = (req, res) => res.send("<h1>New Story</h1>");
export const watchStory = (req, res) => res.send(`<h1>Watch Story #${req.params.id}</h1>`);
export const editStory = (req, res) => res.send(`<h1>Edit Story #${req.params.id}</h1>`);
export const deleteStory = (req, res) => res.send(`<h1>Delete Story #${req.params.id}</h1>`);

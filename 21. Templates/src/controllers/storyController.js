export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const handleTrend = (req, res) => res.render("trending", { pageTitle: "Trend" });
export const handleNew = (req, res) => res.render("newstory", { pageTitle: "New" });
export const watchStory = (req, res) => res.render("watchstory", { pageTitle: `Watch #${req.params.id}` });
export const editStory = (req, res) => res.render("editstory", { pageTitle: `Edit #${req.params.id}` });
export const deleteStory = (req, res) => res.render("deletestory", { pageTitle: `Delete #${req.params.id}` });

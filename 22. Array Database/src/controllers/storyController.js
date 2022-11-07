let stories = [
  {
    title: "First Story",
    rating: 5,
    comments: 2,
    createdAt: "2022.11.1",
    views: 1,
    id: 1,
  },
  {
    title: "Second Story",
    rating: 5,
    comments: 2,
    createdAt: "2022.11.1",
    views: 21,
    id: 2,
  },
  {
    title: "Third Story",
    rating: 5,
    comments: 2,
    createdAt: "2022.11.1",
    views: 59,
    id: 3,
  },
];

export const home = (req, res) => res.render("home", { pageTitle: "Home", stories });
export const watchStory = (req, res) => {
  const { id } = req.params;
  const story = stories[id - 1];
  return res.render("watchstory", { pageTitle: `Watch #${story.title}`, story });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const story = stories[id - 1];
  return res.render("editstory", { pageTitle: `Edit #${req.params.id}`, story });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  stories[id - 1].title = title;
  return res.redirect(`/stories/${id}`);
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Story" });
};
export const postUpload = (req, res) => {
  const { title } = req.body;
  const newStory = {
    title,
    rating: Math.floor(Math.random() * 10),
    comments: Math.floor(Math.random() * 100),
    createdAt: "2022.11.1",
    views: Math.floor(Math.random() * 100),
    id: stories.length + 1,
  };
  stories.push(newStory);
  return res.redirect(`/`);
};

# Array Database

---

> 가짜 데이터를 활용해서 GET, POST Method 로 서버에 request 를 보내어 데이터를 수정, 추가하는 방법을 배워봤다.

### Router Layout

```
/

/stories/:id
/stories/:id/edit
/stories/upload
```

### 코드

1. `storyController.js`

```Javascript
// 가짜 데이터 생성
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
// GET Edit
export const getEdit = (req, res) => {
  const { id } = req.params;
  const story = stories[id - 1];
  return res.render("editstory", { pageTitle: `Edit #${req.params.id}`, story });
};
// POST Edit
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  stories[id - 1].title = title;
  return res.redirect(`/stories/${id}`);
};
// GET Upload
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Story" });
};
// POST Upload
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

```

2. pug (layout, home+ )

```Javascript
// layout.pug
doctype html
html(lang="ko")
  head
    title #{pageTitle} | Pug
    link(rel="stylesheet", href="https://unpkg.com/mvp.css@1.12/mvp.css")
  body
    header
      h1=pageTitle
      nav
        ul
          li
            a(href="/stories/upload") Upload Story
    main
      block content
  include partials/footer

// upload.pug
extends layout.pug

block content
  form(method="POST", action="/stories/upload")
    input(placeholder="Title", required, type="text", name="title")
    input(type="submit", value="Upload Story")
```

### Result

1. Edit Story
   ![edit](/result/6-3.gif)
   ![edit2](</result/6-3(2).gif>)

2. Upload Story
   ![upload](/result/6-6.gif)

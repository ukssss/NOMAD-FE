# Pug

---

View Engine 인 `PUG` 를 사용해보는 실습

### Router Layout

```
/
/trending
/new
/join

/users
/users/:id
/users/edit-profile

/stories/:id
/stories/:id/edit
/stories/:id/delete
```

### 코드

1. Controllers (story, user)

```Javascript
// storyController.js
export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const handleTrend = (req, res) => res.render("trending", { pageTitle: "Trend" });
export const handleNew = (req, res) => res.render("newstory", { pageTitle: "New" });
export const watchStory = (req, res) => res.render("watchstory", { pageTitle: `Watch #${req.params.id}` });
export const editStory = (req, res) => res.render("editstory", { pageTitle: `Edit #${req.params.id}` });
export const deleteStory = (req, res) => res.render("deletestory", { pageTitle: `Delete #${req.params.id}` });

// userController.js
export const handleJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const handleLogin = (req, res) => res.render("login", { pageTitle: "Login" });
export const handleUser = (req, res) => res.render("user", { pageTitle: "User" });
export const handlePerUser = (req, res) => res.render("personal", { pageTitle: `User #${req.params.id}` });
export const handleEditUser = (req, res) => res.render("edituser", { pageTitle: `Edit User` });
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
    main
      block content
  include partials/footer

// home.pug (+ 12 page same code)
extends layout.pug

block content
  h2 home.pug
```

### Result

![templates](/result/templates.gif)

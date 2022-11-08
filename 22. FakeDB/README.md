# FakeDB

---

> 영화 정보 DB 를 활용하여 영화 정보, 조건 검색이 가능한 사이트를 제작하였다.

### Router Layout

```
/ --> Home

/:id --> Movie Detail
/filter --> Filter
```

### 코드

1. `server.js`

```Javascript
...
app.set("view engine", "pug"); // PUG 사용
app.set("views", path.join(__dirname, "views")); // 인자로 받은 경로들을 하나의 문자열 형태로 리턴한다.
app.use(express.urlencoded({ extended: true })); // req.body 파싱
app.use(logger);

app.use("/", movieRouter);

...
```

2. `movieRouter.js`

```Javascript
import express from "express";
import { home, movieDetail, filterMovie } from "../controllers/movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);
movieRouter.get("/:id(\\d+)", movieDetail);
movieRouter.get("/filter", filterMovie);

export default movieRouter;
```

3. `movieController.js`

```Javascript
import { getMovieById, getMovies, getMovieByMinimumRating, getMovieByMinimumYear } from "../db";

export const home = (req, res) => {
  const movies = getMovies(); // DB에 있는 모든 영화를 배열(array)로 반환하는 함수
  return res.render("home", { pageTitle: "Home", movies });
};
export const movieDetail = (req, res) => {
  const { id } = req.params;
  const movie = getMovieById(id); // ID로 영화를 찾는 함수
  return res.render("detail", { pageTitle: `${movie.title}`, movie });
};
export const filterMovie = (req, res) => {
  const { year, rating } = req.query;
  try {
    const movies = year ? getMovieByMinimumYear(year) : getMovieByMinimumRating(rating);
    // getMovieByMinimumYear() : X 년 이후 개봉한 영화를 배열로 반환하는 함수
    // getMovieByMinimumRating() : X 보다 큰 등급의 영화를 배열로 반환하는 함수
    return res.render("filter", {
      pageTitle: `${year ? `Search for movies released after ${year}` : `Search for movies rated higher than ${rating}`}`,
      movies,
    });
  } catch (error) {
    res.redirect("/"); // 브라우저가 redirect(자동으로 이동) 하도록 하는 기능
  }
};
```

4. `mixins/movie.pug`

```Javascript
mixin movie(movie)
  div
    h4
      a(href=`/${movie.id}`)=movie.title // 제목을 클릭하면 /:id 구현

mixin info(info)
  li=info // info 리스트 형식으로 구현
```

5. `partials/search.pug`

```Javascript
main
  form(action="/filter", method="GET") // /filter, GET Method 사용
    input(name="year", placeholder="Year", type="number") // Year Filter
    input(name="rating", placeholder="Rating", type="number", step="0.1") // Rating Filter
    input(type="submit", value="Search") // 조건 검색
  ul
    each movie in movies
      +movie(movie) // 조건에 맞는 영화 검색
    else
      li Sorry. Nothing Found. // 조건에 맞는 영화가 없을 시 출력
```

### Result

1. Home

   ![home](/result/home.gif)

2. Movie Details

   ![detail](/result/movieDetail.gif)

3. Search by condition

   ![condition](/result/filter.gif)

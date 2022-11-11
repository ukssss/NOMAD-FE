# POST Time!

---

> -

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
-
```

3. `movieController.js`

```Javascript
-
```

4. `mixins/movie.pug`

```Javascript
-
```

5. `partials/search.pug`

```Javascript
-
```

### Result

1. Home

2. Movie Details

3. Search by condition

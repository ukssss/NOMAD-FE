# User

---

> 회원가입, 로그인, 로그인 했을 시 프로필 화면이 나오는 웹 사이트를 제작하였다.

### Skills

JS, PUG, MongoDB, Mongoose

### Router Layout

```
/ --> 로그인하지 않았을 경우 /login 화면, 로그인 했을 경우 Home 화면

/join --> 회원가입
/login --> 로그인
```

### Result

1. 회원가입, 로그인
![success](https://user-images.githubusercontent.com/86929961/202085572-c32db1c1-9972-44ec-a6fd-03bcec2a9c07.gif)

2. MongoDB 저장, password 암호화(해싱)
<img width="580" alt="mongodb" src="https://user-images.githubusercontent.com/86929961/202085589-4eb97d9b-8f19-46aa-b8e5-79e85c44d223.png">

3. Error (로그인, 존재하지 않은 사용자)
![errorNoUser](https://user-images.githubusercontent.com/86929961/202085620-c4fe5e7f-d5b9-4fd5-82fb-c4dc0fdee51b.gif)

4. Error (회원가입, 중복된 사용자)
![errorConfirmed](https://user-images.githubusercontent.com/86929961/202085748-67e8b02d-aa3e-44b3-9454-3593549beec1.gif)

5. Error (회원가입, 비밀번호가 잘못되었을 경우)
![errorConfirmed](https://user-images.githubusercontent.com/86929961/202085671-a72adc18-1d0c-4673-8a45-81a9f1a8ea48.gif)

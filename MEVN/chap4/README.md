## 4.2 pm으로 서버 관리
`npm i pm2` 로 pm2를 설치한다

pm2 실행
```
pm2 start 파일명
```

pm2로 관리하는 앱 표기
```
pm2 list
```

pm2로 관리하는 앱의 상태보기
```
pm2 monit ---
```

pm2로 시작한 앱 중단
```
pm2 stop <id or name>
```

pm2로 관리하는 앱 중단하고 삭제
```
pm2 delete <id or name>
```
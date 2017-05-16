
## 技术栈：

基于react + redux + scss + ES6/7 + webpack + fetch + react-router按需加载 + react-transform热替换 + webpack-dev-server + http-proxy-middleware的脚手架


## 下载

 	git clone https://github.com/wuchujiang/kit.git

 	cd kit

 	npm install	 


## 运行（nodejs 6.0+）
```
 npm run dev (正常编译模式) 

 npm run hot (热替换编译模式)

 访问 http://localhost:8088
  
 npm run dist （发布生产版本，对代码进行混淆压缩，提取公共代码，分离css文件）

```

## 项目目录
```
    │  app.jsx
    │
    ├─component
    │      index.js
    │
    ├─Config
    │      Config.js
    │      fastclick.js
    │      Tool.jsx
    │
    ├─container
    │  │  index.js
    │  │
    │  └─home
    │          index.jsx
    │
    ├─redux
    │  │  types.js
    │  │
    │  ├─action
    │  │      home.js
    │  │
    │  ├─reducer
    │  │      home.js
    │  │      Index.js
    │  │
    │  └─store
    │          index.js
    │
    ├─router
    │      index.js
    │
    └─template
            index.html
```


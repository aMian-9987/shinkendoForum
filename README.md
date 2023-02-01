# shinkendoForum
This full stack project created for USC official club website as a expansion which includes student information storage, display Markdown articles. The project consist of front stack with React frame. The backend stack was assemled by nginx and mySQL. 

Official Website: [Shinkendo](https://www.shinkendo.com/index.html), [USC Shinkendo](http://www-scf.usc.edu/~shinken/index.html)
                                 

## Installation: 
First initialize middle office then start front-end blog2 and back-end repo
#### Middle Office: service
```bash
cd service

# install instruction
npm i egg-init
npm install

yarn dev -p 7003  # start

# ! For local service, please config 【config.mysql】 in【service/config/config.default.js】
# ! If port 7003 is in use:
#       modify【config.security = {http://127.0.0.1:7003}】in【service/config/config.default.js】
#       Meanwhile, modify【let ipUrl = 'http://127.0.0.1:7003/default/';】in【blog/config/apiUrl.js】
```

#### Front-end: blog
```bash
cd blog 

# installation
yarn add @zeit/next-css
npm install react-icons --save  && npm install axios && npm install moment && npm install moment
yarn add antd, react-markdown, markdown-navbar, marked, highlight.js

yarn dev  # start

# ! For error【Module not found: Can't resolve 'antd/dist/antd.min.css'】:
#       replace【blog2/node_modules/antd/dist】as dist.zip files
# ！explore in http://localhost:3000/
```

## Functions

**Login**

![https://github.com/fantaome/shinkendoForum/blob/main/gif/login.gif?raw=true](https://github.com/fantaome/shinkendoForum/blob/main/gif/login.gif?raw=true)


**Add Comments**

![https://github.com/fantaome/shinkendoForum/blob/main/gif/comment.gif?raw=true](https://github.com/fantaome/shinkendoForum/blob/main/gif/comment.gif?raw=true)

**Header:** switch sections, display markdown articles, YouTube videos

![https://github.com/fantaome/shinkendoForum/blob/main/gif/header%20tags.gif?raw=true](https://github.com/fantaome/shinkendoForum/blob/main/gif/header%20tags.gif?raw=true)


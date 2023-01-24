# shinkendoForum
This full stack project created for USC official club website as a expansion which includes student information storage, display Markdown articles.
Official Website: http://www-scf.usc.edu/~shinken/index.html
                  http://www.shinkendo.com/bbs/index.html
                  
The project consist of front stack with React frame. The backend stack was assemled by nginx and mySQL. 
#### installation: first initialize middle office then start front-end and back-end repo
### middle office service

```bash
cd service  # 跳转到service目录

# install instruction
npm i egg-init
npm install

yarn dev -p 7003  # start

# ! 若在本地运行中台，请在【service/config/config.default.js】文件的【config.mysql】中配置
# ! 如果7003端口已被占用：
#       请在【service/config/config.default.js】文件中将【config.security = {http://127.0.0.1:7003}】更改为其他端口；
#       同时，在【blog/config/apiUrl.js】中，将【let ipUrl = 'http://127.0.0.1:7003/default/';】改为相应端口；
```

###Front-end blog2

```bash
cd blog2  # 

# installation
yarn add @zeit/next-css  # 支持css 
npm install react-icons --save  && npm install axios && npm install moment && npm install moment
yarn add antd, react-markdown, markdown-navbar, marked, highlight.js
# start
yarn dev  

```
# ! For error【Module not found: Can't resolve 'antd/dist/antd.min.css'】：
#       replace【blog2/node_modules/antd/dist】as dist.zip files
# ！explore in http://localhost:3000/

# shinkendoForum
This full stack project created for USC official club website as a expansion which includes student information storage, display Markdown articles. The project consist of front stack with React frame. The backend stack was assemled by nginx. 
the recent update would be blog function on login and video interaction

### 中台 service

```bash
cd service  # 跳转到service目录

# 安装包
npm i egg-init
npm install

yarn dev -p 7003  # 启动

# ! 若在本地运行中台，请在【service/config/config.default.js】文件的【config.mysql】中配置
# ! 如果7003端口已被占用：
#       请在【service/config/config.default.js】文件中将【config.security = {http://127.0.0.1:7003}】更改为其他端口；
#       同时，在【blog/config/apiUrl.js】中，将【let ipUrl = 'http://127.0.0.1:7003/default/';】改为相应端口；
```

### 前台 blog2

```bash
cd blog2  # 跳转到blog2目录

# 安装包
yarn add @zeit/next-css  # 支持css
npm install react-icons --save
npm install axios
yarn add antd
yarn add react-markdown
yarn add markdown-navbar
yarn add marked
yarn add highlight.js
npm install moment

yarn dev  # 启动

# ! 如果报错【Module not found: Can't resolve 'antd/dist/antd.min.css'】：
#       请将目录【blog2/node_modules/antd/dist】替换成本项目根目录中的dist.zip文件解压后的文件夹

# ！浏览器访问 http://localhost:3000/
```

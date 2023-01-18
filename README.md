# shinkendoForum
This full stack project created for USC official club website as a expansion which includes student information storage, display Markdown articles. The project consist of front stack with React frame. The backend stack was assemled by nginx. 
the recent update would be blog function on login and video interaction

### 中台 service

```bash
# 安装包
npm i egg-init
npm install

yarn dev -p 7003  # 启动

# 更改跨域端口：service/config/config.default.js
```

### 前台 blog2

```bash
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

## 如果报错【Module not found: Can't resolve 'antd/dist/antd.min.css'】
## 将目录【blog2/node_modules/antd/dist】更换为本项目根目录中的dist文件夹

# 浏览器访问 http://localhost:3000/
```

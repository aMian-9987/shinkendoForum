import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Pages/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
// ReactDOM.render(<Main />, document.getElementById('root'));  // 渲染 Main.js 下的 Main 函数

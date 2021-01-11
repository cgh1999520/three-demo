import React from 'react';
import ReactDOM from 'react-dom';
import Demo01 from "./views/Demo01";
import './styles/index.less'
import Demo02 from "./views/Demo02";

ReactDOM.render(
  <React.StrictMode>
      <Demo01/> {/* 渲染普通的旋转多变体，官网例子*/}
      <Demo02/> {/* 渲染小娃 obj 模型*/}
  </React.StrictMode>,
  document.getElementById('root')
);

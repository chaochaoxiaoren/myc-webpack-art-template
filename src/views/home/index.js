import axios from 'axios';
import './index.css';
import style from './index.module.css';
import '../../iconfont/iconfont.css';
import '../../iconfont/iconfont.js';

// 创建app元素
const app = document.createElement('div');
app.className='app';

// 创建模块css指定的元素
const ele = document.createElement('div');
ele.className=style.container;

// iconfont
const icon = document.createElement('i');
icon.className='iconfont icon-mycpersonnel';

document.body.appendChild(app);
document.body.appendChild(ele);
document.body.appendChild(icon);
console.log('home');

axios.get('/api/banner').then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
})

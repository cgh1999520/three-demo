import React from 'react'
import {Link} from "react-router-dom";

export default class Home extends React.Component {
    render() {
        return <div>
            <ul className="demo-nav-box">
                <li>
                    <Link to="/demo1">示例1 (渲染普通的旋转多变体，官网例子)</Link>
                </li>
                <li>
                    <Link to="/demo2">示例2 ( 渲染远程风车 obj 模型)</Link>
                </li>
                <li>
                    <Link to="/demo3">示例3 (渲染本地飞机 obj 模型 并添加场景颜色)</Link>
                </li>
            </ul>
        </div>
    }
}

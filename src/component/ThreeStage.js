import React, {useState} from 'react'
import {v5} from 'uuid'
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
export default class ThreeStage extends React.Component {

    constructor(props) {
        super(props);
        // 初始化画布ID
        this.canvasId = "__three_canvas_box_" + v5
    }

    componentDidMount() {
        // 添加元素
        const canvas = document.getElementById(this.canvasId)

        // 创建一个渲染器
        this.renderer = new THREE.WebGLRenderer({canvas});
        this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);

        // 新建一个场景及相机， 场景作为添加内容桥梁， 不同的场景可能存在多个”相机“
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(60, 1);
        this.camera.position.set(10, 10, 10);

        // 创建控制器，使可以旋转拖拽缩放
        const controls = new OrbitControls(this.camera, canvas);
        controls.target.set(0, 2, 0);
        controls.update();
    }

    render() {
        return <canvas id={this.canvasId}  className="three-canvas-box"/>
    }

}

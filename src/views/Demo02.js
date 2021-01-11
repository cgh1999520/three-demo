import React from 'react';
import * as THREE from 'three'
import {OBJLoader2} from "three/examples/jsm/loaders/OBJLoader2";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

export default class Demo02 extends React.Component {
    componentDidMount() {
        // 添加元素
        const demo02Box = document.getElementById('demo02-box')
        // 创建一个渲染器
        this.renderer = new THREE.WebGLRenderer({canvas: demo02Box});
        this.renderer.setSize(demo02Box.clientWidth, demo02Box.clientHeight);

        // 新建一个场景及相机， 场景作为添加内容桥梁， 不同的场景可能存在多个”相机“
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(100, 2, 0.1, 100);
        this.camera.position.set(20, 60, 10);

        // 创建控制器，使可以旋转拖拽缩放
        const controls = new OrbitControls(this.camera, demo02Box);
        controls.target.set(0, 5, 0);
        controls.update();

        //  给场景添加颜色
        const light = new THREE.HemisphereLight('#999999', '#333333', 1);
        this.scene.add(light);

        const light1 = new THREE.DirectionalLight('#666666', 1);
        light1.position.set(0, 0, 0);
        light1.target.position.set(-5, 0, 0);
        this.scene.add(light1);
        this.scene.add(light1.target);

        // 加载 obj 模型
        const objLoader = new OBJLoader2();
        objLoader.load('/model/obj1/1.obj', (root) => {
            this.scene.add(root);
        });

        // 初始化动画
        this.addAnimation = this.addAnimation.bind(this)
        this.addAnimation();
    }

    /**
     * @description: 添加动画
     * @date 2021/1/11
     */
    addAnimation() {
        requestAnimationFrame(this.addAnimation)
        this.renderer.render(this.scene, this.camera)
    }
    render() {
        return <canvas id="demo02-box"/>
    }
}
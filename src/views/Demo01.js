import React from 'react';
import * as THREE from 'three'
import '../styles/demo01.less'

export default class Demo01 extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(query) {
        super(query);
    }

    componentDidMount() {
        // 创建一个渲染器
        this.renderer = new THREE.WebGLRenderer();
        // 添加元素
        const demo01Box = document.getElementById('demo01-box')
        this.renderer.setSize(demo01Box.clientWidth, demo01Box.clientHeight);
        demo01Box.appendChild(this.renderer.domElement)

        // 新建一个场景及相机， 场景作为添加内容桥梁， 不同的场景可能存在多个”相机“
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, demo01Box.clientWidth / demo01Box.clientHeight, 0.1, 1000);
        // 设置立方体容器及参数配置
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        const cube = new THREE.Mesh(geometry, material);
        // 给场景添加内容。
        this.scene.add(cube);
        this.camera.position.z = 5;
        // 把相机及场景渲染至渲染器上
        this.renderer.render(this.scene, this.camera);
    }

    render() {
        return <div id="demo01-box"></div>
    }
}
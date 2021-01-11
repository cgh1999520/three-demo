import React from 'react';
import * as THREE from 'three'
import '../styles/demo01.less'

export default class Demo01 extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(query) {
        super(query);
    }

    componentDidMount() {
        this.renderer = new THREE.WebGLRenderer();
        // 添加元素
        const demo01Box = document.getElementById('demo01-box')
        this.renderer.setSize(demo01Box.clientWidth, demo01Box.clientHeight);
        demo01Box.appendChild(this.renderer.domElement)


        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, demo01Box.clientWidth / demo01Box.clientHeight, 0.1, 1000);
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        const cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);
        this.camera.position.z = 5;
        this.renderer.render(this.scene, this.camera);
    }

    render() {
        return <div id="demo01-box"></div>
    }
}
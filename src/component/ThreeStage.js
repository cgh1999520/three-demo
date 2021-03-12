import React from 'react'
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
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.outputEncoding = THREE.sRGBEncoding;

        // 设置背景色
        this.renderer.setClearColor('rgb(135,206,250)',1.0);
        this.renderer.setClearColor("#f5eeee",1.0);

        // 新建一个场景及相机， 场景作为添加内容桥梁， 不同的场景可能存在多个”相机“
        this.scene = new THREE.Scene();
        //  给场景添加颜色
        this.scene.add(new THREE.HemisphereLight('#999999', '#333333', 1));
        this.scene.add(new THREE.DirectionalLight('#666666', 1));

        this.camera = new THREE.PerspectiveCamera(16, canvas.clientWidth / canvas.clientHeight,1, 1000);
        this.camera.position.set(160, 40, 10);

        let material = new THREE.MeshPhongMaterial( { color: "#f5eeee", dithering: true } );
        let geometry = new THREE.PlaneGeometry( 2000, 2000 );
        let mesh = new THREE.Mesh( geometry, material );
        mesh.position.set( 0, - 1, 0 );
        mesh.rotation.x = - Math.PI * 0.5;
        mesh.receiveShadow = true;
        this.scene.add( mesh );

        // 创建控制器，使可以旋转拖拽缩放
        const controls = new OrbitControls(this.camera, canvas);
        controls.target.set(0, 2, 0);
        controls.minDistance = 20;
        controls.maxDistance = 500;
        controls.enablePan = false;
        controls.update();

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
        this.renderer.render(this.scene, this.camera);
    }

    render() {
        return <canvas id={this.canvasId} className="three-canvas-box"/>
    }

}

import React from 'react';
import * as THREE from 'three'
import {OBJLoader2} from "three/examples/jsm/loaders/OBJLoader2";
import ThreeStage from "../component/ThreeStage";

export default class Demo02 extends React.Component {
    constructor(props) {
        super(props);
        this.threeStage = React.createRef()
    }

    componentDidMount() {
        const threeStage = this.threeStage.current;

        //  给场景添加颜色
        threeStage.scene.add(new THREE.HemisphereLight('#999999', '#333333', 1));
        threeStage.scene.add(new THREE.DirectionalLight('#666666', 1));
        threeStage.scene.add(new THREE.LineBasicMaterial({
            color: 0xffffff,
            linewidth: 1,
            linecap: 'round', //ignored by WebGLRenderer
            linejoin: 'round' //ignored by WebGLRenderer
        }))

        // 加载 obj 模型
        const objLoader = new OBJLoader2();
        objLoader.load('/model/obj1/1.obj', (root) => {
            threeStage.scene.add(root);
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
        const threeStage = this.threeStage.current;
        requestAnimationFrame(this.addAnimation)
        threeStage.renderer.render(threeStage.scene, threeStage.camera)
    }

    render() {
        return <ThreeStage ref={this.threeStage}/>
    }
}

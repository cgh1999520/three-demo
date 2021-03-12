import React from 'react';
import * as THREE from 'three'
import {OBJLoader2} from "three/examples/jsm/loaders/OBJLoader2";
import ThreeStage from "../component/ThreeStage";

export default class Demo03 extends React.Component {

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

        // 添加环境光
        threeStage.scene.add(new THREE.AmbientLight("#red"));
    }

    render() {
        return <ThreeStage ref={this.threeStage}/>
    }
}

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
        // 加载 obj 模型
        const objLoader = new OBJLoader2();
        objLoader.load('/model/obj1/1.obj', (root) => {
            threeStage.scene.add(root);
            // 白色聚光灯从侧面发光，投射阴影
            var spotLight = new THREE.SpotLight("red");
            spotLight.position.set(100, 1000, 100);

            spotLight.castShadow = true;

            spotLight.shadow.mapSize.width = 1024;
            spotLight.shadow.mapSize.height = 1024;

            spotLight.shadow.camera.near = 500;
            spotLight.shadow.camera.far = 4000;
            spotLight.shadow.camera.fov = 30;

            threeStage.scene.add(spotLight);
        });
    }

    render() {
        return <ThreeStage ref={this.threeStage}/>
    }
}

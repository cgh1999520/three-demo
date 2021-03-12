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
        });
    }

    render() {
        return <ThreeStage ref={this.threeStage}/>
    }
}

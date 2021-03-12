import React from 'react';
import * as THREE from 'three'
import ThreeStage from "../component/ThreeStage";

export default class Demo01 extends React.Component {
    constructor(props) {
        super(props);
        this.threeStage = React.createRef()
    }

    componentDidMount() {
        const threeStage = this.threeStage.current;

        // 设置立方体容器及参数配置
        const geometry = new THREE.BoxGeometry(10,10,10);
        const material = new THREE.MeshBasicMaterial({color: '#666666'});
        this.cube = new THREE.Mesh(geometry, material);
        this.cube.position.set(0,10,0)
        this.cube.castShadow = true;

        // 给场景添加内容。
        threeStage.scene.add(this.cube);

        // 把相机及场景渲染至渲染器上
        threeStage.renderer.render(threeStage.scene, threeStage.camera);

        this.addAnimation = this.addAnimation.bind(this)
        this.addAnimation();
    }

    /**
     * @description: 添加动画
     * @date 2021/1/11
     */
    addAnimation() {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        requestAnimationFrame(this.addAnimation)
    }

    render() {
        return <ThreeStage
            animationBackcall={this.addAnimation}
            ref={this.threeStage}/>
    }
}

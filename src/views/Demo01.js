import React from 'react';
import * as THREE from 'three'
import ThreeStage from "../component/ThreeStage";

export default class Demo01 extends React.Component {
    componentDidMount() {
        this.threeStage = this.refs.threeStage;
        const threeStage = this.threeStage;

        // 设置立方体容器及参数配置
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({color: '#666666'});


        this.cube = new THREE.Mesh(geometry, material);
        // 给场景添加内容。
        threeStage.scene.add( this.cube);
        threeStage.camera.position.z = 2;
        // 把相机及场景渲染至渲染器上
        threeStage.renderer.render(threeStage.scene, threeStage.camera);

        // 初始化动画
        this.addAnimation = this.addAnimation.bind(this)
        this.addAnimation();
    }

    /**
     * @description: 添加动画
     * @date 2021/1/11
     */
    addAnimation() {
        const threeStage = this.threeStage;
        requestAnimationFrame(this.addAnimation)
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        threeStage.renderer.render(threeStage.scene, threeStage.camera);
    }

    render() {
        return <ThreeStage ref="threeStage"/>
    }
}

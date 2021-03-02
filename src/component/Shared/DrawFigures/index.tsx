import React, {
	FC,
	useEffect,
	useRef,
} from "react";
import { useSelector } from 'react-redux';
import * as THREE from 'three';
import {DragControls} from "three/examples/jsm/controls/DragControls";
import {getFigures, getScene} from "../../../store/core/selector";

import styles from './styles.module.scss';

const DrawFigures: FC = () => {
	const figures: any = useSelector(getFigures) || [];
	const scene: any = useSelector(getScene);
	const mount: any = useRef(null);
	let renderer: any = undefined;
	let camera: any = undefined;
	// let requestID: any = undefined;

	const randomInteger = (min: number, max: number) => {
		let rand = min + Math.random() * (max + 1 - min);
		return Math.floor(rand);
	}

	useEffect(()=> {
		sceneSetup();
		addCube();
		startAnimationLoop();
	}, [figures])

	const sceneSetup = () => {
		const width = mount.current.clientWidth;
		const height = mount.current.clientHeight;
		camera = new THREE.PerspectiveCamera(75, width/height);
		camera.position.z = 10;
		renderer = new THREE.WebGLRenderer({antialias:true});
		renderer.setSize( width, height );
		renderer.setClearColor(0xFFFFFF, 1);
		mount.current.appendChild( renderer.domElement );
	};

	const addCube = () => {
		if (figures.length > 0) {
			let count = -5;
			for (let i = 0; i < figures.length; ++i) {
				figures[i].position.x = count;
				count += 2;
			}
			figures.forEach((c: any) => scene.add(c))
		}
	};

	const startAnimationLoop = () => {
		if (figures.length > 0 && scene) {
			const controls = new DragControls(figures, camera, mount.current);
			const animate = function () {
				window.requestAnimationFrame(animate)
				// figures.forEach((c: any, i: any) => figures[i].rotation.x += 0.015)
				renderer.render( scene, camera );
			};
			animate()
		}
	};

	return <div className={styles.main} ref={mount}/>;
}

export default DrawFigures;
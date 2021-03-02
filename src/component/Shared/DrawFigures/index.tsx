import React, {
	FC,
	useEffect,
	useRef,
} from "react";
import { useSelector } from 'react-redux';
import * as THREE from 'three';
import {DragControls} from "three/examples/jsm/controls/DragControls";

import {
	getFigures,
	getScene,
	getMove,
} from "../../../store/core/selector";

import styles from './styles.module.scss';

const DrawFigures: FC = () => {
	const figures: any = useSelector(getFigures) || [];
	const isMove: any = useSelector(getMove);

	const scene: any = useSelector(getScene);
	const mount: any = useRef(null);
	console.log('===>figures', figures);
	let renderer: any = undefined;
	let camera: any = undefined;
	// let requestID: any = undefined;

	useEffect(()=> {
		sceneSetup();
		addFigures();
		startAnimationLoop();
	}, [figures])

	const sceneSetup = () => {
		const width = mount.current.clientWidth;
		const height = mount.current.clientHeight;
		camera = new THREE.PerspectiveCamera(75, width/height);
		camera.position.z = 25;
		renderer = new THREE.WebGLRenderer({antialias:true});
		renderer.setSize( width, height );
		renderer.setClearColor(0xFFFFFF, 1);
		if(figures.length === 0) {
			mount.current.appendChild( renderer.domElement );
		}
	};

	const addFigures = () => {
		if (figures.length > 0) {
			let count = -5;
			for (let i = 0; i < figures.length; ++i) {
				figures[i].position.x = count;
				count += 5;
			}
			figures.forEach((c: any) => scene.add(c))
		}
	};

	const startAnimationLoop = () => {
		if (scene) {
			const controls = new DragControls(figures, camera, mount.current);
			controls.addEventListener( 'dragstart', function ( event ) {
				event.object.material.emissive.set( 0xaaaaaa );
				console.log('===>event.object', event.object);
			} );

			const animate = function () {
				window.requestAnimationFrame(animate)
				renderer.render( scene, camera );
			};
			animate()
		}
	};

	return <div className={styles.main} ref={mount}/>;
}

export default DrawFigures;
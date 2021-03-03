import React, {
	FC,
	useEffect,
	useRef,
} from "react";
import {useDispatch, useSelector} from 'react-redux';
import * as THREE from 'three';
import { DragControls } from "three/examples/jsm/controls/DragControls";

import {
	getFigures,
	getScene,
	getMove,
	getRotate,
} from "../../../store/core/selector";
import {selectFigure} from "../../../store/core/actions";

import styles from './styles.module.scss';

const DrawFigures: FC = () => {
	const dispatch = useDispatch();
	const figures: any = useSelector(getFigures) || [];
	const scene: any = useSelector(getScene);
	const mount: any = useRef(null);
	let renderer: any = undefined;
	let camera: any = undefined;
	const rotate: any = useSelector(getRotate);
	const move: any = useSelector(getMove);
	console.log('===>move', rotate);

	useEffect(()=> {
		sceneSetup();
		addFigures();
		startAnimationLoop();
	}, [figures, move, rotate])

	const sceneSetup = () => {
		const width = mount.current.clientWidth;
		const height = mount.current.clientHeight;
		camera = new THREE.PerspectiveCamera(75, width/height);
		camera.position.x = 0;
		camera.position.y = 0;
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
			let count = -13;
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
			controls.deactivate()
			if (move) {
				controls.activate()
			}
			controls.addEventListener( 'dragstart', function ( event ) {
					dispatch(selectFigure(event.object));
			});

			const animate = function () {
				if (rotate) {
					figures.forEach((item: any)=>{
						item.rotation.z += 0.01;
					})
				} else {
					figures.forEach((item: any)=>{
						item.rotation.z += 0;
					})
				}
				window.requestAnimationFrame(animate)
				renderer.render( scene, camera );
			};
			animate()
		}
	};

	return <div className={styles.main} ref={mount}/>;
}

export default DrawFigures;
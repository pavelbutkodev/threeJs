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
	getSelectFigure,
} from "../../../store/core/selector";
import { selectFigure } from "../../../store/core/actions";

import styles from './styles.module.scss';

const DrawFigures: FC = () => {
	const dispatch = useDispatch();
	const figures: any = useSelector(getFigures) || [];
	const figure: any = useSelector(getSelectFigure);
	const scene: any = useSelector(getScene);
	const mount: any = useRef(null);
	let renderer: any = undefined;
	let camera: any = undefined;
	const rotate: any = useSelector(getRotate);
	const move: any = useSelector(getMove);
	let cubes: any = undefined;

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
		const triangle = new THREE.Shape();
		triangle.moveTo(0, 0);
		triangle.lineTo(2, -2);
		triangle.lineTo(-2, -2);
		triangle.lineTo(-2, 2);
		const geometry = new THREE.ShapeGeometry(triangle, 11);
		const material = [
			new THREE.MeshPhongMaterial({ color: 0xff0000, transparent: true }),
		];
		cubes = [
			new THREE.Mesh(geometry, material[0]),
		];
		cubes[0].position.x = -3;
		cubes.forEach((c: any) => scene.add(c));
		// if (figures.length > 0) {
		// 	let count = -13;
		// 	for (let i = 0; i < figures.length; ++i) {
		// 		figures[i].position.x = count;
		// 		count += 5;
		// 	}
		// 	figures.forEach((c: any) => scene.add(c))
		// }
	};
	const startAnimationLoop = () => {
		if (scene) {
			console.log('===>rotate', rotate);
			if (rotate) {
				window.addEventListener('keydown', event => {
					if (event.keyCode === 39) {
						cubes[0].rotation.z += 0.5
					} else if (event.keyCode === 37) {
						cubes[0].rotation.z -= 0.5
					}
				})
			}

			const controls = new DragControls(cubes, camera, mount.current);
			controls.addEventListener('dragstart', function (event) {
	      event.object.material.opacity = 0.33
			})
			controls.addEventListener('dragend', function (event) {
				event.object.material.opacity = 1
			})
			controls.addEventListener( 'hoveron', function ( event ) {
				dispatch(selectFigure(event.object, true));
			});

			controls.addEventListener( 'hoveroff', function ( event ) {
				dispatch(selectFigure(event.object, false));
			});
			// controls.deactivate()
			if (move) {
				controls.activate()
			}

			// controls.addEventListener( 'dragstart', function ( event ) {
			// 		dispatch(selectFigure(event.object));
			// });

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
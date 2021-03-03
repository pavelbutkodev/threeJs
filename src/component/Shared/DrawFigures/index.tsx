import React, {
	FC,
	useEffect,
	useRef,
} from "react";
import {useDispatch, useSelector} from 'react-redux';
import * as THREE from 'three';
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import {
	getFigures,
	getScene,
	getCursor,
	getMove,
} from "../../../store/core/selector";
import {selectFigure} from "../../../store/core/actions";

import styles from './styles.module.scss';

const DrawFigures: FC = () => {
	const dispatch = useDispatch();
	const figures: any = useSelector(getFigures) || [];
	console.log('===>figures', figures);

	const scene: any = useSelector(getScene);
	const mount: any = useRef(null);
	let renderer: any = undefined;
	let camera: any = undefined;
	const cursor: any = useSelector(getCursor);
	const move: any = useSelector(getMove);

	let INTERSECTED: any = undefined;
	let raycaster: any = new THREE.Raycaster();
	const mouse = new THREE.Vector2();

	useEffect(()=> {
		sceneSetup();
		addFigures();
		startAnimationLoop();

	}, [figures, cursor, move])

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
			// const controlsScene = new OrbitControls( camera, mount.current);
			controls.deactivate()
			if (move) {
				controls.activate()
			}
			controls.addEventListener( 'dragstart', function ( event ) {
					dispatch(selectFigure(event.object));
			});


			raycaster.setFromCamera( mouse, camera );
			const intersects = raycaster.intersectObjects( scene.children );
			console.log('===>', intersects);
			const onDocumentMouseMove = (event: any) => {
				event.preventDefault();
				mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
				mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
			};

			if ( intersects.length > 0 ) {
				if ( INTERSECTED !== intersects[ 0 ].object ) {
					if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
					INTERSECTED = intersects[ 0 ].object;
					console.log('===>', INTERSECTED);
				}

			} else {
				if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
				INTERSECTED = null;
			}
			document.addEventListener( 'mousemove', onDocumentMouseMove );
			// controls.addEventListener( 'hoveron', function ( event ) {
			// 	console.log('===>event.object', event);
			// 	event.object.material.emissive.set( 0x000000 );
			// });

			// controls.addEventListener( 'hoveroff', function ( event ) {
			// 	event.object.material.emissive.set( 0x727272 );
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
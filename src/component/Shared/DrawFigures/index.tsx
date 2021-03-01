import React, { Component } from "react";
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

import styles from './styles.module.scss';

class AppTest extends Component {
	private mount: any;
	private scene: any;
	private camera: any;
	private renderer: any;
	private controls: any;
	private cube: any;
	private torus: any;
	private requestID: any;
	private cone: any;

	componentDidMount() {
		//mount-div
		this.sceneSetup();
		this.addCube();
		this.addCircle();
		this.addConus();
		this.startAnimationLoop();
	}

	sceneSetup = () => {
		const width = this.mount.clientWidth;
		const height = this.mount.clientHeight;

		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(70, width/height);
		this.camera.position.z = 100;
		this.controls = new OrbitControls( this.camera, this.mount );
		this.renderer = new THREE.WebGLRenderer({antialias:true});
		this.renderer.setSize( width, height );
		this.renderer.setClearColor(0xFFFFFF, 1);
		this.mount.appendChild( this.renderer.domElement );
	};

	addCube = () => {
		const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
		const basicMaterial = new THREE.MeshBasicMaterial({color: 0x5B5B5B});
		this.cube = new THREE.Mesh(boxGeometry, basicMaterial);
		this.scene.add(this.cube);
	};

	addCircle = () => {
		const torusGeometry = new THREE.SphereGeometry( 5, 16, 16 );
		const material = new THREE.MeshBasicMaterial( {color: 0x5B5B5B} );
		this.torus = new THREE.Mesh(torusGeometry, material);
		this.scene.add(this.torus);
	}

	addConus = () => {
		const geometry = new THREE.ConeGeometry( 5, 20, 32 );
		const material = new THREE.MeshBasicMaterial( {color: 0x5B5B5B} );
		this.cone = new THREE.Mesh( geometry, material );
		this.scene.add( this.cone );
	}

	startAnimationLoop = () => {
		this.cube.position.x = -25;
		this.torus.position.x = 25;
		this.renderer.render( this.scene, this.camera );
		this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
	};

	render() {
		return <div className={styles.main} ref={ref => (this.mount = ref)} />;
	}
}

export default AppTest;

// const DrawFigures: FC = () => {
//
// 	const [mount, setMount] = useState();
//
// 	useEffect(()=> {
// 		sceneSetup();
// 		addCube();
// 		addConus();
// 		addCircle();
// 		startAnimationLoop();
// 	}, [])
//
// 	const sceneSetup = () => {
// 		const width = this.mount.clientWidth;
// 		const height = this.mount.clientHeight;
//
// 		const scene = new THREE.Scene();
// 		const camera = new THREE.PerspectiveCamera(70, width/height);
// 		camera.position.z = 50;
// 		const controls = new OrbitControls( this.camera, this.mount );
// 		const renderer = new THREE.WebGLRenderer({antialias:true});
// 		renderer.setSize( width, height );
// 		renderer.setClearColor(0xFFFFFF, 1);
// 		this.mount.appendChild( this.renderer.domElement );
// 	};
//
// 	const addCube = () => {
// 		const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
// 		const basicMaterial = new THREE.MeshBasicMaterial({color: 0x5B5B5B});
// 		const cube = new THREE.Mesh(boxGeometry, basicMaterial);
// 		scene.add(this.cube);
// 	};
//
// 	const addCircle = () => {
// 		const torusGeometry = new THREE.SphereGeometry( 5, 16, 16 );
// 		const material = new THREE.MeshBasicMaterial( {color: 0x5B5B5B} );
// 		const torus = new THREE.Mesh(torusGeometry, material);
// 		scene.add(this.torus);
// 	}
//
// 	const addConus = () => {
// 		const geometry = new THREE.ConeGeometry( 5, 20, 32 );
// 		const material = new THREE.MeshBasicMaterial( {color: 0x5B5B5B} );
// 		const cone = new THREE.Mesh( geometry, material );
// 		scene.add( cone );
// 	}
//
// 	const startAnimationLoop = () => {
// 		cube.position.x = -25;
// 		torus.position.x = 25;
// 		renderer.render( this.scene, this.camera );
// 		const requestID = window.requestAnimationFrame(this.startAnimationLoop);
// 	};
//
// 	return <div style={style} ref={ref => (this.mount = ref)} />;
// }
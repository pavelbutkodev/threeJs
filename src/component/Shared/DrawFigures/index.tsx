import React, {
  FC,
  useEffect,
  useRef,
} from "react";
import {useDispatch, useSelector} from 'react-redux';
import * as THREE from 'three';
import {DragControls} from "three/examples/jsm/controls/DragControls";
import {Camera, Mesh, Scene, WebGLRenderer} from "three";

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
  const figures: Mesh[] = useSelector(getFigures) || [];
  const scene: Scene = useSelector(getScene);
  const rotate: Boolean = useSelector(getRotate);
  const move: Boolean = useSelector(getMove);

  const mount = useRef<HTMLDivElement>(null);

  let renderer: WebGLRenderer | undefined = undefined;
  let camera: Camera| undefined = undefined;


  useEffect(() => {
    sceneSetup();
    addFigures();
    startAnimationLoop();
  }, [figures, move, rotate])

  const sceneSetup = () => {
    if(mount && mount.current) {
      const width = mount.current.clientWidth;
      const height = mount.current.clientHeight;
      camera = new THREE.PerspectiveCamera(75, width / height);
      camera.position.x = 0;
      camera.position.y = 0;
      camera.position.z = 25;
      renderer = new THREE.WebGLRenderer({antialias: true});
      renderer.setSize(width, height);
      renderer.setClearColor(0xFFFFFF, 1);
      if (figures && figures.length < 1) {
        mount.current.appendChild(renderer.domElement);
      }
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
    if (scene && camera && mount && mount.current) {
      const controls = new DragControls(figures, camera, mount.current);
      controls.deactivate()
      if (move) {
        controls.activate()
      }
      controls.addEventListener('dragstart', function (event) {
        dispatch(selectFigure(event.object));
      });

      const animate = function () {
        if (rotate) {
          figures.forEach((item: any) => {
            item.rotation.z += 0.01;
          })
        } else {
          figures.forEach((item: any) => {
            item.rotation.z += 0;
          })
        }
        window.requestAnimationFrame(animate)
        renderer && camera && renderer.render(scene, camera);
      };
      animate()
    }
  };

  return <div className={styles.main} ref={mount}/>;
}

export default DrawFigures;

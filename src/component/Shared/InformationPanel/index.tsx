import React, { FC } from 'react';

import {useSelector} from "react-redux";
import {getSelectFigure} from "../../../store/core/selector";

import styles from './styles.module.scss';

const InformationPanel: FC = () => {
  const selectFigure:any = useSelector(getSelectFigure);
  if (selectFigure) {
    return (
      <div className={selectFigure ? styles.container + ' ' + styles.active : styles.container}>
        <p>Polygon type:
          {
            selectFigure.geometry.parameters.curveSegments === 12
              ? <span>Square</span>
              : selectFigure.geometry.parameters.curveSegments === 50
              ? <span>Circle</span>
              : selectFigure.geometry.parameters.curveSegments === 11
                ? <span>Triangle</span> :
                ''}
        </p>
        <p>Rotation:
          <span>z: {selectFigure.rotation._z.toFixed(2)}</span>
        </p>
        <p>Position:
          <span>x: {selectFigure.position.x.toFixed(2)}</span>
          <span>y: {selectFigure.position.y.toFixed(2)}</span>
          <span>z: {selectFigure.position.z.toFixed(2)}</span>
        </p>
        <p>Color:
          <span>r: {selectFigure.material.emissive.r.toFixed(2)}</span>
          <span>g: {selectFigure.material.emissive.g.toFixed(2)}</span>
          <span>b: {selectFigure.material.emissive.b.toFixed(2)}</span>
        </p>
      </div>
    );
  }
  return (
    <div className={styles.container}/>
  );
}

export default InformationPanel;

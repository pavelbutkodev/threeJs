import React, {
	FC,
} from 'react';

import {useSelector} from "react-redux";
import {getSelectFigure} from "../../../store/core/selector";

import styles from './styles.module.scss';


const InformationPanel: FC = () => {
	const show = useSelector(getSelectFigure);
	if (show && show.flag) {
		return (
			<div className={show.figure ? styles.container + ' ' + styles.active : styles.container}>
				<p>Polygon type:
							{
								show.figure.geometry.parameters.curveSegments === 12
								? <span>Square</span>
								: show.figure.geometry.parameters.curveSegments === 50
								? <span>Circle</span>
								: show.figure.geometry.parameters.curveSegments === 11
								? <span>Triangle</span> :
									''}
				</p>
				<p>Rotation:
					<span>z: {show.figure.rotation._z.toFixed(2)}</span>
				</p>
				<p>Position:
					<span>x: {show.figure.position.x.toFixed(2)}</span>
					<span>y: {show.figure.position.y.toFixed(2)}</span>
				</p>
				<p>Color:
					<span>r: {show.figure.material.emissive.r.toFixed(0)}</span>
					<span>g: {show.figure.material.emissive.g.toFixed(0)}</span>
					<span>b: {show.figure.material.emissive.b.toFixed(0)}</span>
				</p>
			</div>
		);
	}
	return (
		<div className={styles.container} />
	);
}

export default InformationPanel;

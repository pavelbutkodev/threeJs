import React, {
	FC,
} from 'react';

import styles from './styles.module.scss';

// import {
// 	IInformationFigure
// } from "./types";

const defaultState = {
	type: 'Circle',
	radius: '20px',
	position: 'x20 y20',
	rotation: '20deg',
	color: 'red',
}

const InformationPanel: FC = () => {
	return (
		<div className={styles.container}>
			<p>Polygon type: <span>{defaultState.type}</span></p>
			<p>Radius: <span>{defaultState.radius}</span></p>
			<p>Position: <span>{defaultState.position}</span></p>
			<p>Rotation: <span>{defaultState.rotation}</span></p>
			<p>Color: <span>{defaultState.color}</span></p>
		</div>
	);
}

export default InformationPanel;

import React, {
	FC,
} from 'react';

import styles from './styles.module.scss';

// import {
// 	IInformationFigure
// } from "./types";
//
// const defaultState = {
// 	type: 'Circle',
// 	radius: '20px',
// 	position: 'x20 y20',
// 	rotation: '20deg',
// 	color: 'red',
// }

const InformationPanel: FC = () => {
	return (
		<div className={styles.container}>
			Info
		</div>
	);
}

export default InformationPanel;

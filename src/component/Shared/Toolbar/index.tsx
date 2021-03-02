import React, {
	FC,
} from 'react';
import { useDispatch } from 'react-redux';

import {
	addCubes,
	addCircle,
	addTriangle,
	changeMoveFlag,
	changeRotateFlag,
} from "../../../store/core/actions";

import styles from './styles.module.scss';
import cursor from '../../../assets/image/cursor.png';
import movetool from '../../../assets/image/movetoolarrows.png';
import reload from '../../../assets/image/reload.png';
import circle from '../../../assets/image/circle.png';
import square from '../../../assets/image/square.png';
import triangle from '../../../assets/image/triangle.png';

const Toolbar: FC = () => {
	const dispatch = useDispatch();
	const addToSquare = () => {
		dispatch(addCubes());
	}

	const addToCircle = () => {
		dispatch(addCircle());
	}

	const addToTriangle = () => {
		dispatch(addTriangle());
	}

	const isMove = () => {
		dispatch(changeMoveFlag());
	}

	const isRotate = () => {
		dispatch(changeRotateFlag());
	}

	return (
		<div className={styles.container}>
			<ul>
				<li>
					<img
						className={styles.img}
						src={cursor}
						alt="cursor"
					/>
				</li>
				<li>
					<img
						className={styles.img}
						src={movetool}
						alt="movetool"
						onClick={isMove}
					/>
				</li>
				<li>
					<img
						className={styles.img}
						src={reload}
						alt="reload"
					/>
				</li>
			</ul>

			<ul>
				<li>
					<img
						className={styles.img}
						src={square}
						alt="square"
						onClick={addToSquare}
					/>
				</li>
				<li>
					<img
						className={styles.img}
						src={circle}
						alt="circle"
						onClick={addToCircle}
					/>
				</li>
				<li>
					<img
						className={styles.img}
						src={triangle}
						alt="triangle"
						onClick={addToTriangle}
					/>
				</li>
			</ul>
		</div>
	);
}

export default Toolbar;

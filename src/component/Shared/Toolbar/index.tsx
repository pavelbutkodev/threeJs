import React, {
	FC,
} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
	addCubes,
	addCircle,
	addTriangle,
	changeMoveFlag,
	changeRotateFlag,
	changeCursorFlag,
} from "../../../store/core/actions";
import {getCursor, getFigures, getMove, getRotate} from "../../../store/core/selector";

import styles from './styles.module.scss';
import cursor from '../../../assets/image/cursor.png';
import movetool from '../../../assets/image/movetoolarrows.png';
import reload from '../../../assets/image/reload.png';
import circle from '../../../assets/image/circle.png';
import square from '../../../assets/image/square.png';
import triangle from '../../../assets/image/triangle.png';

const Toolbar: FC = () => {
	const dispatch = useDispatch();
	const figures = useSelector(getFigures);
	const curs = useSelector(getCursor);
	const move = useSelector(getMove);
	const rotate = useSelector(getRotate);

	const addToSquare = () => {
		if (figures.length < 6) {
			dispatch(addCubes())
		}
	}

	const addToCircle = () => {
		if (figures.length < 6) dispatch(addCircle());
	}

	const addToTriangle = () => {
		if (figures.length < 6) dispatch(addTriangle());
	}


	const isMove = () => {
		if (figures.length > 0) {
			dispatch(changeMoveFlag());
		}
	}

	const isRotate = () => {
		if (figures.length > 0) {
			dispatch(changeRotateFlag());
		}
	}

	const isCursor = () => {
		dispatch(changeCursorFlag());
	}

	return (
		<div className={styles.container}>
			<ul>
				<li>
					<img
						className={curs ? styles.icon + ' ' + styles.active : styles.icon}
						src={cursor}
						alt="cursor"
						onClick={isCursor}
					/>
				</li>
				<li>
					<img
						className={move ? styles.icon + ' ' + styles.active : styles.icon}
						src={movetool}
						alt="movetool"
						onClick={isMove}
					/>
				</li>
				<li>
					<img
						className={rotate ? styles.icon + ' ' + styles.active : styles.icon}
						src={reload}
						alt="reload"
						onClick={isRotate}
					/>
				</li>
			</ul>

			<ul>
				<li>
					<img
						className={styles.icon}
						src={square}
						alt="square"
						onClick={addToSquare}
					/>
				</li>
				<li>
					<img
						className={styles.icon}
						src={circle}
						alt="circle"
						onClick={addToCircle}
					/>
				</li>
				<li>
					<img
						className={styles.icon}
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

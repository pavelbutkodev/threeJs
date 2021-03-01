import React, {
	FC,
} from 'react';

import styles from './styles.module.scss';
import cursor from '../../../assets/image/cursor.png';
import movetool from '../../../assets/image/movetoolarrows.png';
import reload from '../../../assets/image/reload.png';
import circle from '../../../assets/image/circle.png';
import square from '../../../assets/image/square.png';
import triangle from '../../../assets/image/triangle.png';

const Toolbar: FC = () => {

	return (
		<div className={styles.container}>
			<ul>
				<li>
					<img className={styles.img} src={cursor} alt="cursor"/>
				</li>
				<li>
					<img className={styles.img} src={movetool} alt="movetool"/>
				</li>
				<li>
					<img className={styles.img} src={reload} alt="reload"/>
				</li>
			</ul>

			<ul>
				<li>
					<img className={styles.img} src={square} alt="square"/>
				</li>
				<li>
					<img className={styles.img} src={circle} alt="circle"/>
				</li>
				<li>
					<img className={styles.img} src={triangle} alt="triangle"/>
				</li>
			</ul>
		</div>
	);
}

export default Toolbar;

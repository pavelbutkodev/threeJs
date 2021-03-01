import React, {FC} from 'react';

import styles from './styles.module.scss';
import DrawFigures from "../DrawFigures";

const Workspace: FC = () => {
	return (
		<div className={styles.container}>
			<DrawFigures />
		</div>
	);
}

export default Workspace;

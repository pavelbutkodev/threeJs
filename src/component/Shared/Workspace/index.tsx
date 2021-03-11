import React, { FC } from 'react';

import DrawFigures from "../DrawFigures";

import styles from './styles.module.scss';

const Workspace: FC = () => {
  return (
    <div className={styles.container}>
      <DrawFigures/>
    </div>
  );
}

export default Workspace;

import React, { FC } from 'react';
import styles from './styles.module.scss';
import InformationPanel from "../../component/Shared/InformationPanel";
import Toolbar from "../../component/Shared/Toolbar";
import Workspace from "../../component/Shared/Workspace";

const MainWindow: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <Toolbar/>
      </div>
      <div className={styles.workspace}>
        <Workspace/>
      </div>
      <div className={styles.information_panel}>
        <InformationPanel/>
      </div>
    </div>
  );
}

export default MainWindow;

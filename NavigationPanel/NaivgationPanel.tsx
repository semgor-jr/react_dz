import styles from './styles.module.css';
import githubLogo from '../../assets/github.svg'
import SideMenu from '../SideMenu/SideMenu';
import { useState } from 'react';

export default function NaivgationPanel() {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const handleToggleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  
  return (
    <nav className={styles.navPanel}>
      <div>
     {showSideMenu &&  <SideMenu showSideMenu={showSideMenu} />}
     </div>
      <button className={styles.button} onClick={handleToggleSideMenu}>menu</button>
      <button className={styles.button}>Товары</button>
      <button className={styles.button}>Склады</button>
      <button className={styles.button}>О системе</button>
      <button className={styles.button}>Личный кабинет</button>
      <a href="https://github.com/semgor-jr" target="_blank">
          <img src={githubLogo} className={styles.logo} alt="Vite logo" />
      </a>
      
    </nav>
  );
};


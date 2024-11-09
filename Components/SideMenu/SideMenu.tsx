import styles from './styles.module.css';
import { SideMenuProps } from '../../types/types';
import { useState } from 'react';




const  SideMenu: React.FC<SideMenuProps> = ({ showSideMenu }) => {
    const [Check, setCheck] = useState(false);
    const handleCheckBox = () => {
        setCheck(!Check);
      };
  return (
    <aside className={`sideMenu ${showSideMenu ? 'show' : ''}`}>
    <div>
      <input className={styles.textField} type="text"
        placeholder="Поиск..."></input>
    </div>
      <button className={`checkBox ${Check ? 'clicked' : ''}`} onClick={handleCheckBox}></button>
      <div className={styles.category}>Сортировка</div>
    </aside>
  );
};

export default SideMenu;
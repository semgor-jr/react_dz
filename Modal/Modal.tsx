import styles from './styles.module.css';
import { ModalProps } from '../../types/types';
import noImage from '../../assets/noFoto.png'

export default function Modal({ product, onClose }: ModalProps) {
    return (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          {product.image ? (
              <img src={product.image} alt={product.name} className={styles.img}/>
            ) : (
              <img src={noImage} alt={product.name} className={styles.img}/>
          )}
          <h2>{product.name}</h2>
          <p className={styles.description}>{product.description}</p>
          <p>Количество: {product.quantity} {product.measure}</p>
          <p>Категория: {product.category}</p>
          <button onClick={onClose} className={styles.button}>Закрыть</button>
      </div>
      </div>
    );
  }
  
import styles from './styles.module.css';
import { ProductCardProps } from '../../types/types';
import noImage from '../../assets/noFoto.png'

export default function Product ({ product, onClick }: ProductCardProps) {

  return (
    <div className={styles.cardStyle} onClick={() => onClick(product)}>
      <div className={styles.imageContainer}>
        {product.image ? (
          <img src={product.image} alt={product.name} className={styles.img}/>
        ) : (
          <img src={noImage} alt={product.name} className={styles.img}/>
        )}
      </div>
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.description}>{product.description}</p>
      <p>Количество: {product.quantity} {product.measure}</p>
      <p>Единица измерения: {product.measure}</p>
      <p>Категория: {product.category}</p>
    </div>
  );
}


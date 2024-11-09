import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Product from '../Product/Product';
import { ProductCard } from '../../types/types';
import Modal from '../Modal/Modal';

export default function ProductList() {
  const [products, setProducts] = useState<ProductCard[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка');
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => console.error('Ошибка загрузки данных:', error));
  }, []);

  // const [currentProductIndex, setCurrentProductIndex] = useState(0);

  // const handleNextProduct = () => {
  //   const nextIndex = (currentProductIndex + 1) % products.length;
  //   setCurrentProductIndex(nextIndex);
  // };

  // const handlePreviousProduct = () => {
  //   const previousIndex = (currentProductIndex - 1 + products.length) % products.length;
  //   setCurrentProductIndex(previousIndex);
  // };

  // const displayedProducts = [
  //   products[(currentProductIndex - 1 + products.length) % products.length],
  //   products[currentProductIndex],
  //   products[(currentProductIndex + 1) % products.length],
  // ];

  const [selectedProduct, setSelectedProduct] = useState<ProductCard | null>(null);

  const handleCardClick = (product: ProductCard) => {
    setSelectedProduct(product);
  };

  
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  
  return (
  
    <div className={styles.carousel}>
      <div className={styles.productList}>
      {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onClick={handleCardClick}
          />
        ))}
      </div>
      {selectedProduct && <Modal product={selectedProduct} onClose={handleCloseModal} />}
    </div>
  );
};

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../context/AppContext';
import { products } from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { addToCart, addToFavorites, removeFromFavorites, isFavorite } = useAppContext();

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="not-found">
        <h2>{lang === 'en' ? 'Product not found' : 'Товар не найден'}</h2>
        <button onClick={() => navigate('/catalog')}>
          {lang === 'en' ? 'Back to catalog' : 'Вернуться в каталог'}
        </button>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="product-detail">
      <div className="container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← {lang === 'en' ? 'Back' : 'Назад'}
        </button>

        <div className="product-detail-content">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name[lang]} />
          </div>

          <div className="product-detail-info">
            <h1>{product.name[lang]}</h1>
            <p className="product-category">
              {t(`categories.${product.category}`)}
            </p>
            <div className="product-price-large">${product.price}</div>
            
            <p className="product-description-full">
              {product.description[lang]}
            </p>

            <div className="product-status">
              {product.inStock ? (
                <span className="status-in-stock">✅ {t('product.in_stock')}</span>
              ) : (
                <span className="status-out-stock">❌ {t('product.out_of_stock')}</span>
              )}
            </div>

            <div className="product-actions">
              <button
                className="btn-add-cart"
                onClick={() => addToCart(product)}
                disabled={!product.inStock}
              >
                🛒 {t('product.add_to_cart')}
              </button>
              <button
                className={`btn-favorite ${isFavorite(product.id) ? 'active' : ''}`}
                onClick={() => isFavorite(product.id) ? removeFromFavorites(product.id) : addToFavorites(product)}
              >
                {isFavorite(product.id) ? '❤️' : '🤍'} {isFavorite(product.id) ? t('product.remove_from_favorites') : t('product.add_to_favorites')}
              </button>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="related-products">
            <h2>{lang === 'en' ? 'Related Products' : 'Похожие товары'}</h2>
            <div className="related-grid">
              {relatedProducts.map(p => (
                <div
                  key={p.id}
                  className="related-card"
                  onClick={() => navigate(`/product/${p.id}`)}
                >
                  <img src={p.image} alt={p.name[lang]} />
                  <h4>{p.name[lang]}</h4>
                  <p className="related-price">${p.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

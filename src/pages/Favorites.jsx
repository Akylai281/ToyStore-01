import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../context/AppContext';
import './Favorites.css';

const Favorites = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { favorites, removeFromFavorites, addToCart } = useAppContext();

  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <div className="container">
          <div className="empty-content">
            <div className="empty-icon">❤️</div>
            <h2>{lang === 'en' ? 'No favorites yet' : 'Пока нет избранных'}</h2>
            <p>{lang === 'en' ? 'Start adding products to your favorites!' : 'Начните добавлять товары в избранное!'}</p>
            <Link to="/catalog" className="btn-primary">
              {lang === 'en' ? 'Browse Catalog' : 'Смотреть каталог'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-page">
      <div className="container">
        <h1>{t('nav.favorites')}</h1>
        <p className="favorites-count">
          {favorites.length} {lang === 'en' ? (favorites.length === 1 ? 'item' : 'items') : 'товаров'}
        </p>

        <div className="favorites-grid">
          {favorites.map(product => (
            <div key={product.id} className="favorite-card">
              <button
                className="remove-favorite-btn"
                onClick={() => removeFromFavorites(product.id)}
              >
                ❌
              </button>
              
              <Link to={`/product/${product.id}`} className="favorite-link">
                <div className="favorite-image">
                  <img src={product.image} alt={product.name[lang]} />
                </div>
                <div className="favorite-info">
                  <h3>{product.name[lang]}</h3>
                  <p className="favorite-category">{t(`categories.${product.category}`)}</p>
                  <p className="favorite-price">${product.price}</p>
                </div>
              </Link>
              
              <button
                className="add-to-cart-from-fav"
                onClick={() => addToCart(product)}
              >
                🛒 {t('product.add_to_cart')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;

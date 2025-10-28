import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../context/AppContext';
import { products } from '../data/products';
import './Catalog.css';

const Catalog = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [searchParams] = useSearchParams();
  const { addToCart, addToFavorites, removeFromFavorites, isFavorite } = useAppContext();
  
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name[lang].localeCompare(b.name[lang]);
    } else if (sortBy === 'price-low') {
      return a.price - b.price;
    } else if (sortBy === 'price-high') {
      return b.price - a.price;
    }
    return 0;
  });

  const categories = [
    { id: 'all', name: t('categories.all'), emoji: '🎁' },
    { id: 'teddy_bears', name: t('categories.teddy_bears'), emoji: '🧸' },
    { id: 'puzzles', name: t('categories.puzzles'), emoji: '🧩' },
    { id: 'dolls', name: t('categories.dolls'), emoji: '👸' }
  ];

  return (
    <div className="catalog">
      <div className="catalog-header">
        <div className="container">
          <h1>{t('nav.catalog')}</h1>
          <p>{lang === 'en' ? 'Discover our amazing collection of toys' : 'Откройте для себя нашу удивительную коллекцию игрушек'}</p>
        </div>
      </div>

      <div className="container">
        <div className="catalog-controls">
          <div className="category-filter">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={selectedCategory === cat.id ? 'active' : ''}
              >
                {cat.emoji} {cat.name}
              </button>
            ))}
          </div>

          <div className="sort-filter">
            <label>{lang === 'en' ? 'Sort by:' : 'Сортировать:'}</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="name">{lang === 'en' ? 'Name' : 'Название'}</option>
              <option value="price-low">{lang === 'en' ? 'Price: Low to High' : 'Цена: по возрастанию'}</option>
              <option value="price-high">{lang === 'en' ? 'Price: High to Low' : 'Цена: по убыванию'}</option>
            </select>
          </div>
        </div>

        <div className="products-count">
          {sortedProducts.length} {lang === 'en' ? 'products found' : 'товаров найдено'}
        </div>

        <div className="catalog-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="product-card">
              <button
                className={`favorite-btn ${isFavorite(product.id) ? 'active' : ''}`}
                onClick={() => isFavorite(product.id) ? removeFromFavorites(product.id) : addToFavorites(product)}
              >
                {isFavorite(product.id) ? '❤️' : '🤍'}
              </button>
              
              <Link to={`/product/${product.id}`} className="product-link">
                <div className="product-img">
                  <img src={product.image} alt={product.name[lang]} />
                </div>
                <div className="product-info">
                  <h3>{product.name[lang]}</h3>
                  <p className="product-desc">{product.description[lang]}</p>
                  <div className="product-footer">
                    <span className="product-price">${product.price}</span>
                    {product.inStock ? (
                      <span className="in-stock">✅ {t('product.in_stock')}</span>
                    ) : (
                      <span className="out-stock">❌ {t('product.out_of_stock')}</span>
                    )}
                  </div>
                </div>
              </Link>
              
              <button
                className="add-to-cart-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
              >
                {t('product.add_to_cart')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;

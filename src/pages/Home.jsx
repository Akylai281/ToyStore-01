import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products } from '../data/products';
import './Home.css';

const Home = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const featuredProducts = products.slice(0, 8);
  const categories = [
    { name: 'teddy_bears', emoji: '🧸', count: 18 },
    { name: 'puzzles', emoji: '🧩', count: 16 },
    { name: 'dolls', emoji: '👸', count: 16 }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title pacifico">{t('home.welcome')}</h1>
          <p className="hero-subtitle">{t('home.subtitle')}</p>
          <Link to="/catalog" className="btn-primary">
            {t('home.shop_now')} ✨
          </Link>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&h=600&fit=crop" alt="Toys" />
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">{t('home.categories')}</h2>
          <div className="categories-grid">
            {categories.map(cat => (
              <Link to={`/catalog?category=${cat.name}`} key={cat.name} className="category-card">
                <div className="category-emoji">{cat.emoji}</div>
                <h3>{t(`categories.${cat.name}`)}</h3>
                <p>{cat.count} {lang === 'en' ? 'products' : 'товаров'}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">{t('home.featured')}</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <Link to={`/product/${product.id}`} key={product.id} className="product-card-mini">
                <div className="product-image">
                  <img src={product.image} alt={product.name[lang]} />
                </div>
                <h4>{product.name[lang]}</h4>
                <p className="price">${product.price}</p>
              </Link>
            ))}
          </div>
          <div className="view-all">
            <Link to="/catalog" className="btn-secondary">
              {lang === 'en' ? 'View All Products' : 'Посмотреть все товары'} →
            </Link>
          </div>
        </div>
      </section>

      <section className="promo-section">
        <div className="container">
          <div className="promo-content">
            <h2>🎉 {lang === 'en' ? 'Special Offer!' : 'Специальное предложение!'}</h2>
            <p>{lang === 'en' ? 'Get 20% off on all teddy bears this week!' : 'Скидка 20% на все плюшевые мишки на этой неделе!'}</p>
            <Link to="/catalog?category=teddy_bears" className="btn-primary">
              {lang === 'en' ? 'Shop Now' : 'Купить сейчас'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

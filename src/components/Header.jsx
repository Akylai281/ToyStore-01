import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../context/AppContext';
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { cartItemsCount, favorites, user, logout, cart, removeFromCart, cartTotal } = useAppContext();
  const location = useLocation();
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartRef = useRef(null);
  const menuRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Close cart dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
      
      // Close mobile menu when clicking outside
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.hamburger')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/cart');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="language-switcher">
              <button
                onClick={() => changeLanguage('en')}
                className={i18n.language === 'en' ? 'active' : ''}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('ru')}
                className={i18n.language === 'ru' ? 'active' : ''}
              >
                RU
              </button>
            </div>
            <div className="user-actions">
              {user ? (
                <>
                  <span className="user-name">👋 {user.name}</span>
                  <button onClick={logout} className="logout-btn">
                    {t('auth.logout')}
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">{t('nav.login')}</Link>
                  <Link to="/register">{t('nav.register')}</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <span className="logo-text pacifico">🧸 ToyStore</span>
            </Link>

            {/* Hamburger menu for mobile */}
            <div className="mobile-menu-container" ref={menuRef}>
              <button className="hamburger" onClick={toggleMenu}>
                <span className={isMenuOpen ? 'hamburger-line hamburger-line-active' : 'hamburger-line'}></span>
                <span className={isMenuOpen ? 'hamburger-line hamburger-line-active' : 'hamburger-line'}></span>
                <span className={isMenuOpen ? 'hamburger-line hamburger-line-active' : 'hamburger-line'}></span>
              </button>

              {isMenuOpen && (
                <div className="mobile-menu">
                  <nav className="mobile-nav">
                    <Link to="/" className={isActive('/') ? 'active' : ''} onClick={closeMenu}>{t('nav.home')}</Link>
                    <Link to="/catalog" className={isActive('/catalog') ? 'active' : ''} onClick={closeMenu}>{t('nav.catalog')}</Link>
                    <Link to="/news" className={isActive('/news') ? 'active' : ''} onClick={closeMenu}>{t('nav.news')}</Link>
                    <Link to="/blog" className={isActive('/blog') ? 'active' : ''} onClick={closeMenu}>{t('nav.blog')}</Link>
                    <Link to="/reviews" className={isActive('/reviews') ? 'active' : ''} onClick={closeMenu}>{t('nav.reviews')}</Link>
                    <Link to="/locations" className={isActive('/locations') ? 'active' : ''} onClick={closeMenu}>{t('nav.locations')}</Link>
                    <Link to="/delivery" className={isActive('/delivery') ? 'active' : ''} onClick={closeMenu}>{t('nav.delivery')}</Link>
                    <Link to="/faq" className={isActive('/faq') ? 'active' : ''} onClick={closeMenu}>FAQ</Link>
                    <Link to="/video" className={isActive('/video') ? 'active' : ''} onClick={closeMenu}>{t('nav.video')}</Link>
                    <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={closeMenu}>{t('nav.about')}</Link>
                    <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={closeMenu}>{t('nav.contact')}</Link>
                  </nav>
                </div>
              )}
            </div>

            <nav className="main-nav">
              <Link to="/" className={isActive('/') ? 'active' : ''}>{t('nav.home')}</Link>
              <Link to="/catalog" className={isActive('/catalog') ? 'active' : ''}>{t('nav.catalog')}</Link>
              <Link to="/news" className={isActive('/news') ? 'active' : ''}>{t('nav.news')}</Link>
              <Link to="/blog" className={isActive('/blog') ? 'active' : ''}>{t('nav.blog')}</Link>
              <Link to="/reviews" className={isActive('/reviews') ? 'active' : ''}>{t('nav.reviews')}</Link>
              <Link to="/locations" className={isActive('/locations') ? 'active' : ''}>{t('nav.locations')}</Link>
              <Link to="/delivery" className={isActive('/delivery') ? 'active' : ''}>{t('nav.delivery')}</Link>
              <Link to="/faq" className={isActive('/faq') ? 'active' : ''}>FAQ</Link>
              <Link to="/video" className={isActive('/video') ? 'active' : ''}>{t('nav.video')}</Link>
              <Link to="/about" className={isActive('/about') ? 'active' : ''}>{t('nav.about')}</Link>
              <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>{t('nav.contact')}</Link>
            </nav>

            <div className="header-icons">
              <Link to="/favorites" className="icon-link">
                {favorites.length > 0 ? '❤️' : '🤍'}
                {favorites.length > 0 && (
                  <span className="badge">{favorites.length}</span>
                )}
              </Link>
              
              {/* Cart dropdown */}
              <div className="cart-container" ref={cartRef}>
                <button 
                  className="icon-link cart-button"
                  onClick={() => setIsCartOpen(!isCartOpen)}
                >
                  🛒
                  {cartItemsCount > 0 && (
                    <span className="badge">{cartItemsCount}</span>
                  )}
                </button>
                
                {isCartOpen && (
                  <div className="cart-dropdown">
                    <div className="cart-dropdown-header">
                      <h3>{t('cart.title')}</h3>
                      <span className="cart-count">{cartItemsCount} {t('cart.items')}</span>
                    </div>
                    
                    <div className="cart-dropdown-content">
                      {cart.length === 0 ? (
                        <div className="cart-empty-message">
                          {t('cart.empty')}
                        </div>
                      ) : (
                        <>
                          <div className="cart-items-list">
                            {cart.map(item => (
                              <div key={item.id} className="cart-dropdown-item">
                                <div className="cart-item-info">
                                  <div className="cart-item-name">{item.name[i18n.language]}</div>
                                  <div className="cart-item-price">${item.price} x {item.quantity}</div>
                                </div>
                                <div className="cart-item-total">${(item.price * item.quantity).toFixed(2)}</div>
                                <button 
                                  className="remove-item-btn"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  ×
                                </button>
                              </div>
                            ))}
                          </div>
                          
                          <div className="cart-dropdown-footer">
                            <div className="cart-total">
                              <span>{t('cart.total')}:</span>
                              <strong>${cartTotal.toFixed(2)}</strong>
                            </div>
                            <div className="cart-actions">
                              <button className="view-cart-btn" onClick={() => {
                                setIsCartOpen(false);
                                navigate('/cart');
                              }}>
                                {t('cart.view_cart')}
                              </button>
                              <button className="checkout-btn" onClick={handleCheckout}>
                                {t('cart.checkout')}
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
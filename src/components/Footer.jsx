import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="pacifico">🧸 ToyStore</h3>
            <p>{t('footer.about_text')}</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="YouTube">📹</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>{lang === 'en' ? 'Quick Links' : 'Быстрые ссылки'}</h4>
            <ul className="footer-links">
              <li><Link to="/catalog">{t('nav.catalog')}</Link></li>
              <li><Link to="/news">{lang === 'en' ? 'News & Promotions' : 'Новости и акции'}</Link></li>
              <li><Link to="/blog">{lang === 'en' ? 'Blog' : 'Блог'}</Link></li>
              <li><Link to="/reviews">{lang === 'en' ? 'Reviews' : 'Отзывы'}</Link></li>
              <li><Link to="/locations">{lang === 'en' ? 'Locations' : 'Магазины'}</Link></li>
              <li><Link to="/delivery">{lang === 'en' ? 'Delivery' : 'Доставка'}</Link></li>
              <li><Link to="/faq">{lang === 'en' ? 'FAQ' : 'FAQ'}</Link></li>
              <li><Link to="/about">{t('nav.about')}</Link></li>
              <li><Link to="/contact">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t('footer.contact_us')}</h4>
            <ul>
              <li>📍 {t('footer.address')}: Турузбекова 109/1</li>
              <li>📞 {t('footer.phone')}: +996 507 175 035</li>
              <li>✉️ {t('footer.email')}: akylai2706@gmail.com</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t('footer.follow_us')}</h4>
            <p>Subscribe to our newsletter for latest updates and special offers!</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email..." />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

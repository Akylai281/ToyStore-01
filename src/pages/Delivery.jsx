import React from 'react';
import { useTranslation } from 'react-i18next';
import './Delivery.css';

const Delivery = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="delivery-page">
      <div className="delivery-hero">
        <div className="container">
          <h1>{lang === 'en' ? 'Shipping & Delivery' : 'Доставка'}</h1>
          <p>{lang === 'en' ? 'Fast, reliable, and free shipping on all orders' : 'Быстрая, надежная и бесплатная доставка на все заказы'}</p>
        </div>
      </div>

      <div className="container">
        <div className="delivery-options">
          <div className="delivery-card">
            <div className="delivery-icon">🚚</div>
            <h3>{lang === 'en' ? 'Standard Shipping' : 'Стандартная доставка'}</h3>
            <p className="delivery-time">{lang === 'en' ? '3-5 Business Days' : '3-5 рабочих дней'}</p>
            <p className="delivery-price">{lang === 'en' ? 'FREE' : 'БЕСПЛАТНО'}</p>
            <ul>
              <li>{lang === 'en' ? 'Track your order online' : 'Отслеживание заказа онлайн'}</li>
              <li>{lang === 'en' ? 'Delivery to your doorstep' : 'Доставка до двери'}</li>
              <li>{lang === 'en' ? 'Signature required' : 'Требуется подпись'}</li>
            </ul>
          </div>

          <div className="delivery-card featured">
            <div className="badge">{lang === 'en' ? 'Popular' : 'Популярно'}</div>
            <div className="delivery-icon">⚡</div>
            <h3>{lang === 'en' ? 'Express Shipping' : 'Экспресс доставка'}</h3>
            <p className="delivery-time">{lang === 'en' ? '1-2 Business Days' : '1-2 рабочих дня'}</p>
            <p className="delivery-price">$9.99</p>
            <ul>
              <li>{lang === 'en' ? 'Priority handling' : 'Приоритетная обработка'}</li>
              <li>{lang === 'en' ? 'Real-time tracking' : 'Отслеживание в реальном времени'}</li>
              <li>{lang === 'en' ? 'Weekend delivery available' : 'Доставка в выходные'}</li>
            </ul>
          </div>

          <div className="delivery-card">
            <div className="delivery-icon">📦</div>
            <h3>{lang === 'en' ? 'Store Pickup' : 'Самовывоз'}</h3>
            <p className="delivery-time">{lang === 'en' ? 'Same Day' : 'В тот же день'}</p>
            <p className="delivery-price">{lang === 'en' ? 'FREE' : 'БЕСПЛАТНО'}</p>
            <ul>
              <li>{lang === 'en' ? 'Pick up from our store' : 'Забрать из нашего магазина'}</li>
              <li>{lang === 'en' ? 'Ready in 2-4 hours' : 'Готов через 2-4 часа'}</li>
              <li>{lang === 'en' ? 'Flexible pickup times' : 'Гибкое время получения'}</li>
            </ul>
          </div>
        </div>

        <div className="delivery-info-section">
          <h2>{lang === 'en' ? 'Shipping Information' : 'Информация о доставке'}</h2>
          
          <div className="info-grid">
            <div className="info-item">
              <h3>🌍 {lang === 'en' ? 'International Shipping' : 'Международная доставка'}</h3>
              <p>
                {lang === 'en' 
                  ? 'We ship worldwide! International orders typically arrive within 7-14 business days. Customs fees may apply.'
                  : 'Мы доставляем по всему миру! Международные заказы обычно прибывают в течение 7-14 рабочих дней. Могут применяться таможенные сборы.'}
              </p>
            </div>

            <div className="info-item">
              <h3>📍 {lang === 'en' ? 'Order Tracking' : 'Отслеживание заказа'}</h3>
              <p>
                {lang === 'en'
                  ? 'Track your order in real-time with the tracking number provided via email after shipment.'
                  : 'Отслеживайте свой заказ в реальном времени с помощью номера отслеживания, предоставленного по электронной почте после отправки.'}
              </p>
            </div>

            <div className="info-item">
              <h3>🎁 {lang === 'en' ? 'Gift Wrapping' : 'Упаковка подарков'}</h3>
              <p>
                {lang === 'en'
                  ? 'Free gift wrapping available! Select this option at checkout to make your gift extra special.'
                  : 'Бесплатная упаковка подарков! Выберите эту опцию при оформлении заказа, чтобы сделать ваш подарок особенным.'}
              </p>
            </div>

            <div className="info-item">
              <h3>🔒 {lang === 'en' ? 'Secure Packaging' : 'Безопасная упаковка'}</h3>
              <p>
                {lang === 'en'
                  ? 'All items are carefully packaged to ensure they arrive in perfect condition.'
                  : 'Все товары тщательно упакованы, чтобы гарантировать их прибытие в идеальном состоянии.'}
              </p>
            </div>
          </div>
        </div>

        <div className="delivery-zones">
          <h2>{lang === 'en' ? 'Delivery Zones' : 'Зоны доставки'}</h2>
          <div className="zones-grid">
            <div className="zone-card">
              <h4>{lang === 'en' ? 'Moscow & Region' : 'Москва и область'}</h4>
              <p>{lang === 'en' ? 'Next day delivery available' : 'Доставка на следующий день'}</p>
            </div>
            <div className="zone-card">
              <h4>{lang === 'en' ? 'Major Cities' : 'Крупные города'}</h4>
              <p>{lang === 'en' ? '2-3 business days' : '2-3 рабочих дня'}</p>
            </div>
            <div className="zone-card">
              <h4>{lang === 'en' ? 'Remote Areas' : 'Отдаленные районы'}</h4>
              <p>{lang === 'en' ? '4-7 business days' : '4-7 рабочих дней'}</p>
            </div>
            <div className="zone-card">
              <h4>{lang === 'en' ? 'International' : 'Международная'}</h4>
              <p>{lang === 'en' ? '7-14 business days' : '7-14 рабочих дней'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;

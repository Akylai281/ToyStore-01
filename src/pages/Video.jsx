import React from 'react';
import { useTranslation } from 'react-i18next';
import './Video.css';

const Video = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const openInstagram = () => {
    window.open('https://www.instagram.com/toystore_01.2025', '_blank');
  };

  const openTelegram = () => {
    window.open('https://t.me/+996507175035', '_blank');
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('akylai2706@gmail.com');
    alert(lang === 'en' ? 'Email copied to clipboard!' : 'Электронная почта скопирована в буфер обмена!');
  };

  return (
    <div className="video-page">
      <div className="video-hero">
        <div className="container">
          <h1>{lang === 'en' ? 'About Our Toy Store' : 'О нашем магазине игрушек'}</h1>
          <p>{lang === 'en' ? 'Discover the magic of ToyStore' : 'Откройте для себя магию ToyStore'}</p>
        </div>
      </div>

      <div className="container">
        <div className="video-section">
          <div className="video-container">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/RxvR4y8105M?autoplay=0&mute=0"
              title="ToyStore Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="video-description">
            <h2>{lang === 'en' ? 'Welcome to ToyStore!' : 'Добро пожаловать в ToyStore!'}</h2>
            <p>
              {lang === 'en' 
                ? 'Discover our amazing collection of toys for children of all ages. From plush teddy bears to educational puzzles, we have something for everyone! In this video, you\'ll see our store, our products, and why we\'re the best toy store in the city.' 
                : 'Откройте для себя нашу удичную коллекцию игрушек для детей всех возрастов. От плюшевых мишек до развивающих головоломок - у нас есть что-то для каждого! В этом видео вы увидите наш магазин, наши товары и почему мы лучший магазин игрушек в городе.'}
            </p>
          </div>
        </div>

        <div className="contact-section">
          <h2>{lang === 'en' ? 'Contact Us' : 'Свяжитесь с нами'}</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📷</div>
                <div className="contact-details">
                  <h3>Instagram</h3>
                  <p>@toystore_01.2025</p>
                  <button className="contact-btn instagram-btn" onClick={openInstagram}>
                    {lang === 'en' ? 'Follow Us' : 'Подписаться'}
                  </button>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-details">
                  <h3>Telegram</h3>
                  <p>+996 507 175 035</p>
                  <button className="contact-btn telegram-btn" onClick={openTelegram}>
                    {lang === 'en' ? 'Message Us' : 'Написать нам'}
                  </button>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <h3>{lang === 'en' ? 'Email' : 'Электронная почта'}</h3>
                  <p>akylai2706@gmail.com</p>
                  <button className="contact-btn email-btn" onClick={copyEmail}>
                    {lang === 'en' ? 'Copy Email' : 'Копировать'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
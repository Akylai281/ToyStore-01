import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(lang === 'en' ? 'Message sent successfully!' : 'Сообщение успешно отправлено!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="container">
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.subtitle')}</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-content">
          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>{t('contact.name')}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={lang === 'en' ? 'John Doe' : 'Иван Иванов'}
                />
              </div>

              <div className="form-group">
                <label>{t('contact.email')}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@email.com"
                />
              </div>

              <div className="form-group">
                <label>{t('contact.message')}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder={lang === 'en' ? 'Your message here...' : 'Ваше сообщение здесь...'}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                {t('contact.send')} ✉️
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <div className="info-card">
              <h3>📍 {t('footer.address')}</h3>
              <p>123 Toy Street, Moscow, Russia 101000</p>
            </div>

            <div className="info-card">
              <h3>📞 {t('footer.phone')}</h3>
              <p>+7 (495) 123-45-67</p>
              <p>+7 (800) 555-35-35</p>
            </div>

            <div className="info-card">
              <h3>✉️ {t('footer.email')}</h3>
              <p>info@toyland.com</p>
              <p>support@toyland.com</p>
            </div>

            <div className="info-card">
              <h3>🕒 {lang === 'en' ? 'Working Hours' : 'Часы работы'}</h3>
              <p>{lang === 'en' ? 'Mon - Fri: 9:00 AM - 8:00 PM' : 'Пн - Пт: 9:00 - 20:00'}</p>
              <p>{lang === 'en' ? 'Sat - Sun: 10:00 AM - 6:00 PM' : 'Сб - Вс: 10:00 - 18:00'}</p>
            </div>
          </div>
        </div>

        <div className="map-section">
          <h2>{t('contact.location')}</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.4441796624835!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2sRed%20Square!5e0!3m2!1sen!2sru!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

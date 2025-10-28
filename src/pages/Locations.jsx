import React from 'react';
import { useTranslation } from 'react-i18next';
import './Locations.css';

const Locations = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const locations = [
    {
      id: 1,
      name: { en: "Main Store - Turusbekova 109", ru: "Основной магазин - Турузбекова 109" },
      address: { en: "Turusbekova 109, Bishkek", ru: "Турузбекова 109, Бишкек" },
      phone: "+996 507 175 035",
      email: "akylai2706@gmail.com",
      hours: { 
        en: "Mon-Sun: 9:00 AM - 9:00 PM", 
        ru: "Пн-Вс: 9:00 - 21:00" 
      },
      image: "https://images.unsplash.com/photo-1560448216-0b26b4b0c1d4?w=600&h=400&fit=crop",
      coordinates: "42.874621,74.594853" // Approximate coordinates for Turusbekova 109
    },
    {
      id: 2,
      name: { en: "Alamedin Branch", ru: "Филиал Аламедин" },
      address: { en: "Alamedin 1, Bishkek", ru: "Аламедин 1, Бишкек" },
      phone: "+996 507 175 036",
      email: "alamadin@toystore.com",
      hours: { 
        en: "Mon-Sun: 10:00 AM - 8:00 PM", 
        ru: "Пн-Вс: 10:00 - 20:00" 
      },
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop",
      coordinates: "42.869101,74.589234" // Approximate coordinates for Alamedin
    },
    {
      id: 3,
      name: { en: "Ahunbaeva Branch", ru: "Филиал Ахунбаева" },
      address: { en: "Ahunbaeva 211, Bishkek", ru: "Ахунбаева 211, Бишкек" },
      phone: "+996 507 175 037",
      email: "ahunbaeva@toystore.com",
      hours: { 
        en: "Mon-Sun: 9:00 AM - 10:00 PM", 
        ru: "Пн-Вс: 9:00 - 22:00" 
      },
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop",
      coordinates: "42.879447,74.612891" // Approximate coordinates for Ahunbaeva 211
    }
  ];

  const openInstagram = () => {
    window.open('https://www.instagram.com/toystore_01.2025', '_blank');
  };

  const getDirections = (coordinates) => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${coordinates}`, '_blank');
  };

  return (
    <div className="locations-page">
      <div className="locations-hero">
        <div className="container">
          <h1>{lang === 'en' ? 'Our Locations' : 'Наши магазины'}</h1>
          <p>{lang === 'en' ? 'Visit us at any of our convenient locations' : 'Посетите нас в любом из наших удобных магазинов'}</p>
        </div>
      </div>

      <div className="container">
        <div className="locations-grid">
          {locations.map(location => (
            <div key={location.id} className="location-card">
              <div className="location-image">
                <img src={location.image} alt={location.name[lang]} />
              </div>
              <div className="location-info">
                <h3>{location.name[lang]}</h3>
                <div className="location-details">
                  <p>📍 {location.address[lang]}</p>
                  <p>📞 {location.phone}</p>
                  <p>✉️ {location.email}</p>
                  <p>🕒 {location.hours[lang]}</p>
                </div>
                <button className="directions-btn" onClick={() => getDirections(location.coordinates)}>
                  {lang === 'en' ? 'Get Directions' : 'Проложить маршрут'} 🗺️
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="social-section">
          <h2>{lang === 'en' ? 'Follow Us' : 'Подписывайтесь на нас'}</h2>
          <div className="social-content">
            <p>{lang === 'en' ? 'Follow our Instagram for updates and promotions' : 'Подписывайтесь на наш Instagram для новостей и акций'}</p>
            <button className="instagram-btn" onClick={openInstagram}>
              📷 Instagram: @toystore_01.2025
            </button>
          </div>
        </div>

        <div className="map-section">
          <h2>{lang === 'en' ? 'Find Us on the Map' : 'Найдите нас на карте'}</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23470.35647610744!2d74.5744734!3d42.874621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7d4e7a4f8b9%3A0x7e3f0e0e0e0e0e0e!2sBishkek!5e0!3m2!1sen!2skg!4v1650000000000!5m2!1sen!2skg"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ToyStore Locations Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
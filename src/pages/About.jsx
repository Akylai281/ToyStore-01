import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>{t('nav.about')}</h1>
          <p>{lang === 'en' ? 'Your trusted partner for quality toys since 2010' : 'Ваш надежный партнер качественных игрушек с 2010 года'}</p>
        </div>
      </div>

      <div className="container">
        <div className="about-section">
          <div className="about-content">
            <h2>{lang === 'en' ? 'Our Story' : 'Наша история'}</h2>
            <p>
              {lang === 'en' 
                ? 'ToyLand was founded in 2010 with a simple mission: to bring joy and happiness to children through quality toys. Over the years, we have grown to become one of the most trusted toy retailers, offering an extensive collection of teddy bears, puzzles, dolls, and more.'
                : 'ToyLand была основана в 2010 году с простой миссией: приносить радость и счастье детям через качественные игрушки. За эти годы мы стали одним из самых надежных продавцов игрушек, предлагая обширную коллекцию плюшевых мишек, пазлов, кукол и многого другого.'}
            </p>
            <p>
              {lang === 'en'
                ? 'Our commitment to quality, safety, and customer satisfaction has made us a favorite among parents and children alike. We carefully select each product to ensure it meets our high standards.'
                : 'Наша приверженность качеству, безопасности и удовлетворенности клиентов сделала нас фаворитами как среди родителей, так и среди детей. Мы тщательно отбираем каждый продукт, чтобы убедиться, что он соответствует нашим высоким стандартам.'}
            </p>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?w=600&h=600&fit=crop" alt="Toys" />
          </div>
        </div>

        <div className="values-section">
          <h2>{lang === 'en' ? 'Our Values' : 'Наши ценности'}</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>{lang === 'en' ? 'Quality First' : 'Качество прежде всего'}</h3>
              <p>
                {lang === 'en'
                  ? 'We only offer products that meet the highest quality and safety standards.'
                  : 'Мы предлагаем только продукты, которые соответствуют самым высоким стандартам качества и безопасности.'}
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>{lang === 'en' ? 'Customer Care' : 'Забота о клиентах'}</h3>
              <p>
                {lang === 'en'
                  ? 'Your satisfaction is our priority. We provide excellent customer service.'
                  : 'Ваше удовлетворение - наш приоритет. Мы предоставляем отличное обслуживание клиентов.'}
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>{lang === 'en' ? 'Innovation' : 'Инновации'}</h3>
              <p>
                {lang === 'en'
                  ? 'We constantly update our collection with the latest and most exciting toys.'
                  : 'Мы постоянно обновляем нашу коллекцию новейшими и самыми захватывающими игрушками.'}
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>{lang === 'en' ? 'Sustainability' : 'Устойчивость'}</h3>
              <p>
                {lang === 'en'
                  ? 'We care about the environment and choose eco-friendly products whenever possible.'
                  : 'Мы заботимся об окружающей среде и выбираем экологичные продукты, когда это возможно.'}
              </p>
            </div>
          </div>
        </div>

        <div className="stats-section">
          <div className="stat-card">
            <h3>50+</h3>
            <p>{lang === 'en' ? 'Products' : 'Товаров'}</p>
          </div>
          <div className="stat-card">
            <h3>15,000+</h3>
            <p>{lang === 'en' ? 'Happy Customers' : 'Довольных клиентов'}</p>
          </div>
          <div className="stat-card">
            <h3>15+</h3>
            <p>{lang === 'en' ? 'Years Experience' : 'Лет опыта'}</p>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>{lang === 'en' ? 'Satisfaction' : 'Удовлетворенность'}</p>
          </div>
        </div>

        <div className="achievements-section">
          <h2>{lang === 'en' ? 'Our Achievements' : 'Наши достижения'}</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">🏆</div>
              <h3>{lang === 'en' ? 'Best Toy Store 2024' : 'Лучший магазин игрушек 2024'}</h3>
              <p>{lang === 'en' ? 'Awarded by National Retail Association' : 'Награждено Национальной ассоциацией розничной торговли'}</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">⭐</div>
              <h3>{lang === 'en' ? '4.9/5 Customer Rating' : 'Рейтинг клиентов 4.9/5'}</h3>
              <p>{lang === 'en' ? 'Based on 5,000+ verified reviews' : 'На основе более 5000 проверенных отзывов'}</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🌍</div>
              <h3>{lang === 'en' ? 'International Shipping' : 'Международная доставка'}</h3>
              <p>{lang === 'en' ? 'Delivering joy to 50+ countries' : 'Доставляем радость в 50+ стран'}</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">✅</div>
              <h3>{lang === 'en' ? 'Quality Certified' : 'Сертифицировано'}</h3>
              <p>{lang === 'en' ? 'All products meet international safety standards' : 'Все товары соответствуют международным стандартам безопасности'}</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">💚</div>
              <h3>{lang === 'en' ? 'Eco-Friendly Initiative' : 'Экологическая инициатива'}</h3>
              <p>{lang === 'en' ? '30% of products from sustainable sources' : '30% товаров из устойчивых источников'}</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🎁</div>
              <h3>{lang === 'en' ? '1M+ Toys Sold' : '1М+ проданных игрушек'}</h3>
              <p>{lang === 'en' ? 'Bringing smiles since 2010' : 'Дарим улыбки с 2010 года'}</p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h2>{lang === 'en' ? 'Why Choose Us?' : 'Почему выбирают нас?'}</h2>
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-emoji">🚚</span>
              <h4>{lang === 'en' ? 'Free Shipping' : 'Бесплатная доставка'}</h4>
              <p>{lang === 'en' ? 'On all orders' : 'На все заказы'}</p>
            </div>
            <div className="feature-item">
              <span className="feature-emoji">🔒</span>
              <h4>{lang === 'en' ? 'Secure Payment' : 'Безопасная оплата'}</h4>
              <p>{lang === 'en' ? '100% protected' : '100% защищено'}</p>
            </div>
            <div className="feature-item">
              <span className="feature-emoji">↩️</span>
              <h4>{lang === 'en' ? 'Easy Returns' : 'Легкий возврат'}</h4>
              <p>{lang === 'en' ? '30-day guarantee' : 'Гарантия 30 дней'}</p>
            </div>
            <div className="feature-item">
              <span className="feature-emoji">💬</span>
              <h4>{lang === 'en' ? '24/7 Support' : 'Поддержка 24/7'}</h4>
              <p>{lang === 'en' ? 'Always here to help' : 'Всегда готовы помочь'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

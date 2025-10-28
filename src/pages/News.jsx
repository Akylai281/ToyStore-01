import React from 'react';
import { useTranslation } from 'react-i18next';
import './News.css';

const News = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const newsItems = [
    {
      id: 1,
      title: { 
        en: "New Teddy Bear Collection Arrived!", 
        ru: "Поступила новая коллекция плюшевых мишек!" 
      },
      excerpt: { 
        en: "Check out our latest teddy bears with unique designs and premium materials.", 
        ru: "Ознакомьтесь с нашими последними плюшевыми мишками с уникальным дизайном и премиальными материалами." 
      },
      image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=600&h=400&fit=crop",
      date: "2025-01-25",
      category: { en: "New Arrivals", ru: "Новинки" },
      featured: true
    },
    {
      id: 2,
      title: { 
        en: "Valentine's Day Special Offer", 
        ru: "Специальное предложение ко Дню святого Валентина" 
      },
      excerpt: { 
        en: "Get 30% off all teddy bears until February 14th. Perfect gifts for your loved ones!", 
        ru: "Скидка 30% на всех плюшевых мишек до 14 февраля. Идеальные подарки для ваших близких!" 
      },
      image: "https://img.freepik.com/premium-vector/valentine-day-special-promo-with-red_53060-145.jpg",
      date: "2025-01-20",
      category: { en: "Promotions", ru: "Акции" },
      featured: true
    },
    {
      id: 3,
      title: { 
        en: "Kids Puzzle Championship 2025", 
        ru: "Чемпионат по пазлам для детей 2025" 
      },
      excerpt: { 
        en: "Join our annual puzzle competition for kids aged 5-12. Amazing prizes await!", 
        ru: "Присоединяйтесь к нашему ежегодному чемпионату по пазлам для детей 5-12 лет. Вас ждут удивительные призы!" 
      },
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      date: "2025-01-15",
      category: { en: "Events", ru: "События" },
      featured: false
    },
    {
      id: 4,
      title: { 
        en: "Doll Collection Spring Sale", 
        ru: "Весенняя распродажа коллекции кукол" 
      },
      excerpt: { 
        en: "Up to 40% off selected dolls. Limited time offer - don't miss out!", 
        ru: "Скидка до 40% на выбранные куклы. Ограниченное предложение - не упустите!" 
      },
      image: "https://images.unsplash.com/photo-1558711768-bb2f991f0b9c?w=600&h=400&fit=crop",
      date: "2025-01-10",
      category: { en: "Sales", ru: "Распродажи" },
      featured: true
    },
    {
      id: 5,
      title: { 
        en: "New Eco-Friendly Toys", 
        ru: "Новые экологичные игрушки" 
      },
      excerpt: { 
        en: "Introducing our new line of environmentally friendly toys made from sustainable materials.", 
        ru: "Представляем нашу новую линейку экологичных игрушек из устойчивых материалов." 
      },
      image: "https://images.unsplash.com/photo-1566454419290-0c4e5d9e4baa?w=600&h=400&fit=crop",
      date: "2025-01-05",
      category: { en: "New Arrivals", ru: "Новинки" },
      featured: false
    },
    {
      id: 6,
      title: { 
        en: "Free Gift Wrapping Service", 
        ru: "Бесплатная услуга упаковки подарков" 
      },
      excerpt: { 
        en: "All purchases over $50 now include free gift wrapping. Make your gifts extra special!", 
        ru: "Все покупки свыше $50 теперь включают бесплатную упаковку подарков. Сделайте свои подарки особенными!" 
      },
      image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=600&h=400&fit=crop",
      date: "2024-12-30",
      category: { en: "Services", ru: "Услуги" },
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: { en: 'All News', ru: 'Все новости' } },
    { id: 'promotions', name: { en: 'Promotions', ru: 'Акции' } },
    { id: 'sales', name: { en: 'Sales', ru: 'Распродажи' } },
    { id: 'new-arrivals', name: { en: 'New Arrivals', ru: 'Новинки' } },
    { id: 'events', name: { en: 'Events', ru: 'События' } }
  ];

  return (
    <div className="news-page">
      <div className="news-hero">
        <div className="container">
          <h1>{lang === 'en' ? 'News & Promotions' : 'Новости и акции'}</h1>
          <p>{lang === 'en' ? 'Stay updated with our latest news and special offers' : 'Будьте в курсе наших последних новостей и специальных предложений'}</p>
        </div>
      </div>

      <div className="container">
        <div className="news-filters">
          {categories.map(category => (
            <button key={category.id} className="filter-btn">
              {category.name[lang]}
            </button>
          ))}
        </div>

        <div className="featured-news">
          <h2>{lang === 'en' ? 'Featured Promotions' : 'Рекомендуемые акции'}</h2>
          <div className="featured-grid">
            {newsItems.filter(item => item.featured).map(item => (
              <div key={item.id} className="featured-card">
                <div className="news-image">
                  <img src={item.image} alt={item.title[lang]} />
                  <span className="news-category">{item.category[lang]}</span>
                </div>
                <div className="news-content">
                  <div className="news-meta">
                    <span className="news-date">📅 {item.date}</span>
                  </div>
                  <h3>{item.title[lang]}</h3>
                  <p>{item.excerpt[lang]}</p>
                  <button className="read-more-btn">
                    {lang === 'en' ? 'Read More' : 'Читать далее'} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="all-news">
          <h2>{lang === 'en' ? 'All News' : 'Все новости'}</h2>
          <div className="news-grid">
            {newsItems.map(item => (
              <article key={item.id} className="news-card">
                <div className="news-image">
                  <img src={item.image} alt={item.title[lang]} />
                  <span className="news-category">{item.category[lang]}</span>
                </div>
                <div className="news-content">
                  <div className="news-meta">
                    <span className="news-date">📅 {item.date}</span>
                  </div>
                  <h3>{item.title[lang]}</h3>
                  <p>{item.excerpt[lang]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Reviews.css';

const Reviews = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const [reviews] = useState([
    {
      id: 1,
      name: { en: "Anna Petrova", ru: "Анна Петрова" },
      rating: 5,
      date: "2025-01-20",
      product: { en: "Classic Brown Teddy Bear", ru: "Классический коричневый мишка" },
      comment: { 
        en: "Absolutely love this teddy bear! My daughter sleeps with it every night. The quality is exceptional and it's so soft!", 
        ru: "Просто обожаю этого плюшевого мишку! Моя дочь спит с ним каждую ночь. Качество исключительное, и он такой мягкий!" 
      },
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      name: { en: "Michael Johnson", ru: "Михаил Джонсон" },
      rating: 5,
      date: "2025-01-18",
      product: { en: "Ocean Adventure Puzzle 1000pc", ru: "Пазл Океанские приключения 1000 деталей" },
      comment: { 
        en: "Great puzzle! The pieces fit perfectly and the image is beautiful. Took us a weekend to complete as a family.", 
        ru: "Отличный пазл! Детали идеально подходят, а изображение красивое. Мы всей семьей собирали его выходные." 
      },
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
      id: 3,
      name: { en: "Elena Sokolova", ru: "Елена Соколова" },
      rating: 5,
      date: "2025-01-15",
      product: { en: "Princess Bella Doll", ru: "Кукла Принцесса Белла" },
      comment: { 
        en: "My granddaughter absolutely adores this doll! The dress is gorgeous and the quality exceeded my expectations.", 
        ru: "Моя внучка просто обожает эту куклу! Платье великолепное, а качество превзошло мои ожидания." 
      },
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
      id: 4,
      name: { en: "David Lee", ru: "Дэвид Ли" },
      rating: 4,
      date: "2025-01-12",
      product: { en: "Giant Teddy Bear", ru: "Гигантский плюшевый мишка" },
      comment: { 
        en: "Huge and cuddly! Perfect gift for my wife. The only downside is it takes up a lot of space, but she loves it!", 
        ru: "Огромный и приятный! Идеальный подарок для моей жены. Единственный минус - занимает много места, но она в восторге!" 
      },
      avatar: "https://i.pravatar.cc/150?img=13"
    },
    {
      id: 5,
      name: { en: "Olga Ivanova", ru: "Ольга Иванова" },
      rating: 5,
      date: "2025-01-10",
      product: { en: "Rainbow Unicorn Puzzle", ru: "Пазл Радужный единорог" },
      comment: { 
        en: "Beautiful colors and excellent quality! My kids loved putting this together. Fast delivery too!", 
        ru: "Красивые цвета и отличное качество! Моим детям очень понравилось собирать. Быстрая доставка!" 
      },
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    {
      id: 6,
      name: { en: "James Wilson", ru: "Джеймс Уилсон" },
      rating: 5,
      date: "2025-01-08",
      product: { en: "Panda Bear", ru: "Панда мишка" },
      comment: { 
        en: "Super cute and well-made! The panda is my son's new best friend. Highly recommend this store!", 
        ru: "Супер милый и качественный! Панда стала новым лучшим другом моего сына. Очень рекомендую этот магазин!" 
      },
      avatar: "https://i.pravatar.cc/150?img=14"
    },
    {
      id: 7,
      name: { en: "Maria Garcia", ru: "Мария Гарсия" },
      rating: 5,
      date: "2025-01-05",
      product: { en: "Ballerina Doll", ru: "Кукла Балерина" },
      comment: { 
        en: "Exquisite! The details on this doll are amazing. My daughter who does ballet was thrilled with this gift.", 
        ru: "Изысканная! Детали этой куклы удивительны. Моя дочь, которая занимается балетом, была в восторге от этого подарка." 
      },
      avatar: "https://i.pravatar.cc/150?img=10"
    },
    {
      id: 8,
      name: { en: "Sergey Volkov", ru: "Сергей Волков" },
      rating: 5,
      date: "2025-01-03",
      product: { en: "Space Explorer Puzzle", ru: "Пазл Космический исследователь" },
      comment: { 
        en: "Perfect for space enthusiasts! Great educational value and my son learned a lot about planets.", 
        ru: "Идеально для любителей космоса! Отличная образовательная ценность, мой сын узнал много о планетах." 
      },
      avatar: "https://i.pravatar.cc/150?img=15"
    },
    {
      id: 9,
      name: { en: "Sophie Martin", ru: "Софи Мартин" },
      rating: 4,
      date: "2024-12-28",
      product: { en: "Valentine Teddy Bear", ru: "Валентиновский мишка" },
      comment: { 
        en: "Sweet and romantic! Gave this to my girlfriend and she loved it. The heart detail is adorable.", 
        ru: "Сладкий и романтичный! Подарил его своей девушке, и она была в восторге. Сердечко очень милое." 
      },
      avatar: "https://i.pravatar.cc/150?img=23"
    },
    {
      id: 10,
      name: { en: "Natalia Kozlova", ru: "Наталья Козлова" },
      rating: 5,
      date: "2024-12-25",
      product: { en: "Christmas Teddy Bear", ru: "Рождественский мишка" },
      comment: { 
        en: "Perfect Christmas gift! The festive outfit is so cute. Great quality and fast shipping!", 
        ru: "Идеальный рождественский подарок! Праздничный наряд такой милый. Отличное качество и быстрая доставка!" 
      },
      avatar: "https://i.pravatar.cc/150?img=20"
    },
    {
      id: 11,
      name: { en: "Robert Brown", ru: "Роберт Браун" },
      rating: 5,
      date: "2024-12-20",
      product: { en: "Dinosaur World Puzzle", ru: "Пазл Мир динозавров" },
      comment: { 
        en: "My son is obsessed with dinosaurs and this puzzle is perfect! Great quality pieces.", 
        ru: "Мой сын помешан на динозаврах, и этот пазл идеален! Отличное качество деталей." 
      },
      avatar: "https://i.pravatar.cc/150?img=33"
    },
    {
      id: 12,
      name: { en: "Victoria Chen", ru: "Виктория Чен" },
      rating: 5,
      date: "2024-12-18",
      product: { en: "Mermaid Doll Ariel", ru: "Кукла Русалка Ариэль" },
      comment: { 
        en: "Beautiful mermaid doll! The tail shimmers and sparkles. My daughter plays with it all day long!", 
        ru: "Красивая кукла русалка! Хвост мерцает и блестит. Моя дочь играет с ней весь день!" 
      },
      avatar: "https://i.pravatar.cc/150?img=24"
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    product: '',
    comment: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(lang === 'en' ? 'Thank you for your review!' : 'Спасибо за ваш отзыв!');
    setFormData({ name: '', email: '', rating: 5, product: '', comment: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="reviews-page">
      <div className="reviews-hero">
        <div className="container">
          <h1>{lang === 'en' ? 'Customer Reviews' : 'Отзывы покупателей'}</h1>
          <p>{lang === 'en' ? 'See what our happy customers are saying' : 'Посмотрите, что говорят наши довольные клиенты'}</p>
        </div>
      </div>

      <div className="container">
        <div className="reviews-stats">
          <div className="stat-box">
            <div className="stat-number">{averageRating}</div>
            <div className="stat-stars">{renderStars(Math.round(averageRating))}</div>
            <div className="stat-label">{lang === 'en' ? 'Average Rating' : 'Средний рейтинг'}</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">{reviews.length}</div>
            <div className="stat-label">{lang === 'en' ? 'Total Reviews' : 'Всего отзывов'}</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">98%</div>
            <div className="stat-label">{lang === 'en' ? 'Recommend Us' : 'Рекомендуют нас'}</div>
          </div>
        </div>

        <div className="reviews-content">
          <div className="reviews-list">
            <h2>{lang === 'en' ? 'Customer Reviews' : 'Отзывы клиентов'}</h2>
            {reviews.map(review => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <img src={review.avatar} alt={review.name[lang]} className="review-avatar" />
                  <div className="review-meta">
                    <h4>{review.name[lang]}</h4>
                    <div className="review-rating">{renderStars(review.rating)}</div>
                    <p className="review-date">📅 {review.date}</p>
                  </div>
                </div>
                <p className="review-product">🎁 {review.product[lang]}</p>
                <p className="review-comment">{review.comment[lang]}</p>
              </div>
            ))}
          </div>

          <div className="review-form-section">
            <h2>{lang === 'en' ? 'Write a Review' : 'Написать отзыв'}</h2>
            <form onSubmit={handleSubmit} className="review-form">
              <div className="form-group">
                <label>{lang === 'en' ? 'Your Name' : 'Ваше имя'}</label>
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
                <label>{lang === 'en' ? 'Email' : 'Email'}</label>
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
                <label>{lang === 'en' ? 'Product Name' : 'Название товара'}</label>
                <input
                  type="text"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                  placeholder={lang === 'en' ? 'Which product?' : 'Какой товар?'}
                />
              </div>

              <div className="form-group">
                <label>{lang === 'en' ? 'Rating' : 'Рейтинг'}</label>
                <select name="rating" value={formData.rating} onChange={handleChange}>
                  <option value="5">⭐⭐⭐⭐⭐ (5)</option>
                  <option value="4">⭐⭐⭐⭐☆ (4)</option>
                  <option value="3">⭐⭐⭐☆☆ (3)</option>
                  <option value="2">⭐⭐☆☆☆ (2)</option>
                  <option value="1">⭐☆☆☆☆ (1)</option>
                </select>
              </div>

              <div className="form-group">
                <label>{lang === 'en' ? 'Your Review' : 'Ваш отзыв'}</label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder={lang === 'en' ? 'Tell us about your experience...' : 'Расскажите о вашем опыте...'}
                ></textarea>
              </div>

              <button type="submit" className="submit-review-btn">
                {lang === 'en' ? 'Submit Review' : 'Отправить отзыв'} ✨
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

import React from 'react';
import { useTranslation } from 'react-i18next';
import './Blog.css';

const Blog = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const blogPosts = [
    {
      id: 1,
      title: { en: "Top 10 Educational Toys for Kids", ru: "Топ 10 образовательных игрушек для детей" },
      excerpt: { en: "Discover the best educational toys that help children learn while playing.", ru: "Откройте для себя лучшие образовательные игрушки, которые помогают детям учиться во время игры." },
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&h=400&fit=crop",
      date: "2025-01-15",
      author: { en: "Sarah Johnson", ru: "Сара Джонсон" }
    },
    {
      id: 2,
      title: { en: "How to Choose the Perfect Teddy Bear", ru: "Как выбрать идеального плюшевого мишку" },
      excerpt: { en: "A complete guide to selecting the best teddy bear for your child.", ru: "Полное руководство по выбору лучшего плюшевого мишки для вашего ребенка." },
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR8LL2G_dJ3sqwwidw9xhJW_3c3ZSeygyGDw&s",
      date: "2025-01-10",
      author: { en: "Mike Brown", ru: "Майк Браун" }
    },
    {
      id: 3,
      title: { en: "Benefits of Puzzles for Child Development", ru: "Преимущества пазлов для развития ребенка" },
      excerpt: { en: "Learn how puzzles can boost cognitive skills and problem-solving abilities.", ru: "Узнайте, как пазлы могут улучшить когнитивные навыки и способности решать проблемы." },
      image: "https://avatars.mds.yandex.net/get-mpic/5207084/img_id7194619075882267680.jpeg/orig",
      date: "2025-01-05",
      author: { en: "Emma Wilson", ru: "Эмма Уилсон" }
    },
    {
      id: 4,
      title: { en: "Doll Play: Building Social Skills", ru: "Игра в куклы: развитие социальных навыков" },
      excerpt: { en: "Discover how playing with dolls helps children develop empathy and social skills.", ru: "Узнайте, как игра с куклами помогает детям развивать эмпатию и социальные навыки." },
      image: "https://yoyo.kg/wp-content/uploads/2023/07/0-38.png",
      date: "2025-01-01",
      author: { en: "Lisa Chen", ru: "Лиза Чен" }
    },
    {
      id: 5,
      title: { en: "Safety Tips for Buying Toys", ru: "Советы по безопасности при покупке игрушек" },
      excerpt: { en: "Essential safety guidelines every parent should know when buying toys.", ru: "Основные правила безопасности, которые должен знать каждый родитель при покупке игрушек." },
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop",
      date: "2024-12-28",
      author: { en: "David Lee", ru: "Дэвид Ли" }
    },
    {
      id: 6,
      title: { en: "Toy Trends 2025", ru: "Тренды игрушек 2025" },
      excerpt: { en: "Explore the hottest toy trends and what's popular this year.", ru: "Изучите самые горячие тренды игрушек и что популярно в этом году." },
      image: "https://kupislona-store.ru/sites/default/files/styles/800x800/public/kukla-labubu.jpg?itok=skArDqru",
      date: "2024-12-20",
      author: { en: "Anna Smith", ru: "Анна Смит" }
    }
  ];

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <div className="container">
          <h1>{lang === 'en' ? 'Our Blog' : 'Наш блог'}</h1>
          <p>{lang === 'en' ? 'Tips, guides, and news about toys and child development' : 'Советы, руководства и новости об игрушках и развитии детей'}</p>
        </div>
      </div>

      <div className="container">
        <div className="blog-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title[lang]} />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">📅 {post.date}</span>
                  <span className="blog-author">✍️ {post.author[lang]}</span>
                </div>
                <h2>{post.title[lang]}</h2>
                <p>{post.excerpt[lang]}</p>
                <button className="read-more-btn">
                  {lang === 'en' ? 'Read More' : 'Читать далее'} →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

import React from 'react';
import { useTranslation } from 'react-i18next';
import './FAQ.css';

const FAQ = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const faqs = [
    {
      question: { en: "How do I place an order?", ru: "Как сделать заказ?" },
      answer: { en: "Simply browse our catalog, add items to your cart, and proceed to checkout. You can pay securely with various payment methods.", ru: "Просто просмотрите наш каталог, добавьте товары в корзину и перейдите к оформлению заказа. Вы можете безопасно оплатить различными способами." }
    },
    {
      question: { en: "What are your shipping options?", ru: "Какие у вас варианты доставки?" },
      answer: { en: "We offer free shipping on all orders. Standard delivery takes 3-5 business days. Express shipping is available for an additional fee.", ru: "Мы предлагаем бесплатную доставку для всех заказов. Стандартная доставка занимает 3-5 рабочих дней. Экспресс-доставка доступна за дополнительную плату." }
    },
    {
      question: { en: "What is your return policy?", ru: "Какова ваша политика возврата?" },
      answer: { en: "We offer a 30-day return policy. Items must be in original condition with tags attached. Refunds are processed within 7-10 business days.", ru: "Мы предлагаем 30-дневную политику возврата. Товары должны быть в оригинальном состоянии с бирками. Возврат средств обрабатывается в течение 7-10 рабочих дней." }
    },
    {
      question: { en: "Are your toys safe for children?", ru: "Безопасны ли ваши игрушки для детей?" },
      answer: { en: "Yes! All our toys meet international safety standards and are tested for quality. We only stock products from reputable manufacturers.", ru: "Да! Все наши игрушки соответствуют международным стандартам безопасности и проходят проверку качества. Мы продаем только продукцию от проверенных производителей." }
    },
    {
      question: { en: "Do you offer gift wrapping?", ru: "Предлагаете ли вы упаковку подарков?" },
      answer: { en: "Yes, we offer complimentary gift wrapping service. You can select this option during checkout.", ru: "Да, мы предлагаем бесплатную услугу упаковки подарков. Вы можете выбрать эту опцию при оформлении заказа." }
    },
    {
      question: { en: "How can I track my order?", ru: "Как я могу отследить свой заказ?" },
      answer: { en: "Once your order ships, you'll receive a tracking number via email. You can use this to monitor your delivery status.", ru: "Как только ваш заказ будет отправлен, вы получите номер для отслеживания по электронной почте. Вы можете использовать его для отслеживания статуса доставки." }
    },
    {
      question: { en: "Do you have a physical store?", ru: "У вас есть физический магазин?" },
      answer: { en: "Yes! Visit us at 123 Toy Street, Moscow. We're open Mon-Fri 9AM-8PM, Sat-Sun 10AM-6PM.", ru: "Да! Посетите нас по адресу: улица Игрушек 123, Москва. Мы работаем Пн-Пт 9:00-20:00, Сб-Вс 10:00-18:00." }
    },
    {
      question: { en: "Can I cancel or modify my order?", ru: "Могу ли я отменить или изменить свой заказ?" },
      answer: { en: "You can cancel or modify your order within 24 hours of placing it. Contact our support team immediately for assistance.", ru: "Вы можете отменить или изменить заказ в течение 24 часов после его размещения. Немедленно свяжитесь с нашей службой поддержки для помощи." }
    },
    {
      question: { en: "What payment methods do you accept?", ru: "Какие способы оплаты вы принимаете?" },
      answer: { en: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely.", ru: "Мы принимаем все основные кредитные карты, PayPal и банковские переводы. Все платежи обрабатываются безопасно." }
    },
    {
      question: { en: "Do you offer bulk discounts?", ru: "Предлагаете ли вы скидки на оптовые заказы?" },
      answer: { en: "Yes! We offer special pricing for bulk orders. Contact us at wholesale@toyland.com for more information.", ru: "Да! Мы предлагаем специальные цены на оптовые заказы. Свяжитесь с нами по адресу wholesale@toyland.com для получения дополнительной информации." }
    }
  ];

  return (
    <div className="faq-page">
      <div className="faq-hero">
        <div className="container">
          <h1>{lang === 'en' ? 'Frequently Asked Questions' : 'Часто задаваемые вопросы'}</h1>
          <p>{lang === 'en' ? 'Find answers to common questions about our products and services' : 'Найдите ответы на распространенные вопросы о наших товарах и услугах'}</p>
        </div>
      </div>

      <div className="container">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={index} className="faq-item">
              <summary className="faq-question">
                <span>{faq.question[lang]}</span>
                <span className="faq-icon">+</span>
              </summary>
              <div className="faq-answer">
                {faq.answer[lang]}
              </div>
            </details>
          ))}
        </div>

        <div className="faq-contact">
          <h2>{lang === 'en' ? "Still have questions?" : "Остались вопросы?"}</h2>
          <p>{lang === 'en' ? "Our support team is here to help!" : "Наша команда поддержки готова помочь!"}</p>
          <a href="/contact" className="contact-btn">
            {lang === 'en' ? 'Contact Us' : 'Свяжитесь с нами'} 💬
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

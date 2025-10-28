import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "catalog": "Catalog",
        "about": "About Us",
        "contact": "Contact",
        "favorites": "Favorites",
        "cart": "Cart",
        "login": "Login",
        "register": "Register",
        "news": "News",
        "blog": "Blog",
        "reviews": "Reviews",
        "locations": "Locations",
        "delivery": "Delivery",
        "video": "Video"
      },
      "home": {
        "welcome": "Welcome to ToyStore",
        "subtitle": "The Magic World of Toys",
        "shop_now": "Shop Now",
        "featured": "Featured Products",
        "categories": "Categories"
      },
      "product": {
        "add_to_cart": "Add to Cart",
        "add_to_favorites": "Add to Favorites",
        "remove_from_favorites": "Remove from Favorites",
        "in_stock": "In Stock",
        "out_of_stock": "Out of Stock",
        "details": "Product Details",
        "description": "Description",
        "reviews": "Reviews"
      },
      "cart": {
        "title": "Shopping Cart",
        "empty": "Your cart is empty",
        "total": "Total",
        "checkout": "Checkout",
        "continue_shopping": "Continue Shopping",
        "remove": "Remove",
        "items": "items",
        "view_cart": "View Cart"
      },
      "categories": {
        "teddy_bears": "Teddy Bears",
        "puzzles": "Puzzles",
        "dolls": "Dolls",
        "all": "All Products"
      },
      "auth": {
        "login_title": "Login",
        "register_title": "Register",
        "email": "Email",
        "password": "Password",
        "name": "Full Name",
        "confirm_password": "Confirm Password",
        "submit": "Submit",
        "already_have_account": "Already have an account?",
        "dont_have_account": "Don't have an account?",
        "logout": "Logout"
      },
      "footer": {
        "about": "About ToyStore",
        "about_text": "We are the largest toy store with the best selection of toys for children of all ages.",
        "contact_us": "Contact Us",
        "address": "Address",
        "phone": "Phone",
        "email": "Email",
        "follow_us": "Follow Us",
        "copyright": "© 2025 ToyStore. All rights reserved."
      },
      "contact": {
        "title": "Contact Us",
        "subtitle": "We'd love to hear from you",
        "name": "Your Name",
        "email": "Your Email",
        "message": "Your Message",
        "send": "Send Message",
        "location": "Our Location",
        "visit_us": "Visit Us"
      },
      "404": {
        "title": "Page Not Found",
        "description": "Sorry, the page you are looking for does not exist.",
        "homeButton": "Go Home"
      }
    }
  },
  ru: {
    translation: {
      "nav": {
        "home": "Главная",
        "catalog": "Каталог",
        "about": "О нас",
        "contact": "Контакты",
        "favorites": "Избранное",
        "cart": "Корзина",
        "login": "Вход",
        "register": "Регистрация",
        "news": "Новости",
        "blog": "Блог",
        "reviews": "Отзывы",
        "locations": "Магазины",
        "delivery": "Доставка",
        "video": "Видео"
      },
      "home": {
        "welcome": "Добро пожаловать в ToyStore",
        "subtitle": "Волшебный мир игрушек",
        "shop_now": "Перейти к покупкам",
        "featured": "Популярные товары",
        "categories": "Категории"
      },
      "product": {
        "add_to_cart": "Добавить в корзину",
        "add_to_favorites": "Добавить в избранное",
        "remove_from_favorites": "Удалить из избранного",
        "in_stock": "В наличии",
        "out_of_stock": "Нет в наличии",
        "details": "Информация о товаре",
        "description": "Описание",
        "reviews": "Отзывы"
      },
      "cart": {
        "title": "Корзина покупок",
        "empty": "Ваша корзина пуста",
        "total": "Итого",
        "checkout": "Оформить заказ",
        "continue_shopping": "Продолжить покупки",
        "remove": "Удалить",
        "items": "товара(ов)",
        "view_cart": "Посмотреть корзину"
      },
      "categories": {
        "teddy_bears": "Плюшевые мишки",
        "puzzles": "Пазлы",
        "dolls": "Куклы",
        "all": "Все товары"
      },
      "auth": {
        "login_title": "Вход",
        "register_title": "Регистрация",
        "email": "Электронная почта",
        "password": "Пароль",
        "name": "Полное имя",
        "confirm_password": "Подтвердите пароль",
        "submit": "Отправить",
        "already_have_account": "Уже есть аккаунт?",
        "dont_have_account": "Нет аккаунта?",
        "logout": "Выход"
      },
      "footer": {
        "about": "О ToyStore",
        "about_text": "Мы - крупнейший магазин игрушек с лучшим выбором для детей всех возрастов.",
        "contact_us": "Свяжитесь с нами",
        "address": "Адрес",
        "phone": "Телефон",
        "email": "Email",
        "follow_us": "Подпишитесь на нас",
        "copyright": "© 2025 ToyStore. Все права защищены."
      },
      "contact": {
        "title": "Свяжитесь с нами",
        "subtitle": "Мы будем рады услышать вас",
        "name": "Ваше имя",
        "email": "Ваш Email",
        "message": "Ваше сообщение",
        "send": "Отправить сообщение",
        "location": "Наше местоположение",
        "visit_us": "Посетите нас"
      },
      "404": {
        "title": "Страница не найдена",
        "description": "Извините, страница, которую вы ищете, не существует.",
        "homeButton": "На главную"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
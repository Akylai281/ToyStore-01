import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../context/AppContext';
import './Cart.css';

const Cart = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { cart, removeFromCart, updateCartQuantity, cartTotal } = useAppContext();
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckout = () => {
    // Validate form
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone || !customerInfo.address) {
      alert(lang === 'en' ? 'Please fill in all fields' : 'Пожалуйста, заполните все поля');
      return;
    }
    
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderPlaced(true);
      // In a real app, you would send the order to a backend service
    }, 1500);
  };

  const handleNewOrder = () => {
    setOrderPlaced(false);
    setCustomerInfo({
      name: '',
      email: '',
      phone: '',
      address: ''
    });
  };

  if (orderPlaced) {
    return (
      <div className="cart-empty">
        <div className="container">
          <div className="empty-content">
            <div className="empty-icon">✅</div>
            <h2>{lang === 'en' ? 'Order Placed Successfully!' : 'Заказ успешно оформлен!'}</h2>
            <p>{lang === 'en' ? 'Thank you for your purchase. Your order number is #TOY123456' : 'Спасибо за покупку. Номер вашего заказа #TOY123456'}</p>
            <button className="btn btn-primary" onClick={handleNewOrder}>
              {lang === 'en' ? 'Place Another Order' : 'Сделать еще один заказ'}
            </button>
            <Link to="/catalog" className="btn btn-secondary" style={{ marginLeft: '10px' }}>
              {t('cart.continue_shopping')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="container">
          <div className="empty-content">
            <div className="empty-icon">🛒</div>
            <h2>{t('cart.empty')}</h2>
            <Link to="/catalog" className="btn btn-primary">
              {t('cart.continue_shopping')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1>{t('cart.title')}</h1>

        <div className="cart-content">
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name[lang]} />
                </div>
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name[lang]}</h3>
                  <p className="cart-item-price">${item.price}</p>
                </div>
                <div className="quantity-control">
                  <button 
                    className="quantity-btn"
                    onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <div className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <button 
                  className="remove-btn" 
                  onClick={() => removeFromCart(item.id)}
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2 className="summary-title">{lang === 'en' ? 'Order Summary' : 'Сводка заказа'}</h2>
            <div className="summary-row">
              <span className="summary-label">{lang === 'en' ? 'Subtotal' : 'Промежуточный итог'}:</span>
              <span className="summary-value">${cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">{lang === 'en' ? 'Shipping' : 'Доставка'}:</span>
              <span className="summary-value">{lang === 'en' ? 'FREE' : 'БЕСПЛАТНО'}</span>
            </div>
            <div className="total-row">
              <span className="total-label">{t('cart.total')}:</span>
              <span className="total-value">${cartTotal.toFixed(2)}</span>
            </div>
            
            <div className="checkout-form">
              <h3>{lang === 'en' ? 'Delivery Information' : 'Информация о доставке'}</h3>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder={lang === 'en' ? 'Full Name' : 'Полное имя'}
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder={lang === 'en' ? 'Email Address' : 'Электронная почта'}
                  value={customerInfo.email}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder={lang === 'en' ? 'Phone Number' : 'Номер телефона'}
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="address"
                  placeholder={lang === 'en' ? 'Delivery Address' : 'Адрес доставки'}
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  className="form-input"
                  rows="3"
                />
              </div>
            </div>
            
            <button 
              className="checkout-btn" 
              onClick={handleCheckout}
              disabled={isCheckingOut}
            >
              {isCheckingOut ? (lang === 'en' ? 'Processing...' : 'Обработка...') : (lang === 'en' ? 'Place Order' : 'Оформить заказ')}
            </button>
            <Link to="/catalog" className="continue-shopping">
              {t('cart.continue_shopping')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
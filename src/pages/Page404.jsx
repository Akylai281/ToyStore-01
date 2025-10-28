import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Page404.css';

const Page404 = () => {
  const { t } = useTranslation();

  return (
    <div className="page-404">
      <div className="container">
        <div className="content">
          <div className="emoji">😢</div>
          <h1>404</h1>
          <h2>{t('404.title')}</h2>
          <p>{t('404.description')}</p>
          <Link to="/" className="btn btn-primary">
            {t('404.homeButton')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;
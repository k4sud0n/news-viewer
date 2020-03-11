import React from 'react';
import classNames from 'classnames/bind';
import styles from './NewsItem.scss';

const cx = classNames.bind(styles);

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  return (
    <div className={cx('news-item-block')}>
      {urlToImage && (
        <div className={cx('thumbnail')}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className={cx('contents')}>
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsItem;

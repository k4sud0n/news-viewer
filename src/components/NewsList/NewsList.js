import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';
import ScaleLoader from 'react-spinners/ScaleLoader';
import NewsItem from '../NewsItem';
import styles from './NewsItem.scss';

const cx = classNames.bind(styles);

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(category);
  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=01e432bf1bfc4a29b89d7c3c394186ff`,
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return (
      <div className={cx('news-list-block')}>
        <ScaleLoader />
      </div>
    );
  }

  if (!articles) {
    return null;
  }

  return (
    <div className={cx('news-list-block')}>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;

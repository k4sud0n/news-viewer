import React from 'react';
import classNames from 'classnames/bind';
import styles from './Categories.scss';

const cx = classNames.bind(styles);

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const Categories = () => {
  return (
    <div className={cx('categories-block')}>
      {categories.map(c => (
        <div className={cx('category')} key={c.name}>
          {c.text}
        </div>
      ))}
    </div>
  );
};

export default Categories;
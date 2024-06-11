import React from 'react';
import styles from '../../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <img
          src={require('../../assets/img/logo.png')}
          alt='로고이미지'
          height='90'
        />
      </div>
    </footer>
  );
};

export default Footer;

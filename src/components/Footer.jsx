import React from 'react';

function Footer() {
  return (
    <div className='footer-wrapp'>
    <div className='footer-container'>
      <h3 className="footer-title">Contact me 😎</h3>
      <div className="icon-links">
        <a href="https://github.com/YEBBLEE" target='_blank'>
            <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://velog.io/@yebb" target='_blank'>
          <i className="fa-brands fa-blogger"></i>
        </a>
      </div>
        <span className='footer-email'>
          yebb.whybbb@gmail.com
        </span>
        <span>Developed and Designed by <span className='footer-name'>예빈</span></span>
    </div>
    </div>
  );
}

export default Footer;
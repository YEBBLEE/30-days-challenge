import React from 'react';

function Footer() {
  return (
    <div className='footer-wrapp'>
    <div className='footer-container'>
      <h3 className="footer-title">Contact me π</h3>
      <div className="icon-links">
        <a href="https://github.com/YEBBLEE" target='_blank' rel="noreferrer">
            <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://velog.io/@yebb" target='_blank' rel="noreferrer">
          <i className="fa-brands fa-blogger"></i>
        </a>
      </div>
        <span className='footer-email'>
          yebb.whybbb@gmail.com
        </span>
        <span>Developed and Designed by <span className='footer-name'>μλΉ</span></span>
    </div>
    </div>
  );
}

export default React.memo(Footer);
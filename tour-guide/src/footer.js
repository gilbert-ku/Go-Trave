import React from 'react';

const Footer = () => {
  return (
    <footer>
      <section id="footer">
        <p className="footer-text">&copy; {new Date().getFullYear()}</p>
        <h2>Discover and Explore</h2>
        <h3>Get in Touch with Us:</h3>
      </section>
      <div id="icons">
        <ol>
          <li>
            <img
              src="https://cdn.pixabay.com/photo/2018/11/13/22/01/instagram-3814080_1280.png"
              width="60px"
              alt="Instagram"
            />
          </li>
          <li>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/24/07/28/twitter-2170426_1280.png"
              width="60px"
              alt="Twitter"
            />
          </li>
          <li>
            <img
              src="https://cdn.pixabay.com/photo/2013/07/13/10/30/icon-157358_1280.png"
              width="40px"
              alt="Icon"
            />
          </li>
          <li>
            <img
              src="https://cdn.pixabay.com/photo/2014/04/03/09/58/email-309491_1280.png"
              width="60px"
              alt="Email"
            />
          </li>
        </ol>
      </div>
    </footer>
  );
};

export default Footer;

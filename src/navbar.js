import React from 'react';

const Navbar = () => {
  return (
    <>
      <div id="navigation">
        <nav>
          <h1 className="logo">GOTRAVEL</h1>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Beaches</a>
            </li>
            <li>
              <a href="#">Ranches</a>
            </li>
            <li>
              <a href="#">Parks</a>
            </li>
          </ul>
        </nav>
      </div>
      <section id="footer">
        <p className="footer-text">&copy; 2023</p>
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
    </>
  );
};

export default Navbar;

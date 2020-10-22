// Module Start
// JS imports
import React from 'react';
// SASS imports
import '../sass/Header/header.scss';

// Header
const Header = () => {
  return (
    /* Header Start */
    <header className="header">
      <h6>Header</h6>
      {/* Container Start */}
      <div className="header__container">
        {/* Logo Start */}
        <a className="container__link" href="https://innoloft.com/home" title="Innoloft" tabIndex={0} target="new">
          <aside className="link__logo">
            {/* Image Replacement */}
            <h6>Innoloft</h6>
          </aside>
        </a>
        {/* Logo End */}
        {/* Search Start */}
        <div className="container__search">
          <input
            className="search__field"
            type="search"
            placeholder="Enter interests, keyword, company name, etc."
            tabIndex={20}
          />
        </div>
        {/* Search End */}
        {/* User Menu Start */}
        <nav className="container__menu-user">
          <h6>User Menu</h6>
          <ul className="menu-user__list">
            <li className="list__voice">
              <button className="voice__button">
                <span className="button__label">EN</span>
                <i className="fas fa-sort-down"></i>
              </button>
            </li>
            <li className="list__voice">
              <button className="voice__button">
                <i className="far fa-bell"></i>
              </button>
            </li>
            <li className="list__voice">
              <button className="voice__button">
                <i className="fas fa-user-circle"></i>
              </button>
            </li>
          </ul>
        </nav>
        {/* User Menu End */}
      </div>
      {/* Container End */}
    </header>
    /* Header End */
  );
};

// Module export
export default Header;
// Module End

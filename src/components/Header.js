// Module Start
// JS imports
import clsx from 'clsx';
import React, {useCallback} from 'react';
import {
  shallowEqual,
  useSelector,
  useDispatch
} from 'react-redux';
import * as actions from '../actions/menu';
// SASS imports
import '../sass/Header/header.scss';

// Header
const Header = () => {
  const dispatch = useDispatch();
  const {
    active
  } = useSelector(state => ({
    active: state.menu.active
  }), shallowEqual);
  // Menu handler
  const handleMenu = useCallback((status) => {
    dispatch(actions.setActive(status));
  }, [dispatch]);

  return (
    /* Header Start */
    <header className="header">
      <h6>Header</h6>
      {/* Container Start */}
      <div className="header__container">
        {/* Hamburger Start */}
        <button
          className={clsx(
            'container__hamburger',
            'hamburger',
            'hamburger--collapse',
            {
              ['is-active']: active
            }
          )}
          type="button"
          aria-label="Menu"
          aria-controls="navigation"
          onClick={() => handleMenu(!active)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        {/* Hamburger End */}
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

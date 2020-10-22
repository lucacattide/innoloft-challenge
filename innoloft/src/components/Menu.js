// Module Start
// JS imports
import clsx from 'clsx';
import React from 'react';
import {
  shallowEqual,
  useSelector
} from 'react-redux';
// SASS imports
import '../sass/Menu/menu.scss';

// Menu
const Menu = () => {
  const {
    active
  } = useSelector(state => ({
    active: state.menu.active
  }), shallowEqual);

  return (
    /* Menu Start */
    <aside className="menu">
      <h6>Main Menu</h6>
      {/* Navigation Start */}
      <nav className="menu__main">
        <h6>Voices</h6>
        <ul className={clsx(
          'main__list',
          {
            ['active']: active
          }
        )}>
          <li className="list__voice">
            <a className="voice__link" href="#" title="Home - Innoloft" tabIndex={10}>
              <span className="link__icon">
                <i className="fas fa-home"></i>
              </span>
              Home
            </a>
          </li>
          <li className="list__voice">
            <a className="voice__link" href="#" title="Account - Innoloft" tabIndex={11}>
              <span className="link__icon">
                <i className="fas fa-user"></i>
              </span>
              My Account
            </a>
          </li>
          <li className="list__voice">
            <a className="voice__link" href="#" title="Company - Innoloft" tabIndex={12}>
              <span className="link__icon">
                <i className="fas fa-building"></i>
              </span>
              My Company
            </a>
          </li>
          <li className="list__voice">
            <a className="voice__link" href="#" title="Settings - Innoloft" tabIndex={13}>
              <span className="link__icon">
                <i className="fas fa-cog"></i>
              </span>
              Settings
            </a>
          </li>
          <li className="list__voice">
            <a className="voice__link" href="#" title="News - Innoloft" tabIndex={14}>
              <span className="link__icon">
                <i className="fas fa-newspaper"></i>
              </span>
              News
            </a>
          </li>
          <li className="list__voice">
            <a className="voice__link" href="#" title="Analytics - Innoloft" tabIndex={15}>
              <span className="link__icon">
                <i className="fas fa-chart-area"></i>
              </span>
              Analytics
            </a>
          </li>
        </ul>
      </nav>
      {/* Navigation End */}
    </aside>
    /* Menu End */
  );
};

// Module export
export default Menu;
// Module End

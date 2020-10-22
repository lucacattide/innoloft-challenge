// Module Start
// JS imports
import React from 'react';
import {
  shallowEqual,
  useSelector
} from 'react-redux';
import Header from './Header';
import Notification from './Notification';
import Menu from './Menu';
import Profile from './Profile';
// SASS imports
import '../sass/App/app.scss';

// App
const App = () => {
  const {
    notification
  } = useSelector(state => ({
    notification: state.form.notification
  }), shallowEqual);

  return (
    <>
      <Header />
      <Notification message={notification} />
      <div className="app">
        <div className="app__container">
          <Menu />
          <Profile />
        </div>
      </div>
    </>
  );
};

// Module export
export default App;
// Module End

// Module Start
// JS imports
import React from 'react';
import {
  shallowEqual,
  useSelector
} from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import Notification from './Notification';
// SASS imports
import '../sass/App/app.scss';

// App
const App = (props) => {
  const {
    notification
  } = useSelector(state => ({
    notification: state.form.notification
  }), shallowEqual);

  return (
    <>
      <div className="container">
        <Header />
        <Notification message={notification} />
        <div className="app">
          <div className="app__container">
            {props.children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

// Module export
export default App;
// Module End

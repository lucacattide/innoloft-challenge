// Module Start
// JS imports
import React from 'react';
import {
  shallowEqual,
  useSelector
} from 'react-redux';
import Header from './Header';
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
      <Header />
      <Notification message={notification} />
      <div className="app">
        <div className="app__container">
          {props.children}
        </div>
      </div>
    </>
  );
};

// Module export
export default App;
// Module End

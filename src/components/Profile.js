// Module Start
// JS imports
import React, { useCallback } from 'react';
import {
  shallowEqual,
  useSelector,
  useDispatch
} from 'react-redux';
import * as actions from '../actions/profile';
import Form from './Form';
// SASS imports
import '../sass/Profile/profile.scss';

// Profile
const Profile = () => {
  const dispatch = useDispatch();
  const {
    tabs
  } = useSelector(state => ({
    tabs: state.profile.tabs
  }), shallowEqual);
  const {account, profile} = tabs;
  // Section handler
  const handleSection = useCallback((section) => {
    switch(section) {
      case 'account':
        dispatch(actions.setTabs({
          account: true,
          profile: false
        }));
        break;
      case 'profile':
        dispatch(actions.setTabs({
          account: false,
          profile: true
        }));
        break;

      default:
    }
  }, [dispatch]);

  return (
    /* Profile Start */
    <section className="profile">
      <h6>User Profile</h6>
      {/* Container Start */}
      <div className="profile__container">
        {/* Heading Start */}
        <div className="container__heading">
          {/* Main Start */}
          <a
            className={`heading__link ${account ?
              'heading__link active' :
              'heading__link'}`
            }
            href="#"
            title="Main - Profile - Innoloft"
            tabIndex={101}
            onClick={() => handleSection('account')}
          >
            <h2 className="link__title">Account</h2>
          </a>
          {/* Main End */}
          {/* More Start */}
          <a
            className={`heading__link ${profile ?
              'heading__link active' :
              'heading__link'}`
            }
            href="#"
            title="More - Profile - Innoloft"
            tabIndex={102}
            onClick={() => handleSection('profile')}
          >
            <h2 className="link__title">Profile</h2>
          </a>
          {/* More End */}
        </div>
        {/* Heading End */}
        {/* Content Start */}
        <div className="container__content">
          <Form account={account} profile={profile} />
        </div>
        {/* Content End */}
      </div>
      {/* Container End */}
    </section>
    /* Profile End */
  );
};

// Module export
export default Profile;
// Module End

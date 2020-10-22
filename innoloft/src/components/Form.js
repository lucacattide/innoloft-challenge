// Module Start
// JS imports
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  shallowEqual,
  useSelector,
  useDispatch,
  batch
} from 'react-redux';
import clsx from 'clsx';
import fetch from 'isomorphic-unfetch';
import * as actions from '../actions/form';
import {
  patternText,
  patternEmail,
  patternPassword,
  checkStatus
} from '../utils';
// SASS imports
import '../sass/Form/form.scss';

// Form
const Form = (props) => {
  const {account, profile} = props;
  const dispatch = useDispatch();
  const {
    edit,
    data,
    strength,
    exception
  } = useSelector(state => ({
    edit: state.form.edit,
    data: state.form.data,
    strength: state.form.strength,
    exception: state.form.exception
  }), shallowEqual);
  const {
    email,
    password,
    passwordConfirm,
    firstName,
    lastName,
    street,
    number,
    zip,
    country
  } = data;
  const countries = [
    'Germany',
    'Austria',
    'Switzerland'
  ];
  // Edit handler
  const handleEdit = useCallback(() => {
    dispatch(actions.setEdit(true));
  }, [dispatch]);
  // Form value handler
  const handleValue = useCallback((field) => (e) => {
    const value = e.target.value ? e.target.value : e.target.checked;
    const form = {
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
      firstName: firstName,
      lastName: lastName,
      street: street,
      number: number,
      zip: zip,
      country: country
    };

    switch(field) {
      case 'email':
        form.email = value;
        break;

      case 'password':
        form.password = value;
        break;

      case 'passwordConfirm':
        form.passwordConfirm = value;
        break;

      case 'firstName':
        form.firstName = value;
        break;

      case 'lastName':
        form.lastName = value;
        break;

      case 'street':
        form.street = value;
        break;

      case 'number':
        form.number = value;
        break;

      case 'zip':
        form.zip = value;
        break;

      case 'country':
        form.country = value;
        break;

      default:
    }

    dispatch(actions.setData(form));
  }, [
    dispatch,
    email,
    password,
    passwordConfirm,
    firstName,
    lastName,
    street,
    number,
    zip,
    country
  ]);
  // Form validation handler
  const handleValidation = useCallback(() => {
    const error = {
      email: 'Enter a valid email address',
      password: 'Enter a valid password',
      passwordConfirm: 'Minimum 8 chars, 1 uppercase, lowercase, number & special (.-_@$!%*?&)',
      firstName: 'Enter a valid first name',
      lastName: 'Enter a valid last name',
      street: 'Enter a valid street name',
      number: 'Enter a valid street number',
      zip: 'Enter a valid ZIP code',
      country: 'Select a country'
    };
    const emptyError = {
      error: false,
      message: ''
    };
    let valid = false;

    // Exceptions check
    if (email === '') {
      dispatch(actions.setException('email', {
        error: true,
        message: error.email
      }));
    } else {
      if (!patternEmail.test(email)) {
        dispatch(actions.setException('email', {
          error: true,
          message: error.email
        }));
      } else {
        dispatch(actions.setException('email', emptyError));
      }
    }
    if (password === '') {
      dispatch(actions.setException('password', {
        error: true,
        message: error.password
      }));
    } else {
      if (!patternPassword.test(password)) {
        batch(() => {
          dispatch(actions.setException('password', {
            error: true,
            message: error.password
          }));
          dispatch(actions.setStrength('weak'));
        });
      } else {
        batch(() => {
          dispatch(actions.setException('password', emptyError));
          dispatch(actions.setStrength('strong'));
        });
      }
    }
    if (passwordConfirm === '') {
      dispatch(actions.setException('passwordConfirm', {
        error: true,
        message: error.passwordConfirm
      }));
    } else {
      if (!patternPassword.test(passwordConfirm)) {
        batch(() => {
          dispatch(actions.setException('passwordConfirm', {
            error: true,
            message: error.passwordCofirm
          }));
          dispatch(actions.setStrength('weak'));
        });
      } else if (password !== passwordConfirm) {
        batch(() => {
          dispatch(actions.setException('passwordConfirm', {
            error: true,
            message: 'Confirmation different from password'
          }));
        });
      } else {
        batch(() => {
          dispatch(actions.setException('passwordConfirm', emptyError));
          dispatch(actions.setStrength('strong'));
        });
      }
    }
    if (firstName === '') {
      dispatch(actions.setException('firstName', {
        error: true,
        message: error.firstName
      }));
    } else {
      if (!patternText.test(firstName)) {
        dispatch(actions.setException('firstName', {
          error: true,
          message: error.firstName
        }));
      } else {
        dispatch(actions.setException('firstName', emptyError));
      }
    }
    if (lastName === '') {
      dispatch(actions.setException('lastName', {
        error: true,
        message: error.lastName
      }));
    } else {
      if (!patternText.test(lastName)) {
        dispatch(actions.setException('lastName', {
          error: true,
          message: error.lastName
        }));
      } else {
        dispatch(actions.setException('lastName', emptyError));
      }
    }
    if (street === '') {
      dispatch(actions.setException('street', {
        error: true,
        message: error.street
      }));
    } else {
      if (!patternText.test(street)) {
        dispatch(actions.setException('street', {
          error: true,
          message: error.street
        }));
      } else {
        dispatch(actions.setException('street', emptyError));
      }
    }
    if (number === 0) {
      dispatch(actions.setException('number', {
        error: true,
        message: error.number
      }));
    } else {
      dispatch(actions.setException('number', emptyError));
    }
    if (zip === 0) {
      dispatch(actions.setException('zip', {
        error: true,
        message: error.zip
      }));
    } else {
      dispatch(actions.setException('zip', emptyError));
    }
    if (country === '') {
      dispatch(actions.setException('country', {
        error: true,
        message: error.country
      }));
    } else {
      dispatch(actions.setException('country', emptyError));
    }
    if ((email !== '') &&
    (password !== '') &&
    (passwordConfirm !== '') &&
    (firstName !== '') &&
    (lastName !== '') &&
    (street !== '') &&
    (number !== '') &&
    (zip !== '') &&
    (!exception['email'].error) &&
    (!exception['password'].error) &&
    (!exception['passwordConfirm'].error) &&
    (!exception['firstName'].error) &&
    (!exception['lastName'].error) &&
    (!exception['street'].error) &&
    (!exception['number'].error) &&
    (!exception['zip'].error)) {
      valid = true;
    }

    return valid;
  }, [
    dispatch,
    email,
    password,
    passwordConfirm,
    firstName,
    lastName,
    street,
    number,
    zip,
    country,
    exception
  ]);
  // Save handler
  const handleSave = () => {
    // Validation check
    if (handleValidation()) {
      fetch('/save.json')
      .then(checkStatus)
      .then((response) => response.json())
      .then((data) => {
        batch(() => {
          dispatch(actions.setNotification(data.success));
          dispatch(actions.setEdit(false));
        });

        setTimeout(() => {
          dispatch(actions.setNotification(''));
        }, 3000);
      });
    }
  };

  return (
    /* Form Start */
    <section className="form">
      <h6>User Form</h6>
      {/* Container Start */}
      <div className="form__container">
        {/* Form Start */}
        <form
          className="container__form"
          name="form-user"
          method="POST"
          encType="application/x-www-form-urlencoded"
        >
          {/* Account Tab Start */}
          {account &&
            <>
              <div className="form__fields">
                <label className="fields__label" htmlFor="email">
                  Email *
                  <input
                    id="email"
                    className="label__field"
                    type="email"
                    name="email"
                    tabIndex={201}
                    placeholder="Enter an email"
                    disabled={edit ? false : true}
                    value={email}
                    onChange={handleValue('email')}
                    onBlur={handleValidation}
                    required
                    autoComplete="email"
                  />
                  <span className={clsx(
                    'label__error',
                    {
                      ['hidden']: !exception['email'].error
                    }
                  )}>
                    {exception['email'].message}
                  </span>
                </label>
              </div>
              <div className="form__fields">
                <label className="fields__label" htmlFor="password">
                  Password
                  <input
                    id="password"
                    className="label__field"
                    type="password"
                    name="password"
                    tabIndex={202}
                    placeholder="Enter a password"
                    disabled={edit ? false : true}
                    value={password}
                    onChange={handleValue('password')}
                    onBlur={handleValidation}
                    autoComplete="current-password"
                  />
                  <span className={clsx(
                    'label__error',
                    {
                      ['hidden']: !exception['password'].error
                    }
                  )}>
                    {exception['password'].message}
                  </span>
                </label>
              </div>
              <div className="form__fields">
                <label className="fields__label" htmlFor="passwordConfirm">
                  Password repeat
                  <input
                    id="passwordConfirm"
                    className="label__field"
                    name="passwordConfirm"
                    type="password"
                    tabIndex={203}
                    placeholder="Repeat your password"
                    disabled={edit ? false : true}
                    value={passwordConfirm}
                    onChange={handleValue('passwordConfirm')}
                    onBlur={handleValidation}
                    autoComplete="current-password"
                  />
                  <span className={clsx(
                    'label__error',
                    {
                      ['hidden']: !exception['passwordConfirm'].error
                    }
                  )}>
                    {exception['passwordConfirm'].message}
                  </span>
                </label>
              </div>
              <div className={clsx(
                'form__indicator',
                {
                  ['hidden']: !edit
                }
              )}>
                Password strength:
                <span className={clsx(
                  'indicator__label',
                  {
                    ['indicator__label--green']: strength === 'strong',
                    ['indicator__label--red']: strength === 'weak'
                  }
                )}>
                  {password === '' ?
                    '-' :
                    strength
                  }
                </span>
              </div>
            </>
          }
          {/* Account Tab End */}
          {/* Profile Tab Start */}
          {profile &&
            <>
              <div className="form__fields">
                <label className="fields__label" htmlFor="first-name">
                  First Name *
                  <input
                    id="first-name"
                    className="label__field"
                    type="text"
                    name="firstName"
                    tabIndex={301}
                    placeholder="Enter your first name"
                    disabled={edit ? false : true}
                    required
                    value={firstName}
                    onChange={handleValue('firstName')}
                    onBlur={handleValidation}
                    autoComplete="name"
                  />
                  <span className={clsx(
                    'label__error',
                    {
                      ['hidden']: !exception['firstName'].error
                    }
                  )}>
                    {exception['firstName'].message}
                  </span>
                </label>
              </div>
              <div className="form__fields">
                <label className="fields__label" htmlFor="last-name">
                  Last Name *
                  <input
                    id="last-name"
                    className="label__field"
                    type="text"
                    name="lastName"
                    tabIndex={302}
                    placeholder="Enter your last name"
                    disabled={edit ? false : true}
                    required
                    value={lastName}
                    onChange={handleValue('lastName')}
                    onBlur={handleValidation}
                    autoComplete="lname"
                  />
                  <span className={clsx(
                    'label__error',
                    {
                      ['hidden']: !exception['lastName'].error
                    }
                  )}>
                    {exception['lastName'].message}
                  </span>
                </label>
              </div>
              <div className="form__fields">
                <label className="fields__label" htmlFor="street">
                  Street *
                  <input
                    id="street"
                    className="label__field"
                    type="text"
                    name="street"
                    tabIndex={303}
                    placeholder="Enter your street"
                    disabled={edit ? false : true}
                    required
                    value={street}
                    onChange={handleValue('street')}
                    onBlur={handleValidation}
                    autoComplete="street-address"
                  />
                  <span className={clsx(
                    'label__error',
                    {
                      ['hidden']: !exception['street'].error
                    }
                  )}>
                    {exception['street'].message}
                  </span>
                </label>
              </div>
              <div className="form__fields form__fields--numbers">
                <label className="fields__label" htmlFor="number">
                  Number *
                  <input
                    id="number"
                    className="label__field"
                    type="number"
                    name="number"
                    min="1"
                    tabIndex={304}
                    disabled={edit ? false : true}
                    required
                    value={number}
                    onChange={handleValue('number')}
                    onBlur={handleValidation}
                  />
                  <span className={clsx(
                    'label__error',
                    {
                      ['hidden']: !exception['number'].error
                    }
                  )}>
                    {exception['number'].message}
                  </span>
                </label>
                <label className="fields__label" htmlFor="zip">
                  ZIP *
                  <input
                    id="zip"
                    className="label__field"
                    type="number"
                    name="zip"
                    min="1"
                    tabIndex={305}
                    disabled={edit ? false : true}
                    required
                    value={zip}
                    onChange={handleValue('zip')}
                    onBlur={handleValidation}
                    autoComplete="postal-code"
                  />
                  <span className={clsx(
                    'label__error',
                    {
                      ['hidden']: !exception['zip'].error
                    }
                  )}>
                    {exception['zip'].message}
                  </span>
                </label>
              </div>
              <div className="form__fields">
                <label className="fields__label" htmlFor="country">
                  Country *
                  <select
                    id="country"
                    className="label__field"
                    name="country"
                    tabIndex={306}
                    disabled={edit ? false : true}
                    required
                    value={country}
                    onChange={handleValue('country')}
                    onBlur={handleValidation}
                  >
                    <option value="">Select your country</option>
                    {countries.map((location, i) => (
                      <option
                        key={`location-${i}`}
                        className="field_option"
                        value={location}
                      >
                        {location}
                      </option>
                    ))}
                  </select>
                  <span className={clsx(
                    'label__error',
                    {
                      ['hidden']: !exception['country'].error
                    }
                  )}>
                    {exception['country'].message}
                  </span>
                </label>
              </div>
            </>
          }
          {/* Profile Tab End */}
          {/* Actions Start */}
          <div className="form__actions">
            {!edit ?
              <button
                className="actions__button"
                onClick={handleEdit}
              >
                Edit
              </button> :
              <input
                className="actions__button"
                type="submit"
                form="form-user"
                value="Save"
                tabIndex={204}
                onClick={handleSave}
              />
            }
          </div>
          {/* Actions End */}
        </form>
        {/* Form End */}
      </div>
      {/* Container End */}
    </section>
    /* Form End */
  );
};

// Properties validation
Form.propTypes = {
  account: PropTypes.bool.isRequired,
  profile: PropTypes.bool.isRequired
};

// Module export
export default Form;
// Module End

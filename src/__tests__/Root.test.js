// Module Start
// JS Imports
import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Root from '../components/Root';
import App from '../components/App';
import Form from '../components/Form';
import { setEdit, setNotification, setException } from '../actions/form';
import * as notification from '../../public/save.json';

// Unit Testing
describe('App unit tests', () => {
  test('It renders the root App without crashing', () => {
    const wrapper = shallow(<Root />);

    expect(wrapper.find(App)).toHaveLength(1);
  });
});
// Snapshot testing
describe('App snapshot test', () => {
  test('It renders the root App without crashing', () => {
    const wrapper = shallow(<Root />);

    expect(toJson(wrapper)).toMatchInlineSnapshot(`
      <Provider
        store={
          Object {
            "dispatch": [Function],
            "getState": [Function],
            "replaceReducer": [Function],
            "subscribe": [Function],
            Symbol(observable): [Function],
          }
        }
      >
        <App>
          <Menu />
          <Profile />
        </App>
      </Provider>
    `);
  });
});
// Integration Testing
describe('Form integration tests', () => {
  const mockStore = configureStore([thunk]);
  const formState = {
    form: {
      edit: false,
      data: {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        passwordConfirm: '',
        street: '',
        number: 0,
        zip: 0,
        country: '',
      },
      strength: 'weak',
      exception: {
        email: {
          error: false,
          message: '',
        },
        firstName: {
          error: false,
          message: '',
        },
        lastName: {
          error: false,
          message: '',
        },
        password: {
          error: false,
          message: '',
        },
        passwordConfirm: {
          error: false,
          message: '',
        },
        street: {
          error: false,
          message: '',
        },
        number: {
          error: false,
          message: '',
        },
        zip: {
          error: false,
          message: '',
        },
        country: {
          error: false,
          message: '',
        },
      },
      notification: '',
    },
  };
  let store = null;
  // Form tests setup
  const testSetupForm = (state) => {
    store = mockStore(state);

    store.dispatch = jest.fn();

    const wrapper = mount(
      <Provider store={store}>
        <Form account profile={false} />
      </Provider>,
    );

    return wrapper;
  };

  test('It accepts account & profile props', () => {
    const wrapper = testSetupForm(formState);

    expect(wrapper.find(Form).props().account).toEqual(true);
    expect(wrapper.find(Form).props().profile).toEqual(false);
  });
  test('It enables the form filling', () => {
    const wrapper = testSetupForm(formState);
    const button = wrapper.find('.actions__button');

    button.simulate('click');

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(setEdit(true));
    expect(button.text()).toEqual('Edit');
  });
  test('It saves the form data', () => {
    formState.form.edit = true;

    const wrapper = testSetupForm(formState);
    const button = wrapper.find('.actions__button');
    const fields = wrapper.find('.label__field');

    button.simulate('click');
    fields.forEach((field) => {
      let value = '';

      switch (field.prop('name')) {
        case 'email':
          value = 'loremipsum@fakemail.com';
          break;

        case 'password':
        case 'passwordConfirm':
          value = 'FakePassword!101';
          break;

        case 'zip':
        case 'number':
          value = 12345;
          break;

        default:
          value = 'foo';
      }

      field.simulate('change', {
        target: {
          value,
        },
      });
    });

    expect(store.dispatch).toHaveBeenCalledTimes(12);
    expect(button.prop('value')).toEqual('Save');
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});
// Module End

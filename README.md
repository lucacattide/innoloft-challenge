# Task

Create a [React](https://reactjs.org) application that provides the features described in this document.
The basic requests of the task must be fulfilled. **Further creative approaches are of course always desired and a great bonus.**

Good luck and have fun!

## Submitting

Just fork the repository and add your solutions to your fork, so that we can have a look at your work. Afterwards create a merge/pull request.
Please also note down in the end how many hours it took to complete (roughly), as this can be an interesting matter of discussion.

Thank you very much!

## Setting up the project

You can use [create-react-app](https://facebook.github.io/create-react-app/) in order to kickstart your assignment.
If you prefer, you can setup [webpack](https://webpack.github.io) yourself as well, or use [Parcel](https://parceljs.org).

## Description

You are developing a new dashboard. Your task is to create a new dashboard with which the user can manage his account.
Of course, it is not supposed to be complete. We would like to limit ourselves to just one excerpt.

In this scenario, the form used to modify the user profile information has to be created.
The form contains two tabs, as specified below and shown in the mockup.

The user wants to be able to switch between the two tabs and to enter the following information:

In the first tab (Account Settings):

- Change e-mail address
- Change Password
- The password must have certain properties:
  - "Password" and "Password repeat" fields need to be identical (including an indicator for this equality)
  - The password field should accept Uppercase letters, lowercase letters, numbers and special characters
  - A password strength indicator should be implemented
- Button to update the user data

In the second tab (User Information):

- Change first name
- Change Last Name
- Change address (street, house number, postal code)
- Change country (Germany, Austria, Switzerland are available)
- Button to update the user data

The form also needs a button to submit the information through a fake AJAX call.

It is important that the user receives feedback if his input is incorrect, correct, his data has not been saved and his data has been successfully saved.

The layout also contains a header and a sidebar, which are not functioning in this test.

## Layout

Please do not use Bootsrap or similar frameworks for CSS, just create new CSS from scratch.

Please note that this dashboard should be responsive, and **be usable on mobile and tablets** as well.

When styling, you can decide for yourself what this dashboard should look like, make it look as nice as you can.

However, bonus points are awarded if the styles resemble those of [innoloft.com](https://innoloft.com/home) and could fit as seamlessly as possible within that website.

## Code structure

The application should at the very least use the following:

- React.js framework
- A CSS pre-compiler (SASS, LESS, SCSS) or other CSS approaches (CSS modules, Styled components)
- Redux

You can use external modules like [informed](https://joepuzzo.github.io/informed/), [formik](https://jaredpalmer.com/formik/), and whatever you think is necessary.

In React, the application is to be assembled into suitable, reusable React components.

Possible components would be:

- Header
- Footer
- User
- UserInputTabs
- Aside

It is however up to you to provide the structure you think works best in a production-level app.

Bonus points would be awarded for setting up and using linters (eslint, stylelint) and Prettier.

## Developer Notes

- Features:
  - Code linting/formatting (ESLint/Prettier/Beautify)
  - CSS pre-processing (SASS) with BEM convention
  - Webfonts (Google Fonts, Font Awesome)
  - Data fetching (Isomorphic Unfetch)
  - HTTP/2:
    - Prefetching
    - Preloading
  - SEO:
    - File naming conventions
    - Meta tags
    - Structured data
    - robots.txt
    - Sitemap
- The main layout is boxed in order to resemble the official prototype website - which is currently different from the provided mockup
- Protocols are omitted in ```src``` paths as general best-practice to support both URLs with/without SSL

More details are indicated inside the code comments - where needed. For any further in-depth consideration, please contact me on info@lucacattide.dev or feel free to open an issue.

### ETD

Orientatively 8 hours, including: setup, configurations, tweaks.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) merged with some custom configurations from my [react-boilerplate](https://github.com/lucacattide/react-boilerplate).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### Code Coverage

![Branches](./coverage/badge-branches.svg "Coverage - Branches") ![Branches](./coverage/badge-functions.svg "Coverage - Functions") ![Branches](./coverage/badge-lines.svg "Coverage - Lines") ![Branches](./coverage/badge-statements.svg "Coverage - Statements")

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

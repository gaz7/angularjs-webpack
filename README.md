# UX Code Challenge - Gareth Cole

## Intro
I've used Angular JS for this exercise, as a chance to get experience with the technology. This is my first time using it, so there will be many places for improvement.

The project has been built using the [angularjs-webpack](https://github.com/preboot/angularjs-webpack) starter kit. One of the reasons behind this choice was to gain further [Webpack](https://webpack.js.org/) experience.

This code is available at https://github.com/gaz7/request-for-quote

## Instructions
```
git clone git@github.com:gaz7/request-for-quote.git
npm install
npm start
```
Application will run at [http://localhost:7777/](http://localhost:7777/)

To run unit tests:
```
npm test
```

## Notes / Assumptions
* I have limited Photoshop access, so styling is mostly gained from looking at the png and guessing colors/gradients etc.
* The Price service would normally be asynchronous getting data via an API call.
* It was not obvious what should be clicked to toggle the component open/closed, so that functionality has been omitted for now.
* BEM syntax has been used for CSS
* No obvious way to make the 'n' button italic just from data, so left for now.
* Component size is allowed to scale to contents. This assumption is because I don't know the component's context in a larger application.
* A basic sans-serif font is used for now. Normally a discussion on font stack would be had with the designer.

## Given more time, how would you improve your solution?
* Two basic unit tests have been added. More would be added with additional time.
* [ESLint](https://eslint.org/) and [Stylelint](https://stylelint.io/) would be added with more time for code quality.
* More time would be spent organising SASS e.g. common variables for gradients
* More time would be spent on the build process and optimising the production build (eg CSSNano)

## How would you distribute your component to other teams?
* As I've limited Angular experience, I'm not sure the best way to package components for reuse. I've taken a generic approach of keeping code, style and unit test files associated with this component in the same folder.

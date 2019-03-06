# obj3d

> Ian Gillingham: Test Framework for 3D OBJ Images using Vue.js
> in preparation for OBJ image metrics exercise.

## Overview
The objective is to determine the distance between the pupils (centres).

The JavaScript library: Three.js has been suggested as a basis for the task.
The Three library appears to be quite straightforward and fairly agnostic with regard to the application environment.

In an effort to expedite the development process, a sandbox framework has been constructed
which facilitates a self contained scene within a bespoke canvas component.
The framework selected is Vue.js. Initially React.js was tried, but DOM rendering within react 
didn't fit well with Three.js.

Vue.js is a new framework to this developer, but the essentials were learned within a couple of hours.
The Three.js scene could be neatly contained within my ThreeCanvas component.

Presently, the default page is just a stepping-stone to other pages, which contain various test components.
Each page will be navigable via a front-page menu, but until then, simply navigate by url to http://localhost/#/3d
if running on a server, such as and IDE debugger, of by navigating directly to the file:///<fqdn to>index.html

The /3d page simply renders an animated cube which has been created using Three.js scene primitives.
The next stage is to read a OBJ file and render the 3D images, with user interaction and measurement tools.


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Ref


https://www.crf.org/tct-2019/program/agenda/course-directors-faculty
https://www.crf.org/tct-2019/program/agenda/tct-at-a-glance

## Deploy


## Github Pages

Github pages automatically looks for an index.html. It's best to setup a deploy folder called dist/build

Install the CLI this will handle authentication for you.
https://github.com/cli/cli#installation

We need to use this because the following command doesn't work with Github Desktop
````
git subtree push --prefix dist origin gh-pages
````
If you get an error try removing "dist" from git ignore
In this example dist is our directory

### React

in package.json set the prefix of your build files with
````
 "homepage": "https://gitname.github.io/react-gh-pages",
````

### Digital Ocean

You need to configure App Settings -> App Spec
## Ref

https://www.crf.org/tct-2019/program/agenda/course-directors-faculty
https://www.crf.org/tct-2019/program/agenda/tct-at-a-glance

## Deploy


### Github Pages

Github pages automatically looks for an index.html. It's best to setup a deploy folder called dist/build

1. Install the CLI this will handle authentication for you.
https://github.com/cli/cli#installation

2. Set Homepage
````
 "homepage": "https://gitname.github.io/react-gh-pages",
````

2. Create Subtree - 
````
git subtree push --prefix dist origin gh-pages
````

If you get an error try removing "dist" from git ignore
In this example dist is our directory

3. Deploy on Github.com 
In github.com > pages > select branch gh-pages




#### Additional Note

If you are using react router you need to use hashRouther instead because git only servers static



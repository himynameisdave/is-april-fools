<div align="center" margin="0 auto 20px">
    <h1>is-april-fools</h1>
    <p style="font-style: italic;">🎉 Micro library to check if it is April 1st.</p>
    <div>
        <a href='https://travis-ci.org/himynameisdave/is-april-fools'>
            <img src="https://api.travis-ci.org/himynameisdave/is-april-fools.svg?branch=master" alt="Travis Badge" />
        </a>
        <a href='https://coveralls.io/github/himynameisdave/is-april-fools?branch=master'>
            <img src='https://coveralls.io/repos/github/himynameisdave/is-april-fools/badge.svg?branch=master' alt='Coverage Status' />
        </a>
        <a href="https://bundlephobia.com/result?p=is-april-fools">
            <img src="https://img.shields.io/bundlephobia/min/is-april-fools.svg" alt="Bundle size (minified)" />
        </a>
        <a href="https://www.npmjs.com/package/is-april-fools">
            <img src="https://img.shields.io/npm/dt/is-april-fools.svg" alt="Downloads">
        </a>
    </div>
</div>

---

Simple utility which will return `true` if the current date is April 1st. This allows your app/program/script/system to do something on April fools (such as conditionally showing some April fools joke UI).


### Installation

This package is available on NPM, and you can install it with `npm` or `yarn`:

```
npm install is-april-fools

yarn add is-april-fools
```

Add the `-S` flag if you want to save it to the `"dependencies"` section of your `package.json`.


**Browser/UMD**

If you want to just import this library directly in the browser, you can add the following script tag:

```html
<script src="https://unpkg.com/is-april-fools/lib/index.umd.js" />

```

This will expose a `isAprilFools` function in the global scope.

### Usage

```js
import isAprilFools from 'is-april-fools';

if (isAprilFools()) {
    console.log('🎉 Happy April Fools!');
} else {
    console.log('😞 Just another boring day...');
}
```

#### Note

This package uses the current date from the machine it is running on, meaning if this is running on a server or in a lambda somewhere, you may get unexpected results or some weird edge cases.

### Contributing

Feel free to [file an issue](https://github.com/himynameisdave/is-april-fools/issues/new) or open a pull request.

---

_👌 Built by [Dave Lunny](http://himynameisdave.com) in the wonderful year 2019._

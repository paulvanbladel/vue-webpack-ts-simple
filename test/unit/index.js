import Vue from 'vue';
Vue.config.productionTip = false;

// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind');

// require all test files (files that ends with .spec.js)
var testsContext = require.context('./specs', true, /\.spec.ts$/);
testsContext.keys().forEach(testsContext);

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
var  srcContext = require.context('../../src', true, /^\.\/(?!main(\.ts)?$)/);
srcContext.keys().forEach(srcContext);




// requireAll((<any>require).context('./', true, /spec.ts$/));
// function requireAll(r: any): any {
//     console.log(r.keys());
//     r.keys().forEach(r);
// }

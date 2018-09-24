// This file isn't transpile, so must use COmmonJS and ES5

// Register babel to transpile before our tests run.
require('babel-register')();

// DIsable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};

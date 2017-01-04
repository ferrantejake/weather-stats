'use strict';

// Represents the application instance (module).
// Note that I am specifying the lib folder here.
// This is because at runtime we want the program
// to look in lib for the built application. This
// is because when we build the application, the
// src folder TypeScript contents are transpiled
// into JavaScript moved to the lib directory.
const app = require('./lib/app');

// Exports the application instance as the module
// that will be acquired when this file is called
// with require().
module.export = app;
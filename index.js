'use strict';
const babel = require('babel-core');

module.exports = ()=> ({
  from: ['js'],
  to: ['js'],
  contentType: 'application/javascript',
  transform: (input, ctxt)=> babel.transform(input, {"presets": ["es2015"]}).code,
})

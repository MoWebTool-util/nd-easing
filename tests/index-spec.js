'use strict';

var expect = require('expect.js');
var $ = require('jquery');
var Easing = require('../index');

$.extend($.easing, Easing);

/*globals describe,it*/

describe('Easing', function() {

  it('add easing function', function() {
    expect($.easing.linear).to.be.ok();
    expect($.easing.easeOutStrong).to.be.ok();
  });

});

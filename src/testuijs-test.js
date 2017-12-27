import QUnit from 'steal-qunit';
import plugin from './testuijs';

QUnit.module('testuijs');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the testuijs plugin');
});

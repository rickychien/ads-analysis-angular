define(['app'], function(app) {
  'use strict';

  app.factory('Item', ['$resource', function($resource) {
    return $resource('api/:type.json', {}, {
      get: { method: 'GET', isArray: true }
    });
  }]);

  app.factory('ItemDetail', ['$resource', function($resource) {
    return $resource('api/:type/:id.json', {}, {
      get: { method: 'GET', isArray: true }
    });
  }]);

});

define(['app'], function(app) {
  'use strict';

  app.factory('Service', ['$resource', function($resource) {
    return $resource('api/:type.json', {}, {
      get: { method: 'GET', isArray: true }
    });
  }]);

});

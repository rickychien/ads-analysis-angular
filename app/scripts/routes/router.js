define([
  'app',
  'controllers/tabsController',
  'controllers/chartController',
  'controllers/gridController',
  'controllers/mapController',
], function(app) {
  'use strict';

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/chart/:type', {
        templateUrl: './views/chart.html',
        controller: 'ChartController'
      }).
      when('/grid/:type', {
        templateUrl: './views/grid.html',
        controller: 'GridController'
      }).
      when('/map/:type', {
        templateUrl: './views/map.html',
        controller: 'MapController'
      }).
      otherwise({
        redirectTo: '/grid/notifications',
      });
  }]);

});

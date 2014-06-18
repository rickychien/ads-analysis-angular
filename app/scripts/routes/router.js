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
      when('/chart', {
        templateUrl: './views/chart.html',
        controller: 'ChartController'
      }).
      when('/grid', {
        templateUrl: './views/grid.html',
        controller: 'GridController'
      }).
      when('/map', {
        templateUrl: './views/map.html',
        controller: 'MapController'
      }).
      otherwise({
        redirectTo: '/grid'
      });
  }]);

});

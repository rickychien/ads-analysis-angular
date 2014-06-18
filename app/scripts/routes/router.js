define([
  'app',
  'controllers/app-controller'
], function(app) {
  'use strict';

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        redirectTo: '/grid'
      }).
      when('/chart', {
        templateUrl: './views/chart.html',
        controller: 'ChartCtrl'
      }).
      when('/grid', {
        templateUrl: './views/grid.html',
        controller: 'GridCtrl'
      }).
      when('/map', {
        templateUrl: './views/map.html',
        controller: 'MapCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

});

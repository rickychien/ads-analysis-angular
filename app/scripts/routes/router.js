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
        templateUrl: './chart.html',
        controller: 'ChartCtrl'
      }).
      when('/grid', {
        templateUrl: './grid.html',
        controller: 'GridCtrl'
      }).
      when('/map', {
        templateUrl: './map.html',
        controller: 'MapCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });;
  }]);

});

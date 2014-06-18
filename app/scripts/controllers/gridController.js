define(['app', 'services/service'], function(app) {
  'use strict';

  app.controller('GridController', ['$scope', 'Service',
    function($scope, Service) {
      $scope.items = Service.get({
        type: 'notifications'
      });

      $scope.getCountableTitles = function(items) {
        var titles = [],
            index;

        for (var key in items) {
          if (items.hasOwnProperty(key) && key.indexOf('_count') > -1) {
            key = key[0].toUpperCase() + key.slice(1);
            index = key.indexOf('_');
            key = key.substring(0, (index === -1) ? key.length : index);
            titles.push(key);
          }
        }

        return titles;
      };
    }
  ]);

});

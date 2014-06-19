define(['app', 'services/service'], function(app) {
  'use strict';

  app.controller('GridController', ['$scope', '$routeParams', 'Service',
    function($scope, $routeParams, Service) {
      $scope.items = Service.get({
        type: $routeParams.type
      });

      $scope.getRate = function(item) {
        return (item.readCount / ((item.readCount + item.unreadCount) || 1) *
          100).toFixed(2);
      };
    }
  ]);

});

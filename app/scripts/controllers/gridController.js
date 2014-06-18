define(['app', 'services/service'], function(app) {
  'use strict';

  app.controller('GridController', ['$scope', 'Service',
    function($scope, Service) {
      $scope.items = Service.get({
        type: 'notifications'
      });

      $scope.getRate = function(item) {
        return (item.readCount / ((item.readCount + item.unreadCount) || 1) *
          100).toFixed(2);
      };
    }
  ]);

});

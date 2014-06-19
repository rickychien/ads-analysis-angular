define(['app'], function(app) {
  'use strict';

  app.controller('TabsController', ['$scope', '$routeParams',
    function($scope, $routeParams) {
      $scope.tabs = [
        { type: '#/chart/', label: 'Chart' },
        { type: '#/grid/', label: 'Grid' },
        { type: '#/map/', label: 'Map' }
      ];

      $scope.selectedTab = $scope.tabs[1];

      $scope.setSelectedTab = function(tab) {
        $scope.selectedTab = tab;
      };

      $scope.getTabClass = function(tab) {
        if ($scope.selectedTab === tab) {
          return 'active';
        } else {
          return '';
        }
      };

      $scope.getTabUrl = function(tab) {
        return tab.type + $routeParams.type;
      };
    }
  ]);

});

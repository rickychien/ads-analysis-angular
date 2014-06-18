define(['app'], function(app) {
  'use strict';

  app.controller('TabsController', function($scope) {
    $scope.tabs = [
      { url: '#/chart', label: 'Chart' },
      { url: '#/grid', label: 'Grid' },
      { url: '#/map', label: 'Map' }
    ];

    $scope.selectedTab = $scope.tabs[1];

    $scope.setSelectedTab = function(tab) {
      $scope.selectedTab = tab;
    };

    $scope.tabClass = function(tab) {
      if ($scope.selectedTab === tab) {
        return 'active';
      } else {
        return '';
      }
    };
  });

});

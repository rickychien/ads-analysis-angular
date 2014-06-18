define(['app'], function(app) {
  'use strict';

  app.controller('ChartCtrl', function() {

  });

  app.controller('GridCtrl', function() {

  });

  app.controller('MapCtrl', function() {

  });

  app.controller('TabsCtrl', function($scope) {
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

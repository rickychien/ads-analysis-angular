define(['app', 'services/service'], function(app) {
  'use strict';

  app.controller('GridController', [
    '$scope',
    '$routeParams',
    'Item',
    'ItemDetail',
    function($scope, $routeParams, Item, ItemDetail) {
      var type = $routeParams.type;

      $scope.items = Item.get({
        type: type
      });

      $scope.itemDetail = {};

      $scope.getRate = function(item) {
        return (item.readCount / ((item.readCount + item.unreadCount) || 1) *
          100).toFixed(2);
      };

      $scope.queryItemDetail = function(item) {
        var itemId = item.id,
            itemDetail = $scope.itemDetail;

        if (itemDetail[itemId]) {
          return;
        }

        itemDetail[itemId] = ItemDetail.get({
          type: type,
          id: itemId
        });
      };
    }
  ]);

});

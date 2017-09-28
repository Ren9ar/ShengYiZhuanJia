(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopEditCtrl',['$scope','$stateParams','localStorageService',function ($scope,$stateParams,localStorageService) {
    $scope.title = $stateParams.title;
    $scope.property = $stateParams.property;
    $scope.shop = localStorageService.get('Shop',{
      phone:'15959155146',
      createTime:'2017-9-28 15:37:30',
      name:'',
      ab:'',
      boss:'',
      email:'',
      shopPhone:''
    });
    $scope.save = function () {
      localStorageService.update('Shop',$scope.shop);
    };
  }]);
})();

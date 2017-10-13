(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
    $scope.shop={};

    $scope.editShop=function (titleValue,propertyValue) {
      $state.go('app.shop-edit',{
        title:titleValue,
        property:propertyValue
      });
    };

    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        name:'施昱炜',
        name1:'施昱炜',
        phone:'15959155146',
        phone1:'12345678',
        createTime:'2017-9-28 15:37:30',
        email:'554598323@qq.com',
        hylx:'111'
      });
    });
  }])
})();

(function () {
  'use strict';
  angular.module('syzj.services')
    .factory('CategoryService',['$rootScope',function($rootScope){
      var service={};
      service.activeCategory={
        ID:5,
        Name:'默认类别'
      };
      service.updateCategory=function(value){
        //service.activeCategory=value;
        service.activeCategory=angular.copy(value);
        //angular.copy(value,service.activeCategory);
        $rootScope.$broadcast('CategoryUpdate',service.activeCategory);
      };
      return service;
    }]);
})();

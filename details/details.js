(function(angular){
  'use strict';
  // 电影详情页模块
  var app = angular.module('moviecat.details',['ngRoute','moviecat.jsonp']);

  // 路由配置
  app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/details/:id',{
      templateUrl:'./details/details.html',
      controller:'detailsController'
    })
  }]);
  // 创建控制器
  app.controller('detailsController',[
    '$scope',
    '$routeParams',
    'MyService',
    function($scope,$routeParams,MyService){

    MyService.jsonp('http://api.douban.com/v2/movie/subject/'+$routeParams.id
      ,{},function(arg){
        $scope.data=arg;
        $scope.$apply();
      });
  }]);
})(angular);
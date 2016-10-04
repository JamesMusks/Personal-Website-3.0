(function (angular) {
    "use strict";

    // start your ride
    var app = angular.module('moviecat',[
      'ngRoute',
      'moviecat.home_page',
      'moviecat.details',// 规则是先申请先匹配，先引用先匹配
      'moviecat.movielist',
      'moviecat.autoactive'
      ]);

    // 创建控制器
    app.controller('mainController',['$scope','$location','$route',function($scope,$location,$route){
       // 搜索
       $scope.query='';
       // /search/a
       $scope.search=function(){
         // $location.url('/search');
         $route.updateParams({movieType:'search',page:'1',q:$scope.query})
       }
    }]);
})(angular);
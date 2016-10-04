// 导航栏获取焦点
(function(angular){
  'use strict';
  // 1。创建模块
  var app = angular.module('moviecat.autoactive',[]);

  // 2.创建自定义指令
  app.directive('autoActive',['$location',function($location){
    return{
      // templateUrl:''
      // restrict
      // transclude // ng-transclude
      // scope

      link:function(scope,element,attributes){
        // 注册点击事件，让点击的元素获取样式，然后它的兄弟元素失去样式
        // element.on('click',function(){
        //   element.parent().children().removeClass('active');
        //   element.addClass('active');
        //   // element.
        // });
        scope.loca=$location;
        scope.$watch('loca.url()',function(now,old){
           // 判断锚值是否包含了a标签的href属性
           var hash = element.children()[0].hash.substr(1);
           // 判断是否包含
           // startsWith判断一个元素是否以另一个元素开始
           // endsWith 判断是否以另一个元素结束。
           console.log(hash);
           if(now.startsWith(hash)){
              element.parent().children().removeClass('active');
              element.addClass('active');
           }
        });
      }
    }
  }])
})(angular);
;
(function() {
  'use strict';

  angular.module('app').config([ '$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider.state('Home', {
      url : '/',
      templateUrl : 'views/home.html',
    // controller : 'HomeCtrl',
    // controllerAs : 'homeCtrl'
    });
  } ]);
})();

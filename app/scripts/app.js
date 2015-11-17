'use strict';

/**
 * @ngdoc overview
 * @name uicscheduleApp
 * @description
 * # uicscheduleApp
 *
 * Main module of the application.
 */
angular
  .module('uicscheduleApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

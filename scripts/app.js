   (function () {
     'use strict';

      angular.module('twitchApp', ['ngMaterial', 'ui.router'])
       .config(function ($mdThemingProvider, $stateProvider, 
                         $urlRouterProvider, $locationProvider) {

      $mdThemingProvider.theme('indigo')
        .primaryPalette('indigo')
        .accentPalette('pink');

      $urlRouterProvider.otherwise('/twitch');
      $stateProvider
        .state('twitch', {
          url: '/twitch',
          templateUrl: 'components/twitch.html',
          controller: 'twitchController as vm'
      
        })
    });

   })();
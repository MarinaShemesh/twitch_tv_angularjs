   (function () {
     'use strict';

      angular.module('twitchApp', ['ngMaterial', 'ui.router'])
       .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {               
           
              // $mdThemingProvider.theme('indigo')
              //   .primaryPalette('indigo')
              //   .accentPalette('pink');

              $urlRouterProvider.otherwise('/home'); //default but only with hash-bang
              $locationProvider.html5Mode(true);

                $stateProvider
                  .state('home', {
                    url: '/home',
                    templateUrl: 'components/twitch.html',
                    controller: 'twitchController as vm'
                  })
      
      });

   })();
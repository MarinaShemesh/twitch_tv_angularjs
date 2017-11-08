   (function () {
     'use strict';

      angular.module('twitchApp')
          .controller('TwitchController', TwitchController);

    
     TwitchController.$inject = ['$scope', 'twitchFactory'];
       function TwitchController ($scope, twitchFactory){
           
       const vm = this;
        vm.message = "Loading..."
         const channelList = ['castro_1021', 'freecodecamp', 'ESL_SC2', 'monstercat'];
          
          angular.forEach(channelList, function(channel){
           twitchFactory.getChannelInfo()//info from factory
            .then(function (data){
             console.log(data);
              });

          }); //end of forEach
          
        }//end of controller
 

   })();
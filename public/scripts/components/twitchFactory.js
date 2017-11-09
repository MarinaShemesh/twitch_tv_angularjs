   (function () {
     'use strict';

      angular.module('twitchApp')
      .factory('twitchFactory', twitchFactory);

      twitchFactory.$inject = ['$http', '$q'];
      function twitchFactory ($http, $q){
         
         return {

           getChannelInfo: function(channel){
             const clientID = 'c8a3wkkb56yqjhlcui7tcfyjvs65dy6';
             const twitchURL = 'https://api.twitch.tv/kraken/streams/';
             const channelURL = twitchURL + channel + '?client_id=' + clientID;
             const deferred = $q.defer();
              $http({
                method: "GET",
                url: channelURL
              })
              .then(function(data){
                deferred.resolve(data.data);
                console.log('data:', data);
                console.log('data.data:', data.data);
              })
              .catch(function(){
                deferred.reject("An error occured while fetching channels.");
              });

              return deferred.promise; 

         }
       }
     }

   })();
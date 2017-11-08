   (function () {
     'use strict';

      angular.module('twitchApp')
          .controller('twitchController', twitchController);

    
     twitchController.$inject = ['$scope', 'twitchFactory'];
       function twitchController ($scope, twitchFactory){
           
       const vm = this;
        // vm.message = "Loading..."
       
       vm.statusArray = [
        {name: 'All', value: ''},
        {name: 'Online', value: 'Online'},
        {name: 'Offline', value: 'Offline'}
            ];

       const channelList = ['castro_1021', 'freecodecamp', 'brunofin', 'ESL_SC2', 
                            'monstercat', 'mariokart8', 'extralife4kids', 'misterrogers', 
                            'thischanneldoesnotexist', 'comster404'];
          
          vm.channelInfoArray = [];

          angular.forEach(channelList, function (channel){
           const channelInfo = {
            name:channel,
            status:'Offline'
           };

           twitchFactory.getChannelInfo(channel)//info from factory
            .then(function (data){
             console.log('controllerData:', data);
             
              if(data.stream === undefined){
              channelInfo.status = 'Account Closed';
             }

              else if(data.stream !== null){
              channelInfo.status = 'Online';
              channelInfo.logo = data.stream.channel.logo;
              channelInfo.url = data.stream.channel.url;
              channelInfo.game = data.stream.game;
              channelInfo.gameStatus = data.stream.channel.status;
             }
             
             else {
              
             }
             vm.channelInfoArray.push(channelInfo);
        
              });

          }); //end of forEach

           // vm.twitchController();
          
        }//end of controller
 

   })();
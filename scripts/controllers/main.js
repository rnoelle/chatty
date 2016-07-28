'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {
    messageService.getMessages().then(function ( response ) {
      $scope.messages = response.data;
    });

    $scope.addMessage = function ( message ) {
      var username = window.prompt('Username');
      var profilepic = window.prompt('profilepic');
      console.log(message);
      if (message) {
        messageService.addMessage(message, username, profilepic).then(function ( response ) {
          $scope.messages = response.data;
        });
      }
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

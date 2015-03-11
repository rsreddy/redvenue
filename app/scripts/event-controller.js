angular.module('starter').controller('EventCtrl', ['$scope', '$stateParams', 'Events', EventCtrl]);

function EventCtrl($scope, $stateParams, Events) {
  var id = $stateParams.eventId;

  $scope.eventDetails = [];
  Events.getEventDetails(id).then(function(eventDetails){
    $scope.eventDetails = eventDetails;
  },
  function(statusCode){
    console.log("Failed to Load Event Details");
  }).finally(function(){

  });
}
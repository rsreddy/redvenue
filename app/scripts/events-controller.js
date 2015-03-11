angular.module('starter').controller('EventsCtrl', ['$scope', 'Events', EventsCtrl]);

function EventsCtrl($scope, Events) {
  $scope.events = [];
  $scope.predicate = "-datetime_local";


  Events.getEvents().then(function(events){
  	$scope.events = events;
  },
  function(statusCode){
  	console.log("Failed to Load Events");
  }).finally(function(){

  });
}
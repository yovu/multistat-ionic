angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state) {

  $scope.loginData = {};

  $scope.signIn = function(user) {
    console.log('Sign-In', user);
    $state.go('app.home');
  };

})

.controller('AppCtrl', function($scope, $timeout, $state) {

  var getFire = new Firebase("https://multistat.firebaseio.com/");

  getFire.child("411639a04849a8a9cd2c3da637f313de5e60203abb94ef8a0e69f6127adb91d6").on("value", function(data) {
    data = data.val();

    $.each( data.currency, function( key, value ) {
      $( ".balance .list" ).append('<ion-item nav-clear menu-close class="item"><img src="img/coins/'+value.currency+'.png" style="width: 44px;"> <h3><span>'+value.currency+'</span><br>'+value.confirmed_rewards+'</h3></ion-item>');
    });
  });

  console.log('hello');

})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('HomeCtrl', function($scope, $stateParams) {

})

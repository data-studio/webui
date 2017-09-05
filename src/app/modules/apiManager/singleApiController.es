
  angular.module('DataStudioWebui.ApiManager')
    .controller('SingleApiController', SingleApiController);

  SingleApiController.$inject = ['$api', '$timeout', '$scope', '$state', '$mdDialog'];
  function SingleApiController (  $api,   $timeout,   $scope,   $state,   $mdDialog) {

    $scope.apis = [
      {
        Id: "user-api.starmicro.services",
        Name: "User Api",
        Host: "user-api.starmicro.services"
      },
      {
        Id: "app-api.starmicro.services",
        Name: "App Api",
        Host: "app-api.starmicro.services"
      }
    ];

  }

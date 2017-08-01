
  angular.module('DataStudioWebui.ApiManager')
    .controller('ApiManagerController', ApiManagerController);

  ApiManagerController.$inject = ['$api', '$timeout', '$scope', '$state', '$mdDialog'];
  function ApiManagerController (  $api,   $timeout,   $scope,   $state,   $mdDialog) {

    $scope.apis = [
      {
        Id: "c744b0ab-edb6-4623-8555-8fb697b43da5",
        Name: "User Api",
        Host: "user-api.starmicro.services"
      },
      {
        Id: "1310ed93-ea11-4daa-aee6-ec705cfb8201",
        Name: "App Api",
        Host: "app-api.starmicro.services"
      }
    ];

  }

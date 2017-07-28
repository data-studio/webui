
  angular.module('DataStudioWebui.Anon')
    .controller('AnonController', AnonController);

  AnonController.$inject = ['$rootScope', '$scope', '$state', '$auth'];
  function AnonController (  $rootScope,   $scope,   $state,   $auth) {

    $rootScope.$on('authorized', () => {
      $state.go('app.user.dashboard');
    });

    if ($auth.isAuthorized) {
      $state.go('app.user.dashboard');
    }

  };

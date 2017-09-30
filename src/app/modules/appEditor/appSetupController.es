
  angular.module('DataStudioWebui.AppEditor')
    .controller('AppSetupController', AppSetupController);

  AppSetupController.$inject = ['$scope'];
  function AppSetupController (  $scope) {

    let appSetupController = this;

    appSetupController.new = {
      AppName: $scope.model.Name,
    };

    

  }

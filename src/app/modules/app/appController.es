
  angular.module('DataStudioWebui')
    .controller('AppController', AppController);

  AppController.$inject = ['$scope', '$mdDialog', '$animate'];
  function AppController (  $scope,   $mdDialog,   $animate) {

    $scope.showLegal = function ($event, docId) {
      let dialog = {
        controller: 'LegalDialogController',
        templateUrl: 'modules/app/html/dialog/' + docId + '.html',
        parent: angular.element(document.body),
        targetEvent: $event,
        clickOutsideToClose: true,
        fullscreen: true,
      };

      $mdDialog.show(dialog).then(function() {

      }, function() {

      });
    };


  };


  angular.module('DataStudioWebui')
    .controller('LegalDialogController', LegalDialogController);

  LegalDialogController.$inject = ['$scope', '$mdDialog'];
  function LegalDialogController (  $scope,   $mdDialog) {

    $scope.hide = function() {
      $mdDialog.cancel();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function() {
      $mdDialog.hide();
    };

  };

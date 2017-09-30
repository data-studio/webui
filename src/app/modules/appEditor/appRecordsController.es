
  angular.module('DataStudioWebui.AppEditor')
    .controller('AppRecordsController', AppRecordsController);

  AppRecordsController.$inject = ['$scope'];
  function AppRecordsController (  $scope) {

    let appRecordsController = this;

    let users = {
      Label: "Users",
    };

    this.recordTypes = [users];

    this.userState = users;
    this.showType = users;



  }

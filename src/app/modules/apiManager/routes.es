
  angular.module('DataStudioWebui.ApiManager')
    .config(['$stateProvider', function ($stateProvider) {

      $stateProvider
        .state('app.user.apiManager', {
          controller: 'ApiManagerController',
          controllerAs: '$apiManager',
          templateUrl: 'modules/apiManager/html/root.html',
          abstract: true
        })
        .state('app.user.apiManager.apiList', {
          url: '/apis',
          templateUrl: 'modules/apiManager/html/apiList.html'
        })
        .state('app.user.apiManager.api', {
          url: '/api/:apiId',
          templateUrl: 'modules/apiManager/html/api.html'
        });

  }]);

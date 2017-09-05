
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
          controller: 'SingleApiController',
          controllerAs: '$singleApi',
          templateUrl: 'modules/apiManager/html/api.html',
          abstract: true
        })
        .state('app.user.apiManager.api.home', {
          url: '',
          templateUrl: 'modules/apiManager/html/apiHome.html'
        })
        .state('app.user.apiManager.api.config', {
          url: '/config',
          templateUrl: 'modules/apiManager/html/config.html'
        });

  }]);

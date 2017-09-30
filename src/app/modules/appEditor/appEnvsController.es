
  angular.module('DataStudioWebui.AppEditor')
    .controller('AppEnvsController', AppEnvsController);

  AppEnvsController.$inject = ['$scope', '$api', '$mdDialog', 'envs', '$timeout'];
  function AppEnvsController (  $scope,   $api,   $mdDialog,   envs,   $timeout) {

    let $appEnvs = this;

    $appEnvs.envs = envs;

    $appEnvs.current = envs[0];

    $appEnvs.setCurrentEnv = function ($event, env) {
      $appEnvs.current = env;
    };

    $appEnvs.createEnv = function ($event, app) {

      let createAppEnv = {
        controller: 'CreateAppEnvDialogController',
        templateUrl: 'modules/appEditor/html/dialog/createAppEnv.html',
        parent: angular.element(document.body),
        targetEvent: $event,
        clickOutsideToClose: true,
        fullscreen: true,
        locals: {
          app: $scope.model,
        },
      };

      $mdDialog.show(createAppEnv).then(function(data) {
        createEnv(data);
      }, function() {

      });

    }

    function createEnv (data) {

      data = data || {};

      let app = data._app;
      let name = data.Name;
      let IsProduction = data.IsProduction;

      let appId = app.Id || null;
      let newEnv = {
        AppId: appId,
        Name: name,
        IsProduction: IsProduction,
      };

      $api.apiPost('/app/' + appId + '/envs', newEnv)
        .then(function (res) {
          $timeout(function () {
            Object.assign(newEnv, res.data);
            newEnv.Id = res.data.Id;
            $appEnvs.envs.push(newEnv);
          });
        })
        .catch(function (err) {
          console.log(err);
        });

    }

  }
